from flask_discord import DiscordOAuth2Session
from flask import Flask, redirect, url_for, jsonify
from dotenv import load_dotenv
from flask_cors import CORS
from pymongo import MongoClient
import os

app = Flask(__name__)

CORS(app)

load_dotenv()
fora_database = MongoClient(os.getenv('MONGO_URI'))['Fora']
os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "true"
app.config["SECRET_KEY"] = os.getenv('SECRET_KEY')
app.config["DISCORD_CLIENT_ID"] = os.getenv('DISCORD_CLIENT_ID')
app.config["DISCORD_CLIENT_SECRET"] = os.getenv('DISCORD_CLIENT_SECRET')
app.config["DISCORD_REDIRECT_URI"] = "http://127.0.0.1:5000/callback"

discord = DiscordOAuth2Session(app)

@app.route("/logout/")
def logout():
    discord.revoke()
    return f"You have been logged out! <a href='/home/'>Take me home</a>"


@app.route("/login/")
def login():
    redirect_uri = url_for("home", _external=True)
    return discord.create_session(scope=["identify"], prompt=True, redirect=redirect_uri)


@app.route("/callback/")
def callback():
    try:
        discord.callback()

    except Exception:
        return redirect(url_for("home"))

    return redirect(url_for("home"))


@app.route("/")
@app.route("/home/")
def home():
    if not discord.authorized:
        return "Hello, stranger! <a href='/login/'>Login with Discord</a>"

    user = discord.fetch_user()
    return f"Hello, {user.name}! <a href='/logout/'>Try logging out</a>"


@app.route('/api/data/', methods=['GET'])
def api_data():
    if not discord.authorized:
        return jsonify({"error": "Unauthorized"}), 401
    
    user = discord.fetch_user()
    access_token = discord.get_authorization_token()['access_token']

    user_data = fora_database['profile'].find_one({"_id": user.id})
    if user_data is None:
        data = {
            'username': discord.fetch_user().name,
            'user_avatar': discord.fetch_user().avatar_url,
            'user_wallet': 0,
            'user_bank': 0,
            'user_total_balance': 0,
            'user_job': 'Unemployed',
            'user_hours': 0,
            'access_token': access_token,
        }
    else:
        data = {
            'username': discord.fetch_user().name,
            'user_avatar': discord.fetch_user().avatar_url,
            'user_wallet': user_data['wallet'],
            'user_bank': user_data['bank'],
            'user_total_balance': user_data['wallet'] + user_data['bank'],
            'user_job': user_data['job'],
            'user_hours': user_data['hours'],
            'access_token': access_token,
        }
    print("Response data:", data)
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
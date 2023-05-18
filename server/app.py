from flask_discord import DiscordOAuth2Session
from flask import Flask, redirect, url_for, jsonify
from dotenv import load_dotenv
from flask_cors import CORS
import os

app = Flask(__name__)

CORS(app)

load_dotenv()
os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "true" # !! Only in development environment
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


@app.route('/api/data/')
def api_data():
    if not discord.authorized:
        return jsonify({"error": "Unauthorized"}), 401
    
    user = discord.fetch_user()

    data = {
        'message': 'Hello from Flask API!',
        'username': user.name,
    }
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
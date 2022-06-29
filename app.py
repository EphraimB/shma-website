from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/countdown/")
def countdown():
    return render_template('countdown/index.html')

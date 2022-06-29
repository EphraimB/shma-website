from flask import Flask, render_template
import time
from datetime import datetime, timedelta

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/countdown/")
def countdown():
    return render_template('countdown/index.html')

import os
from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route("/")
def index():
  return render_template("index.html")

@app.route("/main.bundle.js")
def send_bundle():
    return send_from_directory("./templates/", "main.bundle.js");

if __name__ == "__main__":
  app.run(debug=True, port=5000)

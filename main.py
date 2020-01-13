import sys, json
from flask import Flask, render_template, request, redirect, Response, make_response, jsonify, session
app= Flask(__name__)
app.secret_key = "13579"
@app.route("/")
def index():
    return app.send_static_file('index.html')
if __name__=="__main__":
    app.run(debug = True)

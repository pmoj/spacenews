from flask import Blueprint

import requests

main_bp = Blueprint("main", __name__)

@main_bp.route("/")
def index():
    return "index"

@main_bp.route("/apod")
def apod():
    
    api_key = 'DEMO_KEY'
    date = '1995-06-16'
    
    url = f"https://api.nasa.gov/planetary/apod?api_key={api_key}&date={date}"
    
    payload={}
    files={}
    headers = {}
    
    response = requests.request("GET", url, headers=headers, data=payload, files=files)
    
    print(response.text)
    
    return response.json()

@main_bp.route("/spacex/missions")
def spacex_missions():
    
    url = "https://api.spacexdata.com/v3/missions"

    payload={}
    files={}
    headers = {}

    response = requests.request("GET", url, headers=headers, data=payload, files=files)

    print(response.text)
    
    return response.json()
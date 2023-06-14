from flask import Blueprint, request

import requests

main_bp = Blueprint("main", __name__)

api_key = 'ST7KLeVFidHteheSyR45KyIvbeItXfvLJJ5d48fR'

@main_bp.route("/")
def index():
    return "index"

@main_bp.route("/apod")
def apod():
    
    date = request.args.get('date', '1995-06-16')
    print(f"data: {date}")
    url = f"https://api.nasa.gov/planetary/apod?api_key={api_key}&date={date}"
    
    payload={}
    files={}
    headers = {}
    
    response = requests.request("GET", url, headers=headers, data=payload, files=files)
    
    print(response.text)
    
    return response.json()

@main_bp.route("/mars_rover")
def mars_rover():
    
    date = request.args.get('date', '1995-06-16')
    url = f"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date={date}&api_key={api_key}"
    
    payload={}
    files={}
    headers = {}
    
    response = requests.request("GET", url, headers=headers, data=payload, files=files)
    
    print(response.text)
    
    return response.json()

@main_bp.route("/near")
def near():
    
    date = request.args.get('date', '1995-06-16')
    url = f"https://api.nasa.gov/neo/rest/v1/feed?start_date={date}&end_date={date}&api_key={api_key}"
          # https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-07&api_key=ST7KLeVFidHteheSyR45KyIvbeItXfvLJJ5d48fR
    payload={}
    files={}
    headers = {}
    
    response = requests.request("GET", url, headers=headers, data=payload, files=files)
    
    print(response.text)
    
    return response.json()
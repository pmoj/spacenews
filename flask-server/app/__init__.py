from flask import Flask
from flask_cors import CORS

url = "https://api.nasa.gov"

def init_app(testing=True):

    app = Flask(__name__, instance_relative_config=False)
    CORS(app=app, resources={r"/*": {"origins": "http://localhost:3000"}})

    with app.app_context():

        from app.views.home import main_bp
        from app.views import home
        
        app.register_blueprint(main_bp)

        return app

    
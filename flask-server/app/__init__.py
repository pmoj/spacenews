from flask import Flask

url = "https://api.nasa.gov"

def init_app(testing=True):

    app = Flask(__name__, instance_relative_config=False)


    with app.app_context():

        from app.views.home import main_bp
        from app.views import home
        
        app.register_blueprint(main_bp)

        return app

    
from flask import Flask
from pnl_server.views import pages_blueprint

application = Flask(__name__, static_folder="./public", template_folder="./templates")

# register the blueprints
application.register_blueprint(pages_blueprint)

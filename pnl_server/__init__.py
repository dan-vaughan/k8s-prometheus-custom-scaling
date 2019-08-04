from flask import Flask
from pnl_server.views import index_blueprint

app = Flask(__name__, static_folder="./public", template_folder="./templates")

# register the blueprints
app.register_blueprint(index_blueprint)

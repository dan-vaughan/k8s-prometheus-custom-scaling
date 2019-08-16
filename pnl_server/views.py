from flask import render_template, Blueprint

pages_blueprint = Blueprint("pages", __name__)


@pages_blueprint.route("/")
def index():
    return render_template("index.html")

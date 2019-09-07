FROM ubuntu:19.04

RUN apt-get update
RUN apt-get install -y python python-pip
RUN apt-get install -y npm nodejs

COPY . /app
ENV PATH /app/demo_app/src/node_modules/.bin:$PATH

RUN pip install -r /app/requirements.txt
RUN npm install --prefix /app/demo_app/src --no-package-lock
RUN npm run-script build --prefix /app/demo_app/src
EXPOSE 8000

CMD [ "gunicorn", "-b", "0.0.0.0:8000", "demo_app", "--pythonpath", "/app" ]
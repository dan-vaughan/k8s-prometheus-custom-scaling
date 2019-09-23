FROM ubuntu:19.04

RUN apt-get update
RUN apt-get install -y python python-pip
RUN apt-get install -y npm nodejs

COPY . /app

RUN pip install -r /app/requirements.txt
RUN npm install --prefix /app/demo_app/src --no-package-lock
RUN npm run-script build --prefix /app/demo_app/src

WORKDIR /app/demo_app
ENV prometheus_multiproc_dir /tmp
EXPOSE 8000
CMD [ "gunicorn", "-c", "config.py", "-w", "4", "-b", "0.0.0.0:8000", "server"]
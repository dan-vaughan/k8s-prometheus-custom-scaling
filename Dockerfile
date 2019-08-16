FROM ubuntu:19.04

RUN apt-get update
RUN apt-get install -y python python-pip

COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip install -r requirements.txt

COPY . /app

EXPOSE 8000

CMD [ "gunicorn", "-b", "0.0.0.0:8000", "pnl_server" ]
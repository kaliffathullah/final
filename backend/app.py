from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import datetime, timedelta
import serial
import threading

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:kaliff@localhost/fan_control'
db = SQLAlchemy(app)


class Fan(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    runtime = db.Column(db.Float)
    last_maintenance = db.Column(db.Date)
    status = db.Column(db.String(10), default='off')


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)


ser = serial.Serial('COM6', 9600)  # Update with your serial port and baud rate


def read_from_serial():
    while True:
        if ser.in_waiting > 0:
            line = ser.readline().decode('utf-8').strip()
            print(line)
            # Parse and handle the incoming data from Arduino


thread = threading.Thread(read_from_serial())
thread.daemon = True
thread.start()


@app.route('/api/fans', methods=['GET'])
def get_fans():
    fans = Fan.query.all()
    return jsonify([{'id': fan.id, 'runtime': fan.runtime, 'lastMaintenance': fan.last_maintenance.strftime('%Y-%m-%d'), 'status': fan.status} for fan in fans])


@app.route('/api/fans', methods=['POST'])
def add_fan():
    data = request.json
    new_fan = Fan(id=data['id'], runtime=data['runtime'], last_maintenance=datetime.now())
    db.session.add(new_fan)
    db.session.commit()
    return jsonify({'success': True})


@app.route('/api/fan/control', methods=['POST'])
def control_fan():
    data = request.json
    fan_id = data.get('id')
    status = data.get('status')

    fan = Fan.query.get(fan_id)
    if fan:
        fan.status = status
        db.session.commit()

        # Send command to Arduino
        ser.write(f"{fan_id},{status}\n".encode())

        return jsonify({'success': True})
    return jsonify({'success': False})


@app.route('/api/fan/status', methods=['GET'])
def get_fan_status():
    # Return the current status of the fan
    # Assume there's a single fan for simplicity
    fan = Fan.query.first()
    if fan:
        return jsonify({'status': fan.status})
    return jsonify({'status': 'unknown'})


@app.route('/api/maintenance-alerts', methods=['GET'])
def maintenance_alerts():
    now = datetime.now()
    alert_list = []
    for fan in Fan.query.all():
        last_maintenance = fan.last_maintenance
        if now - last_m
        aintenance > timedelta(days=30):
            alert_list.append({'id': fan.id, 'message': 'Maintenance overdue'})
    return jsonify(alert_list)


@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email'], password=data['password']).first()
    if user:
        return jsonify({'success': True})
    return jsonify({'success': False})


@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    existing_user = User.query.filter_by(email=data['email']).first()
    if existing_user:
        return jsonify({'success': False})
    new_user = User(email=data['email'], password=data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'success': True})


if __name__ == '_main_':
    db.create_all()
    app.run(debug=True)
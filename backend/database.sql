-- Create database if not exists
CREATE DATABASE IF NOT EXISTS fan_control;

-- Use the created database
USE fan_control;

-- Create table for storing user details
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create table for storing fan details
CREATE TABLE IF NOT EXISTS fans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fan_id VARCHAR(50) NOT NULL UNIQUE,
    runtime INT DEFAULT 0,
    last_maintenance DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create table for storing sensor data
CREATE TABLE IF NOT EXISTS sensor_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fan_id VARCHAR(50) NOT NULL,
    air_quality FLOAT,
    rpm INT,
    vibration FLOAT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fan_id) REFERENCES fans(fan_id)
);

-- Create table for maintenance alerts
CREATE TABLE IF NOT EXISTS maintenance_alerts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fan_id VARCHAR(50) NOT NULL,
    alert_message TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fan_id) REFERENCES fans(fan_id)
);
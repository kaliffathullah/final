import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export async function getFans() {
  try {
    const response = await axios.get($,{API_URL}/fans);
    return response.data;
  } catch (error) {
    console.error('Error fetching fans:', error);
  }
}

export async function addFan(fanData) {
  try {
    const response = await axios.post($,{API_URL}/fans, fanData);
    return response.data;
  } catch (error) {
    console.error('Error adding fan:', error);
  }
}

export async function updateFan(fanId, fanData) {
  try {
    const response = await axios.put($,{API_URL}/fans/$,{fanId}, fanData);
    return response.data;
  } catch (error) {
    console.error('Error updating fan:', error);
  }
}

export async function deleteFan(fanId) {
  try {
    await axios.delete($,{API_URL}/fans/$,{fanId});
  } catch (error) {
    console.error('Error deleting fan:', error);
  }
}

export async function getMaintenanceAlerts() {
  try {
    const response = await axios.get($,{API_URL}/maintenance_alert);
    return response.data;
  } catch (error) {
    console.error('Error fetching maintenance alerts:', error);
  }
}
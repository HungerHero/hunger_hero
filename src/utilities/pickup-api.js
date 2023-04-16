import sendRequest from "./send-request";
const BASE_URL = '/api/pickups';

export async function createPickup(pickupData) {
  // console.log("pickup DATA CREATE", pickupData)
  return sendRequest(BASE_URL, 'POST', pickupData);
}

export async function getReceiverPickups(id) {
  console.log("ID sendRequest -> ", id)
  return sendRequest(`${BASE_URL}/receiver/${id}`, 'GET')
}

export async function getDistributorPickups(id) {
  return sendRequest(`${BASE_URL}/distributor/${id}`, 'GET')
}

export async function getPickup(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'GET')
}

export async function updatePickup(id, pickupData) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', pickupData)
}

export async function deletePickup(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}


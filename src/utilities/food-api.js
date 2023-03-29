import sendRequest from "./send-request";
const BASE_URL = '/api/foods';

export async function createFood(foodData) {
  // console.log("FOOD DATA CREATE", foodData)
  return sendRequest(BASE_URL, 'POST', foodData);
} 

export async function getAll(){
  // console.log('all the food items');
  return sendRequest(BASE_URL)
}

export async function getFood(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'GET')
}

export async function deleteFood(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}
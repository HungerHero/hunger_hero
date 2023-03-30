import sendRequest from "./send-request";
const BASE_URL = '/api/requests';

export async function createRequest(requestData) {
  // console.log("request DATA CREATE", requestData)
  return sendRequest(BASE_URL, 'POST', requestData);
} 

export async function getRequest(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'GET')
}

export async function getAll(){
  // console.log('all the requests');
  return sendRequest(BASE_URL)
}

export async function getRequesterUser(userIds) {
  // console.log(userIds, 'utilities api')
  return sendRequest(`${BASE_URL}/users`, 'POST', userIds)
}
import * as foodAPI from './food-api';

export async function createFood(foodData) {
  // console.log(foodData, "<----- FOOD DATA")
  const food = await foodAPI.createFood(foodData);
  return { food }
  
//   localStorage.setItem('token', token);
//   return getUser();
}
import axios from "axios";

const baseURL = 'http://universities.hipolabs.com/search?country=';

export const getInfoFromServer = async (endpoint) => {
  try {
    return await axios.get(baseURL + endpoint);
  } catch(e) {
    console.log(e)
  }
}
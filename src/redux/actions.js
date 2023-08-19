export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
import axios from "axios";

export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, character);
      const data = response.data;
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  };
};

export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return async (dispatch) => {
    try {
      const response = await axios.delete(endpoint);
      const data = response.data;
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };
};

export const filterCards = (gender) => {
  const payload = gender === "All genders" ? null : gender;
  return {
    type: "FILTER",
    payload: payload,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
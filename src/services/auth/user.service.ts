import axios from "axios";
import BaseService from "./base.service";

export default class UserService extends BaseService {
    

  async getCountries() {
    try {
      const response = await axios.get(this.BASE_URL + "/countries");
      return response.data;
    } catch (error) {
      return error;
    }
  }
  
  async getCountryState(id: string) {
    try {
      const response = await axios.get(this.BASE_URL + "/Country/states/" + id);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getCategories() {
    try {
      const response = await axios.get(this.BASE_URL + "/categories");
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async userProfile(token: string) {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      };
      const response = await axios.get(this.BASE_URL + "/user/profile", {
        headers: headers,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
}



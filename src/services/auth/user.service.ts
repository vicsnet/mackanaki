import axios from "axios";
import BaseService from "./base.service";

export default class UserService extends BaseService {
  async getCountries() {
    try {
      const response = await axios.get(this.BASE_URL + "/api/countries");
      return response.data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return message;
    }
  }

  async getCountryState(id: string) {
    try {
      const response = await axios.get(
        this.BASE_URL + "/api/Country/states/" + id
      );
      return response.data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return message;
    }
  }

  async getCategories() {
    try {
      const response = await axios.get(this.BASE_URL + "/api/categories");
      return response.data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return message;
    }
  }

  async userProfile(token: string) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      this.BASE_URL + "/api/user/profile",
      config
    );

    return response.data;
  }
}

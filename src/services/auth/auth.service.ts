import axios from "axios";
import BaseService from "./base.service";

export default class AuthService extends BaseService {
  async register(data: { [props: string]: string }) {
    const response = await axios.post(
      this.BASE_URL + "/api/user/register",
      data
    );
    return response.data;
  }

  async login(loginData: { [props: string]: string }) {
    const extraBody = {
      grant_type: "password",
      client_id: "2",
      client_secret: "diG5UvJ8uJV7qB96IUaReysbl0wmlu0qoQG3BSUb",
    };
    const data = { ...loginData, ...extraBody };
    const response = await axios.post(this.BASE_URL + "/oauth/token", data);
    return response.data;
  }

  async verifyEmail(data: { [props: string]: string }) {
    const response = await axios.post(this.BASE_URL + "/api/user/verify", data);
    return response.data;
  }
}

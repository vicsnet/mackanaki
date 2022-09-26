import axios from "axios";
import BaseService from "../base.service";

export default class AuthService extends BaseService {
  async register(data: { [props: string]: string }) {
    const response = await axios.post(
      this.BASE_URL + "/api/user/register",
      data
    );
    return response.data;
  }

  async login(data: { [props: string]: string }) {
    const response = await axios.post(this.BASE_URL + "/api/login", data);
    return response.data;
  }

  async verifyEmail(data: { [props: string]: string }) {
    const response = await axios.post(this.BASE_URL + "/api/user/verify", data);
    return response.data;
  }
}

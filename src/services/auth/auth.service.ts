import axios from "axios";
import BaseService from "./base.service";

export default class AuthService extends BaseService {
  async register(data: { [props: string]: string }) {
    const response = await axios.post(this.BASE_URL + "/user/register", data);
    return response.data;
  }
  login() {}

  async verifyEmail(data: { [props: string]: string }) {
    const response = await axios.post(this.BASE_URL + "/user/verify", data);
    return response.data;
  }
}

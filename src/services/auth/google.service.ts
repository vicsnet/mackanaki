import axios from "axios";
import BaseService from "../base.service";

export default class GoogleService extends BaseService {
  async signupWithGoogle() {
    const response = await axios.get(this.BASE_URL + "/auth/google");
    return response.data;
  }

  async handleGoogleCallback(params: string) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const response = await axios.get(
      this.BASE_URL + "/auth/google/callback" + params,
      config
    );
    return response.data;
  }
}

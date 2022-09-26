import axios from "axios";
import BaseService from "../base.service";

export default class PostService extends BaseService {
    

    
  async getAllPost(token: string) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(this.BASE_URL + "/api/post/all", config);
    return response.data;
  }
}

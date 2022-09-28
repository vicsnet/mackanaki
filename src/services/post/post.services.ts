import axios from "axios";
import BaseService from "../base.service";

export default class PostService extends BaseService {
  private get checkLocalStorageforPost() {
    let retrievedObject = localStorage.getItem("post");
    if (retrievedObject === null) {
      return false;
    }
    return retrievedObject;
  }

  get getPostFromLocalStorage() {
    try {
      if (this.checkLocalStorageforPost === false) {
        return [];
      } else {
        return JSON.parse(this.checkLocalStorageforPost);
      }
    } catch (error) {
      return [];
    }
  }

  updatePostInLS(posts: { [props: string]: string }[]) {
    localStorage.setItem("post", JSON.stringify(posts));
  }

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

  async likePost(id: string, token: string) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      this.BASE_URL + "/api/post/like/" + id,
      {},
      config
    );
    return response.data;
  }

  async unlikePost(id: string, token: string) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      this.BASE_URL + "/api/post/unlike/" + id,
      {},
      config
    );
    return response.data;
  }

  async addPost(data: { description: string; image: string }, token: string) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    let formdata = new FormData();
    // console.log(data.image);
    //     const imageFile = new File([value], `${Date.now()}.${extension}`, {
    //       type: data.image.type,
    // });

    formdata.append("image", data.image);
    formdata.append("description", data.description);
    const response = await axios.post(
      this.BASE_URL + "/api/post/create",
      formdata,
      config
    );
    return response.data;
  }
}

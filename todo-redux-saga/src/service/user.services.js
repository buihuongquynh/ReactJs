import { axiosClient } from "./config.services";

class User {
  static listUser() {
    let url = "/products";
    return axiosClient.get(url);
  }

  static addUser(obj) {
    let url = "/products";
    return axiosClient.post(url, { ...obj });
  }
  static postUser(obj) {
    let url = "/products";
    return axiosClient.get(url, { ...obj });
  }

  static deleteUser(id) {
    let url = `/products/${id}`;
    return axiosClient.delete(url);
  }

  static editUser(obj) {
    let url = `/products/${obj.id}`;
    return axiosClient.put(url, { ...obj });
  }
}
export default User;

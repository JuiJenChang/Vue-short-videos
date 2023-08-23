import axios from "axios";

const apiUrl = "http://localhost:3000";

const getFollowingList = async () => {
  return await axios
    .get(`${apiUrl}/following_list`)
    .then((res) => {
      return res;
    })
    .catch((err) => Promise.reject(err));
};

const getForYouList = async () => {
  return await axios
    .get(`${apiUrl}/for_you_list`)
    .then((res) => {
      return res;
    })
    .catch((err) => Promise.reject(err));
};

const ApiCaller = {
  getFollowingList,
  getForYouList,
};

export default ApiCaller;

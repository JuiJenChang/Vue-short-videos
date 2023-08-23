import { defineStore } from "pinia";
import ApiCaller from "../service";

const followingList = defineStore("followingList", {
  state: () => ({
    list: [],
  }),
  actions: {
    async getFollowingListAction() {
      try {
        const response = await ApiCaller.getFollowingList();
        if (
          response.status === 200 &&
          response.data.items &&
          response.data.items.length
        ) {
          this.list = response.data.items;
          return response.data.items;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export default followingList;

import { defineStore } from "pinia";
import ApiCaller from "../service";

const forYouList = defineStore("forYouList", {
  state: () => ({
    list: [],
  }),
  actions: {
    async getForYouListAction() {
      try {
        const response = await ApiCaller.getForYouList();
        if (
          response.status === 200 &&
          response.data.items &&
          response.data.items.length
        ) {
          this.list = response.data.items;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export default forYouList;

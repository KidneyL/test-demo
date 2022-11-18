import { defineStore } from "pinia";
import { getList } from "../server";
export const useStore = defineStore({
  id: "time",
  state: () => ({
    list: [],
  }),
  actions: {
    async getList() {
      const result = await getList();
      return result;
    },
  },
});

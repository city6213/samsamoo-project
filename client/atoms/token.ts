import { atom } from "recoil";

export const tokenAtrom = atom({
  key: "token",
  default: { data: { name: "" } },
});

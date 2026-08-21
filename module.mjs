// @ts-check
import { module } from "@prisma/composer";
import tanstackService from "./service.mjs";

export default module("tanstack-app", ({ provision }) => {
  provision(tanstackService);
});

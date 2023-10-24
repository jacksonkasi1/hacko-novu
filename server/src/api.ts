import { Elysia } from "elysia";

import postController from "./controller";

const api = new Elysia();

api.get("/posts", (e) => postController.getPosts(e));


api.get("/", (e) => {
    return e;
});

export default api;

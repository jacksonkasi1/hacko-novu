import { Elysia } from "elysia";
import api from "./api";

const app = new Elysia()

app.use(api)

app.listen(5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

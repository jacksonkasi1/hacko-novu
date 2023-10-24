import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'

import api from "./api";

const app = new Elysia()

app.use(api)
app.use(cors())

app.listen(5000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'

import api from "./api";

const app = new Elysia()

app.use(api)
app.use(cors()).trace(async ({ handle, set }) => {
  const { time, end, skip } = await handle

  set.headers['Server-Timing'] = `handle;dur=${(await end) - time}`
  set.headers['Server-Skip'] = `handle;dur=${skip}`
})
app.listen(5000);


console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

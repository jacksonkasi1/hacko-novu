import postHandler from "@handler/index";

import { handleResponse } from "@utils/index";

const postController = {
  getPosts: handleResponse(postHandler.getPosts()),
};

export default postController;

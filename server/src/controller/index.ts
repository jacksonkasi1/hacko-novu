import postHandler from "@handler/index";

import { handleResponse } from "@utils/index";

const postController = {
  getPosts: (e: any) => handleResponse(postHandler.getPosts(e)),
};  

export default postController;

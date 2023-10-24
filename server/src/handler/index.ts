import {   } from 'elysia'
import { posts, Post } from "@data/posts";
import response from "@interface/response";

interface PostResponse extends response {
  data: Post[];
}

const postHandler = {
  getPosts: async (): Promise<PostResponse> => {

    return {
      success: true,
      data: posts,
      message: "Get all posts successfully!",
    };
  },
};

export default postHandler;

import { IPost } from "@/interfaces/post";
import ky from "ky";

const blogApi = ky.create({ prefixUrl: process.env.NEXT_PUBLIC_BLOG_API });

export const fetchPosts = async (limit?: number): Promise<IPost[]> => {
  return blogApi
    .get("posts", {
      searchParams: { _limit: limit ? limit : 10 },
    })
    .json();
};

export const fetchPostById = async (id: number): Promise<IPost> => {
  return blogApi.get(`posts/${id}`).json();
};

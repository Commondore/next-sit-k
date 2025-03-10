import { fetchPosts } from "@/api/blog";
import { Posts } from "@/components/posts";

export default async function PostsPage() {
  const posts = await fetchPosts(6);

  return <Posts posts={posts} />;
}

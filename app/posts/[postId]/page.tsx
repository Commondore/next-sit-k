import { fetchPostById } from "@/api/blog";
import { PostItem } from "@/components/posts/post-item";

interface Props {
  params: {
    postId: string;
  };
}

export default async function PostItemPage({ params: { postId } }: Props) {
  const post = await fetchPostById(+postId);

  return <PostItem post={post} />;
}

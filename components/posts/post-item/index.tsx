import { IPost } from "@/interfaces/post";

interface Props {
  post: IPost;
}

export const PostItem = ({ post }: Props) => {
  return (
    <div className="p-10 bg-gray-200 mt-8">
      <h1 className="text-4xl font-semibold mb-8">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

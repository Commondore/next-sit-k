import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { IPost } from "@/interfaces/post";
import { subStr } from "@/lib/utils";
import Link from "next/link";

interface Props {
  posts: IPost[];
}

export const Posts = ({ posts }: Props) => {
  return (
    <>
      <h1 className="text-3xl font-semibold mt-8">Последние Новости</h1>
      <div className="grid grid-cols-3 gap-4 my-8">
        {posts.map((post) => {
          return (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{subStr(post.title, 30)}</CardTitle>
                <CardDescription>{subStr(post.body, 50)}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href={`/posts/${post.id}`}>Подробнее</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
};

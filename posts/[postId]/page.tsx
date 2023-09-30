import { getSortedPostsData } from "@/lib/post";
import { notFound } from "next/navigation";

const Post = async ({ params }: { params: { postId: string } }) => {
  const posts = getSortedPostsData(); //deduped
  const { postId } = params;

  return <div>Post</div>;
};

export default Post;

import { client, sanityFetch } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";
import { Post } from "@/components/post";
import { notFound } from "next/navigation";

type PostIndexProps = { params: { slug: string } };

export default async function Page({ params }: PostIndexProps) {
  const post = await sanityFetch({
    query: POST_QUERY,
    params,
    revalidate: 3600,
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Post {...post} />
    </main>
  );
}

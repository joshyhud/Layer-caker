import { sanityFetch } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { PostCard } from "@/components/postCard";
import { Title } from "@/components/title";

export default async function Page() {
  const posts = await sanityFetch({ query: POSTS_QUERY, revalidate: 3600 });

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>Post Index</Title>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </main>
  );
}

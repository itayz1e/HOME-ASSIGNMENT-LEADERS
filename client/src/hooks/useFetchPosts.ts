import { useEffect, useState } from "react";

const useFetchPosts = (userId: string) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [postsCount, setPostsCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/influencer/user-feed?url=${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        console.log(data);
        setPostsCount(data.length);
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [userId]);

  return { posts, postsCount, loading };
};

export default useFetchPosts;

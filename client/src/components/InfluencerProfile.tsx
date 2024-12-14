import { useEffect, useState } from "react";
import { InfluencerProfileProps } from "../interface";
import "../style/InfluencerProfile.scss";
import { noPicture } from "./SearchResults";

const InfluencerProfile: React.FC<InfluencerProfileProps> = ({
  influencer,
}) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/influencer/user-feed?url=${influencer.user_id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError("Error loading posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, [influencer.user_id]);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img
          src={influencer.picture || noPicture}
          alt=""
          className="profile-image"
        />
        <div className="profile-info">
          <div className="profile-name">
            <h1>{influencer.username}</h1>
            {influencer.is_verified && (
              <span className="verified-badge">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6294/6294076.png"
                  alt=""
                />
              </span>
            )}
          </div>
          <div className="profile-stats">
            <span>{influencer.postsCount} posts</span>
            <span>{influencer.followers} followers</span>
          </div>
          <div className="profile-bio">CUFF IT season</div>
          {influencer.contactInfo && (
            <div className="profile-contact">{influencer.contactInfo}</div>
          )}
        </div>
      </div>
      {loading && <p>Loading posts...</p>}
      {error && <p>{error}</p>}
      <div className="posts-grid">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <a key={post.pk} className="post-item">
              <img
                src={`http://localhost:3000/influencer/proxy-image?url=${encodeURIComponent(
                  post.display_url
                )}`}
                alt={`Post ${index + 1}`}
                onError={(e) => {
                  const imgElement = e.target as HTMLImageElement;
                  imgElement.src = noPicture; // תמונת חלופה
                }}
              />
              <div className="post-overlay">
                <span>🤍{post.like_count}</span>
                <span>💬{post.comment_count}</span>
              </div>
            </a>
          ))
        ) : (
          <p>No recent posts available.</p>
        )}
      </div>
    </div>
  );
};

export default InfluencerProfile;

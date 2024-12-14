export interface Influencer {
  user_id: any;
  fullname: string;
  username: string;
  followers: string;
  picture: string;
  is_verified: boolean;
  contactInfo?: string;
  postsCount?:number;
  recentPosts: {
    type: string;
    link: string;
    likesCount: String;
    commentsCount: number;
    viewsCount: number;
    imageUrl: string;
  }[];
}

export interface InfluencerProfileProps {
  influencer: Influencer;
}

export interface SearchBarProps {
  onSelect: (influencer: Influencer) => void;
}

export interface SearchResultsProps {
    results: Influencer[];
    onSelect: (influencer: Influencer) => void;
  }

export interface ApiResponse {
    success: boolean;
    data: Influencer[];
  }
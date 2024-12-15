export interface Influencer {
  user_id: string;
  fullname: string;
  username: string;
  followers: string;
  picture: string;
  is_verified: boolean;
}

export interface InfluencerProfileProps {
  influencer: Influencer;
}

export interface SearchBarProps {
  onSelect: (influencer: Influencer) => void;
}

export interface ApiResponse {
  success: boolean;
  data: Influencer[];
}

export interface SearchResultsProps {
  results: Influencer[];
  onSelect: (influencer: Influencer) => void;
}
export interface Influencer {
    user_id: string;
    username: string;
    fullname: string;
    picture: string;
    followers: number;
    is_verified: boolean;
  }

  export class Feed {
    user_id: string;
    username: string;
    media_url: string;
    caption: string;
    like_count: number;
    comment_count: number;
    timestamp: string;
  }
  
  
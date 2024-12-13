export interface Influencer {
  name: string;
  username: string;
  followers: string;
  following?: string;
  profile_image: string;
  isVerified: boolean;
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

export const influencers: Influencer[] = [
    {
      name: "Itay Zoo",
      username: "itayz1e",
      followers: "486k",
      profile_image: "",
      isVerified: true,
      postsCount:50,
      contactInfo: "itayzoo@example.com",
      recentPosts: [
        {
          type: "Photo",
          link: "https://example.com/post1",
          likesCount: '15K',
          commentsCount: 50,
          viewsCount: 2000,
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          type: "Photo",
          link: "https://example.com/post1",
          likesCount: "26K",
          commentsCount: 50,
          viewsCount: 2000,
          imageUrl: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        },
        {
          type: "Photo",
          link: "https://example.com/post1",
          likesCount: '25K',
          commentsCount: 50,
          viewsCount: 2000,
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          type: "Photo",
          link: "https://example.com/post1",
          likesCount: '25K',
          commentsCount: 50,
          viewsCount: 2000,
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          type: "Photo",
          link: "https://example.com/post1",
          likesCount: '25K',
          commentsCount: 50,
          viewsCount: 2000,
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          type: "Photo",
          link: "https://example.com/post1",
          likesCount: '25K',
          commentsCount: 50,
          viewsCount: 2000,
          imageUrl: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      name: "John Doe",
      username: "john_doe",
      followers: "388k",
      profile_image: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      isVerified: false,
      contactInfo: "johndoe@example.com",
      recentPosts: [
        {
          type: "Video",
          link: "https://example.com/post2",
          likesCount: '25K',
          commentsCount: 200,
          viewsCount: 10000,
          imageUrl: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      name: "Jane Smith",
      username: "jane_smith",
      followers: "150k",
      profile_image: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      isVerified: true,
      contactInfo: "janesmith@example.com",
      recentPosts: [
        {
          type: "Photo",
          link: "https://example.com/post3",
          likesCount: '25K',
          commentsCount: 20,
          viewsCount: 800,
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          type: "Reel",
          link: "https://example.com/post4",
          likesCount: '25K',
          commentsCount: 150,
          viewsCount: 5000,
          imageUrl: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      name: "Itay Gon",
      username: "itaygon",
      followers: "2152k",
      profile_image: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      isVerified: false,
      contactInfo: "itaygon@example.com",
      recentPosts: [],
    },
    {
      name: "Alice Cooper",
      username: "alice_cooper",
      followers: "621k",
      profile_image: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      isVerified: true,
      contactInfo: "alicecooper@example.com",
      recentPosts: [
        {
          type: "Photo",
          link: "https://example.com/post5",
          likesCount: '25K',
          commentsCount: 30,
          viewsCount: 2525,
          imageUrl: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      name: "Bob Marley",
      username: "bob_marley",
      followers: "524k",
      profile_image: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      isVerified: false,
      contactInfo: "bobmarley@example.com",
      recentPosts: [
        {
          type: "Video",
          link: "https://example.com/post6",
          likesCount: '25K',
          commentsCount: 300,
          viewsCount: 15000,
          imageUrl: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      name: "Reut Elma",
      username: "reutEM",
      followers: "900k",
      profile_image: "",
      isVerified: true,
      contactInfo: "reutelma@example.com",
      recentPosts: [
        {
          type: "Story",
          link: "https://example.com/post7",
          likesCount: '25K',
          commentsCount: 10,
          viewsCount: 1000,
          imageUrl: "https://via.placeholder.com/150",
        },
      ],
    },
  ];
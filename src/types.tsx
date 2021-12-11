export interface PostEntity {
  id: string;
  username: string;
  height: number;
  width: number;
  image: string;
  caption?: string;
  location?: string;
  comments: number;
  likes: number;
  timestamp: Date;
  isCarousel: boolean;
  carouselImages?: string[];
}

export interface PictureAndPosts {
  profilePic: string;
  posts: PostEntity[];
}

export interface StyleProps {
  [key: string]: any;
}

export type AccountsWithPosts = Record<string, PictureAndPosts>;

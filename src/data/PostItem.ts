export type PostItem = {
  id: number;
  title: string;
  likes: number;
  image: string;
  comments: {
    id: number;
    content: string;
    imageId: number;
  }[];
};

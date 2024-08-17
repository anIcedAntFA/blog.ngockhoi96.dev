import type { CardProps } from '../card/card.type';

export type CardPost = {
  id: number;
  author: string;
  avatar: string;
  modifiedDate: string;
  readingTime: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
};

export type CardPostProps = CardProps & {
  data: CardPost;
};

import type { CardProps } from '../card/card.type';

export type CardPostProps = CardProps & {
  author: string;
  avatar: string;
  modifiedDate: string;
  readingTime: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
};

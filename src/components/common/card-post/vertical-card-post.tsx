import Image from 'next/image';

import { Link } from '@/i18n/navigation';

import { Card, CardBody, CardHeader, CardFooter } from '../card';
import { Tag, TagLabel } from '../tag';

import styles from './card-post.module.css';
import type { CardPostProps } from './card-post.type';

function VerticalCardPost({
  author,
  avatar,
  modifiedDate,
  readingTime,
  title,
  description,
  thumbnail,
  tags,
  ...cardProps
}: CardPostProps) {
  return (
    <Card className={styles.wrapper} {...cardProps}>
      <Link href="/articles" className={styles['thumbnail-wrapper']}>
        <Image
          src={thumbnail}
          alt="thumbnail"
          width={360}
          height={240}
          className={styles.thumbnail}
        />
        <div className={styles['thumbnail-overlay']} />
      </Link>
      <CardBody>
        <CardHeader className={styles.header}>
          <Link href="/about" className={styles.avatar}>
            <Image src={avatar} alt="avatar" width={32} height={32} />
          </Link>
          <Link href="/about" className={styles.author}>
            <p>{author}</p>
          </Link>
          <time className={styles['modified-date']}>{modifiedDate}</time>
          <small className={styles['reading-time']}>{readingTime}</small>
        </CardHeader>
        <Link href="/articles" className={styles.heading}>
          <h5>{title}</h5>
        </Link>
        <p className={styles.description}>{description}</p>
      </CardBody>
      <CardFooter className={styles.footer}>
        {tags.map((tag) => (
          <Tag
            key={tag}
            variant="text"
            onClick={() => console.log(`go to ${tag} posts`)}
          >
            <TagLabel>#{tag}</TagLabel>
          </Tag>
        ))}
      </CardFooter>
    </Card>
  );
}

export default VerticalCardPost;

import Image from 'next/image';

import ShareIcon from '@/components/icons/share-icon';
import { Link } from '@/i18n/navigation';

import { Card, CardBody, CardHeader, CardFooter } from '../card';
import IconButton from '../icon-button';
import { Tag, TagLabel } from '../tag';

import styles from './card-post.module.css';
import type { CardPostProps } from './card-post.type';

function HorizontalCardPost({ data, ...cardProps }: CardPostProps) {
  const {
    author,
    avatar,
    modifiedDate,
    readingTime,
    title,
    description,
    thumbnail,
    tags,
  } = data;

  return (
    <Card
      data-orientation="horizontal"
      className={styles.wrapper}
      {...cardProps}
    >
      <Link
        href="/articles"
        data-orientation="horizontal"
        className={styles['thumbnail-wrapper']}
      >
        <Image
          src={thumbnail}
          alt="thumbnail"
          width={208}
          height={208}
          className={styles.thumbnail}
        />
        <div className={styles['thumbnail-overlay']} />
      </Link>
      <div className={styles.content}>
        <CardHeader className={styles.header}>
          <Link href="/about" className={styles.avatar}>
            <Image src={avatar} alt="avatar" width={36} height={36} />
          </Link>
          <Link href="/about" className={styles.author}>
            <p>{author}</p>
          </Link>
          <time className={styles['modified-date']}>{modifiedDate}</time>
          <small className={styles['reading-time']}>{readingTime}</small>
        </CardHeader>
        <CardBody className={styles.body}>
          <Link href="/articles" className={styles.heading}>
            <h5>{title}</h5>
          </Link>
          <p className={styles.description}>{description}</p>
        </CardBody>
        <CardFooter className={styles.footer}>
          <ul className={styles['tag-list']}>
            {tags.map((tag) => (
              <li key={tag}>
                <Tag
                  variant="text"
                  onClick={() => console.log(`go to ${tag} posts`)}
                >
                  <TagLabel>#{tag}</TagLabel>
                </Tag>
              </li>
            ))}
          </ul>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </CardFooter>
      </div>
    </Card>
  );
}

export default HorizontalCardPost;

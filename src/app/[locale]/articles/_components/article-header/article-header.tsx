'use client';

import Image from 'next/image';

import Button from '@/components/common/button';
import CustomTooltip from '@/components/common/custom-tooltip';
import IconButton from '@/components/common/icon-button';
import ArrowLeftIcon from '@/components/icons/arrow-left-icon';
import BookmarkIcon from '@/components/icons/bookmark-icon';
import CalendarIcon from '@/components/icons/calendar-icon';
import HeartIcon from '@/components/icons/heart-icon';
import MessageCircleIcon from '@/components/icons/message-circle-icon';
import TextWordCountIcon from '@/components/icons/text-word-count-icon';
import TimerIcon from '@/components/icons/timer-icon';
import useBoolean from '@/hooks/use-boolean';
import { Link } from '@/i18n/routing';

import ArticleShareButton from '../article-share-button';

import styles from './article-header.module.css';

type Author = {
  title: string;
  avatar: string;
  slug: string;
  github: string;
  description?: string;
};

type ArticleHeaderProps = {
  heading: string;
  authors: Author[];
  modifiedDate: string;
  readingTime: string;
  wordCount: number;
};

function ArticleHeader({
  heading,
  authors,
  modifiedDate,
  readingTime,
  wordCount,
}: ArticleHeaderProps) {
  const like = useBoolean(false);

  const save = useBoolean(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles['back-btn']}>
        <Button
          variant='text'
          icon={{
            position: 'left',
            children: <ArrowLeftIcon />,
            animation: 'shake-x',
          }}
        >
          Back to Articles
        </Button>
      </div>

      <h1 className={styles.heading}>{heading}</h1>

      <div className={styles.meta}>
        {authors?.map((author) =>
          author ? (
            <div key={author.slug} className={styles.author}>
              <Image
                src={author.avatar}
                alt='avatar'
                width={48}
                height={48}
                className={styles.avatar}
              />
              <Link href='/about' className={styles.name}>
                <p>{author.title}</p>
              </Link>
              <Link
                href={`https://github.com/${author.github}`}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.nickname}
              >
                <p>@{author.github}</p>
              </Link>
            </div>
          ) : null,
        )}
        <div className={styles['post-info']}>
          <time className={styles['modified-date']}>
            <span className={styles.icon}>
              <CalendarIcon />
            </span>
            Published on {modifiedDate}
          </time>
          <small className={styles['reading-time']}>
            <span className={styles.icon}>
              <TimerIcon />
            </span>
            <p>{readingTime}</p>
          </small>
          <small className={styles['word-count']}>
            <span className={styles.icon}>
              <TextWordCountIcon />
            </span>
            <p>{wordCount} words</p>
          </small>
        </div>
      </div>

      <div className={styles.actions}>
        <div className={styles['action-group']}>
          <CustomTooltip label='Like' hasArrow>
            <Button
              aria-label='Like this article'
              variant='text'
              color={like.value ? 'error' : 'base'}
              rounded
              icon={{
                position: 'left',
                children: (
                  <HeartIcon
                    className={styles['like-icon']}
                    data-active={like.value}
                  />
                ),
              }}
              onClick={like.toggle}
            >
              69
            </Button>
          </CustomTooltip>

          <CustomTooltip label='See comments' hasArrow>
            <Link href='/about'>
              <Button
                aria-label='See all comments'
                variant='text'
                color='base'
                rounded
                icon={{
                  position: 'left',
                  children: <MessageCircleIcon />,
                }}
              >
                9
              </Button>
            </Link>
          </CustomTooltip>
        </div>

        <div className={styles['action-group']}>
          <CustomTooltip label='Save' hasArrow>
            <IconButton
              label='Save this article'
              color={save.value ? 'warning' : 'base'}
              rounded
              onClick={save.toggle}
            >
              <BookmarkIcon
                className={styles['save-icon']}
                data-active={save.value}
              />
            </IconButton>
          </CustomTooltip>

          <ArticleShareButton />
        </div>
      </div>
    </div>
  );
}

export default ArticleHeader;

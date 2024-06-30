import Image from 'next/image';

import TimerIcon from '@/components/icons/timer-icon';
import { Link } from '@/i18n/navigation';

import Card from '../card/components/card';
import CardBody from '../card/components/card-body';
import CardFooter from '../card/components/card-footer';
import { Tag, TagLabel } from '../tag';

import styles from './card-post.module.css';

function CardPost() {
  return (
    <Card>
      <CardBody>
        <Link href="/articles" className={styles['image-wrapper']}>
          <div className={styles['image-overlay']} />
          <Image
            src="https://images.unsplash.com/photo-1719032168861-994a74306944?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="dummy image"
            width={408}
            height={204}
            className={styles.image}
          />
        </Link>
        <div className={styles['information']}>
          <Image
            src="https://images.unsplash.com/photo-1568162603664-fcd658421851?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="avatar"
            width={28}
            height={28}
            className={styles.avatar}
          />
          <Link href="/about">
            <p className={styles.author}>ngockhoi96</p>
          </Link>
          <time className={styles.date}>June 23, 2024</time>
          <div className={styles['reading-time']}>
            <span className={styles['timer-icon']}>
              <TimerIcon />
            </span>
            <small>15 min read</small>
          </div>
        </div>
        <Link href="/articles">
          <h5 className={styles.heading}>
            How to build you custom Tab component
          </h5>
        </Link>

        <div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nemo
            ex perspiciatis rerum laudantium quae autem tempora harum,
            perferendis nulla, accusantium incidunt, provident optio labore
            totam neque cum. Atque, soluta.
          </p>
        </div>
      </CardBody>
      <CardFooter className={styles.footer}>
        <Tag onClick={() => console.log('go to reactjs posts')}>
          <TagLabel>#Reactjs</TagLabel>
        </Tag>
        <Tag onClick={() => console.log('go to reactjs posts')}>
          <TagLabel>#Typescript</TagLabel>
        </Tag>
      </CardFooter>
    </Card>
  );
}

export default CardPost;

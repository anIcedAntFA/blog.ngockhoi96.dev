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
    <Card className={styles.wrapper}>
      <Link href="/articles" className={styles['image-wrapper']}>
        <Image
          src="https://images.unsplash.com/photo-1719032168861-994a74306944?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="dummy image"
          width={360}
          height={240}
          className={styles.image}
        />
        <div className={styles['image-overlay']} />
      </Link>
      <CardBody>
        <div className={styles['information']}>
          <Link href="/about" className={styles.avatar}>
            <Image
              src="https://images.unsplash.com/photo-1568162603664-fcd658421851?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="avatar"
              width={32}
              height={32}
            />
          </Link>
          <Link href="/about" className={styles.author}>
            <p>ngockhoi96</p>
          </Link>
          <time className={styles['modified-date']}>June 23, 2024</time>
          <small className={styles['reading-time']}>15 min read</small>
        </div>
        <Link href="/articles">
          <h5 className={styles.heading}>
            How to build you custom Tab component in Reactjs
          </h5>
        </Link>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nemo
          ex perspiciatis rerum laudantium quae autem tempora harum, perferendis
          nulla, accusantium incidunt, provident optio labore totam neque cum.
          Atque, soluta.
        </p>
      </CardBody>
      <CardFooter className={styles.footer}>
        <Tag variant="text" onClick={() => console.log('go to reactjs posts')}>
          <TagLabel>#reactjs</TagLabel>
        </Tag>
        <Tag variant="text" onClick={() => console.log('go to reactjs posts')}>
          <TagLabel>#typescript</TagLabel>
        </Tag>
        <Tag variant="text" onClick={() => console.log('go to reactjs posts')}>
          <TagLabel>#testing</TagLabel>
        </Tag>
      </CardFooter>
    </Card>
  );
}

export default CardPost;

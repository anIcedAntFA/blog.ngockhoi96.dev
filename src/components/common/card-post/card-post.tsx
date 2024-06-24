import Image from 'next/image';
import React from 'react';

import Card from '../card/components/card';
import CardBody from '../card/components/card-body';
import CardFooter from '../card/components/card-footer';
import Flex from '../flex';
import { Tag, TagLabel } from '../tag';

import styles from './card-post.module.css';

function CardPost() {
  return (
    <Card>
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1719032168861-994a74306944?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="dummy image"
          width={400}
          height={240}
        />
        <Flex justify="space-between">
          <Flex spacing={4}>
            <Image
              src="https://images.unsplash.com/photo-1568162603664-fcd658421851?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="avatar"
              width={24}
              height={24}
              className={styles.avatar}
            />
            <span className={styles.author}>ngockhoi96</span>
          </Flex>
          <p className={styles.date}>June 23, 2024</p>
        </Flex>
        <h5 className={styles.heading}>
          How to build you custom Tab component
        </h5>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nemo
            ex perspiciatis rerum laudantium quae autem tempora harum,
            perferendis nulla, accusantium incidunt, provident optio labore
            totam neque cum. Atque, soluta.
          </p>
        </div>
      </CardBody>
      <CardFooter>
        <Flex justify="space-between">
          <Flex spacing={8}>
            <Tag
              // size="small"
              onClick={() => console.log('go to reactjs posts')}
            >
              <TagLabel>#Reactjs</TagLabel>
            </Tag>
            <Tag
              // size="small"
              onClick={() => console.log('go to reactjs posts')}
            >
              <TagLabel>#Typescript</TagLabel>
            </Tag>
          </Flex>
          <p className={styles.time}>15 min read</p>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default CardPost;

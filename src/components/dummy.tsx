'use client';

import CardPost from './common/card-post/card-post';
import Flex from './common/flex';

function Dummy() {
  return (
    <Flex spacing={36} justify="space-between" wrap="wrap">
      <CardPost />
      <CardPost />
      <CardPost />
      <CardPost />
      <CardPost />
      <CardPost />
      <CardPost />
      <CardPost />
      <CardPost />
    </Flex>
  );
}

export default Dummy;

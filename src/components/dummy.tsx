'use client';

import {
  Callout,
  CalloutDescription,
  CalloutIcon,
  CalloutTitle,
} from './common/callout';
import Flex from './common/flex';

function Dummy() {
  return (
    <Flex
      spacing={36}
      align='center'
      justify='center'
      wrap='wrap'
      style={{ marginBlock: '48px' }}
    >
      <Callout variant='subtle' status='warning'>
        <CalloutIcon />
        <div>
          <CalloutTitle>Shallow copy</CalloutTitle>
          <CalloutDescription>
            <p>
              _Lưu ý cách này chỉ là sao chép nông ([shallow
              copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy)).
              Nếu có object con bên trong thì nó chỉ sao chép tham chiếu, chứ
              không tạo ra object mới cho object con đó._
            </p>
          </CalloutDescription>
        </div>
      </Callout>

      <Callout variant='solid' status='warning'>
        <CalloutIcon />
        <div>
          <CalloutTitle>Shallow copy</CalloutTitle>
          <CalloutDescription>
            <p>
              _Lưu ý cách này chỉ là sao chép nông ([shallow
              copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy)).
              Nếu có object con bên trong thì nó chỉ sao chép tham chiếu, chứ
              không tạo ra object mới cho object con đó._
            </p>
          </CalloutDescription>
        </div>
      </Callout>
    </Flex>
  );
}

export default Dummy;

'use client';

import { Callout, CalloutDescription, CalloutIcon } from './common/callout';
import Flex from './common/flex';

function Dummy() {
  return (
    <Flex spacing={36} align="center" justify="center" wrap="wrap">
      <Callout variant="subtle" status="warning">
        <CalloutIcon />
        <CalloutDescription>
          <p>
            _Lưu ý cách này chỉ là sao chép nông ([shallow
            copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy)).
            Nếu có object con bên trong thì nó chỉ sao chép tham chiếu, chứ
            không tạo ra object mới cho object con đó._
          </p>
        </CalloutDescription>
      </Callout>
    </Flex>
  );
}

export default Dummy;

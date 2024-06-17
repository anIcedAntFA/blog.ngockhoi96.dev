'use client';

import Flex from './common/flex';
import { Tag, TagCloseTrigger, TagIcon, TagLabel } from './common/tag';
import CloseIcon from './icons/close-icon';
import ContactIcon from './icons/contact-icon';

function Dummy() {
  return (
    <div>
      <Flex spacing={20} align="center">
        <Tag variant="solid" size="small" color="base">
          <TagIcon>
            <ContactIcon />
          </TagIcon>
          <TagLabel>#reactjs</TagLabel>
          <TagCloseTrigger>
            <CloseIcon />
          </TagCloseTrigger>
        </Tag>
        <Tag variant="solid" size="medium" color="base">
          <TagIcon>
            <ContactIcon />
          </TagIcon>
          <TagLabel>#reactjs</TagLabel>
          <TagCloseTrigger>
            <CloseIcon />
          </TagCloseTrigger>
        </Tag>
        <Tag
          variant="solid"
          size="large"
          color="base"
          onClick={() => console.log('golang')}
        >
          <TagIcon>
            <ContactIcon />
          </TagIcon>
          <TagLabel>#reactjs</TagLabel>
        </Tag>
      </Flex>

      <Flex spacing={20} align="center" style={{ marginTop: '20px' }}>
        <Tag variant="outlined" size="small" color="base">
          <TagIcon>
            <ContactIcon />
          </TagIcon>
          <TagLabel>#reactjs</TagLabel>
          <TagCloseTrigger>
            <CloseIcon />
          </TagCloseTrigger>
        </Tag>
        <Tag
          variant="outlined"
          size="medium"
          color="base"
          onClick={() => console.log('golang')}
        >
          <TagLabel>#golang</TagLabel>
          <TagIcon>
            <ContactIcon />
          </TagIcon>
        </Tag>
        <Tag variant="outlined" size="large" color="base">
          <TagIcon>
            <ContactIcon />
          </TagIcon>
          <TagLabel>#reactjs</TagLabel>
          <TagCloseTrigger>
            <CloseIcon />
          </TagCloseTrigger>
        </Tag>
      </Flex>

      <Flex spacing={20} align="center" style={{ marginTop: '20px' }}>
        <Tag variant="subtle" size="small" color="base">
          <TagIcon>
            <ContactIcon />
          </TagIcon>
          <TagLabel>#reactjs</TagLabel>
          <TagCloseTrigger>
            <CloseIcon />
          </TagCloseTrigger>
        </Tag>
        <Tag variant="subtle" size="medium" color="base">
          <TagIcon>
            <ContactIcon />
          </TagIcon>
          <TagLabel>#reactjs</TagLabel>
          <TagCloseTrigger>
            <CloseIcon />
          </TagCloseTrigger>
        </Tag>
        <Tag
          variant="subtle"
          size="large"
          color="base"
          onClick={() => console.log('golang')}
        >
          <TagIcon>
            <ContactIcon />
          </TagIcon>
          <TagLabel>#reactjs</TagLabel>
          <TagCloseTrigger>
            <CloseIcon />
          </TagCloseTrigger>
        </Tag>
      </Flex>
    </div>
  );
}

export default Dummy;

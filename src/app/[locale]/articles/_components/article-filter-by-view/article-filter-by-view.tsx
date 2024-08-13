'use client';

import { useState } from 'react';

import {
  TabIndicator,
  TabList,
  // TabPanel,
  TabPanelGroup,
  Tabs,
  TabTrigger,
} from '@/components/common/tabs';
import type { BaseValue } from '@/types/common';

import styles from './article-filter-by-view.module.css';

function ArticleFilterByView() {
  const [activeValue, setActiveValue] = useState<BaseValue>(1);

  return (
    <Tabs
      variant="solid"
      // orientation="vertical"
      value={activeValue}
      // activeFocusedMode
      // lazyMount
      // lazyBehavior='keepMounted'
      className={styles.wrapper}
      onChange={(value) => setActiveValue(value)}
    >
      <TabList>
        <TabTrigger value={0}>All results</TabTrigger>
        <TabTrigger value={1}>Pending</TabTrigger>
        <TabTrigger value={2}>Completed</TabTrigger>
        <TabTrigger value={3} disabled>
          Cancelled
        </TabTrigger>
        <TabTrigger value={4}>Refund</TabTrigger>
      </TabList>
      <TabIndicator />
      <TabPanelGroup>
        {/* <TabPanel value={0}>
          <p>
            tab content 1 Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ut maxime nesciunt mollitia repellat distinctio ipsa. Culpa
            perferendis voluptatibus ratione repudiandae quam amet hic
            praesentium dolorum provident quasi ut, unde deserunt dolore harum
            reprehenderit? Eos natus similique obcaecati laborum.
          </p>
        </TabPanel>
        <TabPanel value={1}>
          <p>
            tab content 2 Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Enim esse molestias magni aliquam deserunt modi repellat
            voluptate pariatur voluptates? Aliquid dignissimos delectus beatae,
            minus nobis, amet eligendi ratione cumque veniam, vitae adipisci!
          </p>
        </TabPanel>
        <TabPanel value={2}>
          <p>
            tab content 3 Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptas, consectetur? Maiores ratione quasi, consequuntur
            debitis maxime suscipit eos illo natus dicta architecto accusamus
            facere consectetur minima delectus quos hic qui, enim aliquid
            deserunt sint laudantium aperiam quo exercitationem earum! Quidem
            modi sunt id itaque eligendi?
          </p>
        </TabPanel>
        <TabPanel value={3}>
          <p>
            tab content 4 Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quod praesentium illo, enim quasi asperiores assumenda saepe
            ea. Hic aliquid, eos nesciunt aspernatur at ipsam, nemo totam quos
            ea laborum non consequuntur adipisci omnis eaque quis maiores magnam
            quaerat! Ad, dignissimos?
          </p>
        </TabPanel>
        <TabPanel value={4}>
          <p>
            tab content 5 Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Asperiores dolorum quod ab sunt ea eius dolores, facilis iusto
            eos, quas quae quidem temporibus non vitae? Id in expedita assumenda
            sequi quia recusandae amet tenetur ab.
          </p>
        </TabPanel> */}
      </TabPanelGroup>
    </Tabs>
  );
}

export default ArticleFilterByView;

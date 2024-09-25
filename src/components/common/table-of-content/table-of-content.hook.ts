import { useCallback, useEffect, useState } from 'react';
import invariant from 'tiny-invariant';

import { HEADER_HEIGHT } from '@/configs/constants';
import { getDocumentHeight } from '@/utils/get-document-height';

function useActiveItemId(itemIds: string[], offsetTop: number = 0) {
  const [activeId, setActiveId] = useState<string>('');

  const handleScroll = useCallback(() => {
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollHeight = getDocumentHeight() - viewportHeight;
    //* +1 to make sure the bottom of the document is reached (on 4k screens)
    const isBottomDocument = scrollPosition + 1 >= scrollHeight;
    //* Make sure always active the last element when scrolling to the bottom
    if (isBottomDocument) {
      setActiveId(itemIds[itemIds.length - 1]);
      return;
    }

    const currentId = itemIds.find((id, index) => {
      const heading = document.getElementById(id);
      invariant(heading, `Element with id ${id} not found`);
      const rect = heading.getBoundingClientRect();
      const headingRectTop = rect.top;

      const nextHeading = document.getElementById(itemIds[index + 1]);
      const nextRect = nextHeading?.getBoundingClientRect();
      const consecutiveHeadingsSpacing = (nextRect?.top ?? 0) - rect.bottom;

      //* Check if the element is scrolled down
      const hasScrolledDown = scrollPosition > 0;
      //* Check if the element is scrolled past the top of the viewport
      const hasScrolledPastTop =
        viewportHeight >= headingRectTop + HEADER_HEIGHT;
      //* Make sure active heading when clicking item on TOC
      const isBelowViewportTop = headingRectTop > 0;
      const isInViewport =
        Math.abs(headingRectTop) + HEADER_HEIGHT + offsetTop <=
        consecutiveHeadingsSpacing;
      const isLastItemId = index === itemIds.length - 1;

      return (
        hasScrolledDown &&
        hasScrolledPastTop &&
        (isBelowViewportTop || isLastItemId || isInViewport)
      );
    });

    setActiveId(currentId ?? '');
  }, [itemIds, offsetTop]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return activeId;
}

export default useActiveItemId;

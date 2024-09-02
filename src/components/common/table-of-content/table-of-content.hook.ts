import { useCallback, useEffect, useState } from 'react';
import invariant from 'tiny-invariant';

import { getDocumentHeight } from '@/utils/get-document-height';

function useActiveItemId(itemIds: string[], offsetTop: number = 0) {
  const [activeId, setActiveId] = useState<string>('');

  const handleScroll = useCallback(() => {
    const scrollHeight = getDocumentHeight() - window.innerHeight;
    const isBottomDocument = window.scrollY >= scrollHeight;
    const lastIndex = itemIds.length - 1;

    //* Make sure always active the last element when scrolling to the bottom
    if (isBottomDocument) return setActiveId(itemIds[lastIndex]);

    const currentId = itemIds.find((id, index) => {
      const heading = document.getElementById(id);
      invariant(heading, `Element with id ${id} not found`);

      const rect = heading.getBoundingClientRect();
      const isFirstElement = index === 0 && rect.top > 0;
      const isLastElement = index === lastIndex;
      const isInViewport =
        rect.top + offsetTop >= 0 && rect.bottom + offsetTop >= 0;
      //* Check if the element is scrolled past the top of the viewport
      const isScrolledPastTop = window.innerHeight >= rect.top;

      return (
        window.scrollY > 0 &&
        isScrolledPastTop &&
        (isFirstElement || isLastElement || isInViewport)
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

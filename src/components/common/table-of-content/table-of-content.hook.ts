import { useCallback, useEffect, useState } from 'react';

import { getDocumentHeight } from '@/utils/get-document-height';

function useActiveItemId(itemIds: string[], offsetTop: number = 0) {
  const [activeId, setActiveId] = useState<string>('');

  const handleScroll = useCallback(() => {
    const scrollHeight = getDocumentHeight() - window.innerHeight;
    const isBottomDocument = window.scrollY >= scrollHeight;

    if (isBottomDocument) {
      setActiveId(itemIds[itemIds.length - 1]);
      return;
    }

    const currentHeadingId = itemIds.find((id, index) => {
      const heading = document.getElementById(id);
      if (!heading) return;

      const rect = heading.getBoundingClientRect();
      const isFirstElement = index === 0 && rect.top > 0;
      const isLastElement = index === itemIds.length - 1;
      const isInViewport =
        rect.top + offsetTop >= 0 && rect.bottom + offsetTop >= 0;

      return isFirstElement || isLastElement || isInViewport;
    });

    if (currentHeadingId) return setActiveId(currentHeadingId);
    setActiveId('');
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

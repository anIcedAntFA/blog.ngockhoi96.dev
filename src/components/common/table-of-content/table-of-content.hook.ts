import { useEffect, useState } from 'react';

function useActiveItemId(itemIds: string[]) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingEntry = entries.find((entry) => entry.isIntersecting);
        intersectingEntry && setActiveId(intersectingEntry.target.id);
      },
      { rootMargin: `0% 0% -80% 0%` },
    );

    itemIds.forEach((id) => {
      const element = document.getElementById(id);
      element && observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [itemIds]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (
  //       window.innerHeight + window.scrollY + 1 >=
  //       document.body.offsetHeight
  //     ) {
  //       setActiveId(itemIds[itemIds.length - 1]);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [itemIds]);

  return activeId;
}

export default useActiveItemId;

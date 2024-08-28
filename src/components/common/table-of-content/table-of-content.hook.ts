import { useEffect, useState } from 'react';

function useActiveItemId(itemIds: string[]) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log({ entries });

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` },
    );

    itemIds?.forEach((id) => {
      if (!id) {
        return;
      }

      console.log(id);
      const element = document.getElementById(id);
      console.log(element);

      if (element) {
        console.log(element);
        observer.observe(element);
      }
    });

    console.log(observer);

    return () => {
      itemIds?.forEach((id) => {
        if (!id) {
          return;
        }

        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

export default useActiveItemId;

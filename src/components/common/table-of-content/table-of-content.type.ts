export type TocEntry = {
  items: TocEntry[];
  title: string;
  url: string;
};

export type TableOfContentProps = {
  toc: TocEntry[];
};

export type TableOfContentListProps = {
  data: TocEntry[];
  level: number;
  activeId: string | null;
  passedIds: string[];
};

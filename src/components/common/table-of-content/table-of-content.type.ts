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
  depth: number;
  activeId: string | null;
  passedIds: string[];
};

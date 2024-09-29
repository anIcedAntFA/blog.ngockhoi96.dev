export type TocEntry = {
  items: TocEntry[];
  title: string;
  url: string;
};

export type TableOfContentProps = {
  title: string;
  toc: TocEntry[];
  id?: string;
};

export type TableOfContentListProps = {
  data: TocEntry[];
  depth: number;
  activeId: string | null;
  passedIds: string[];
};

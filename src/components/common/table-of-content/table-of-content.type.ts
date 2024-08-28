export type TocEntry = {
  items: TocEntry[];
  title: string;
  url: string;
};

export type TableOfContentProps = {
  toc: TocEntry[];
};

export type TableOfContentItemProps = {
  data: TocEntry[];
  level: number;
  activeId: string;
};

export type TocEntry = {
  items: TocEntry[];
  title: string;
  url: string;
};

export type TocProps = {
  title: string;
  toc: TocEntry[];
  id?: string;
};

export type TocListProps = {
  data: TocEntry[];
  depth: number;
  activeId: string | null;
  passedIds: string[];
};

export type TocProgressBarProps = {
  toc: TocEntry[];
};

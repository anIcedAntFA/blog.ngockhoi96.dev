import { create } from 'zustand';

import type { ViewLayout } from '@/types/constants';

type ArticleStates = {
  viewLayout: ViewLayout;
};

type ArticleActions = {
  setViewType: (viewType: ViewLayout) => void;
};

type ArticleStore = ArticleStates & {
  actions: ArticleActions;
};

const initialState: ArticleStates = {
  viewLayout: 'list',
};

const useArticleStore = create<ArticleStore>((set) => ({
  ...initialState,
  actions: {
    setViewType: (viewLayout: ViewLayout) =>
      set({
        viewLayout,
      }),
  },
}));

export const useArticleViewLayout = () =>
  useArticleStore((state) => state.viewLayout);

export const useArticleActions = () =>
  useArticleStore((state) => state.actions);

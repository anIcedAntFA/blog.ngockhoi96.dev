import { gitmojis } from 'gitmojis';
import { type ReactNode } from 'react';

export function getCustomIcon(icon: ReactNode) {
  const emojiIcon = gitmojis.find((gitmoji) => gitmoji.emoji === icon)?.emoji;
  const codeIcon = gitmojis.find((gitmoji) => gitmoji.code === icon)?.emoji;

  return emojiIcon || codeIcon || icon;
}

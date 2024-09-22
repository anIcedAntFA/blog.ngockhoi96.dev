import { LANGUAGE_REGEX } from './code-block.config';

export function getLanguageFromClassName(className: string): string {
  const languageMatch = className.match(LANGUAGE_REGEX);
  const language = languageMatch
    ? languageMatch[0].replace(/language-/, '')
    : '';

  return language;
}

import type { ToasterProps } from 'sonner';

export function mapLangDirToToasterDir(langDir: string): ToasterProps['dir'] {
  const validDirs: ToasterProps['dir'][] = ['ltr', 'rtl'];

  return validDirs.includes(langDir as ToasterProps['dir'])
    ? (langDir as ToasterProps['dir'])
    : 'ltr';
}

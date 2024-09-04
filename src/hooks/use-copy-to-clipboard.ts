import { useCallback, useEffect, useState } from 'react';

import { copyToClipboard } from '@/utils/copy-to-clipboard';

import useBoolean from './use-boolean';

type CopiedValue = string | null;

type CopyText = (text: string) => Promise<void>;

function useCopyToClipboard(timeout: number = 2000) {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const {
    value: hasCopied,
    setValue: setHasCopied,
    off: resetHasCopied,
  } = useBoolean();

  const copyText: CopyText = useCallback(
    async (text: string) => {
      const isCopied = await copyToClipboard(text);

      setHasCopied(isCopied);
      setCopiedText(isCopied ? text : null);
    },
    [setHasCopied],
  );

  useEffect(() => {
    if (!hasCopied) return;

    const timeoutId = window.setTimeout(resetHasCopied, timeout);

    return () => window.clearTimeout(timeoutId);
  }, [hasCopied, resetHasCopied, timeout]);

  return { copiedText, hasCopied, copyText };
}

export default useCopyToClipboard;

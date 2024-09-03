import { useEffect, useState } from 'react';

import { copyToClipboard } from '@/utils/copy-to-clipboard';

import useBoolean from './use-boolean';

type CopiedValue = string | null;

type CopyText = (text: string) => Promise<void>;

function useCopyToClipboard(timeout: number = 2000) {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);
  const hasCopied = useBoolean();

  const copyText: CopyText = async (text: string) => {
    const isCopied = await copyToClipboard(text);

    hasCopied.setValue(isCopied);
    isCopied ? setCopiedText(text) : setCopiedText(null);
  };

  useEffect(() => {
    let timeoutId: number | null = null;

    if (hasCopied.value) {
      timeoutId = window.setTimeout(() => {
        hasCopied.off();
      }, timeout);
    }

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [hasCopied, timeout]);

  return { copiedText, hasCopied: hasCopied.value, copyText };
}

export default useCopyToClipboard;

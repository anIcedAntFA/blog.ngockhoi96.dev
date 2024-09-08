import CheckIcon from '@/components/icons/check-icon';
import CopyIcon from '@/components/icons/copy-icon';
import useCopyToClipboard from '@/hooks/use-copy-to-clipboard';

import Button from '../../button';
import { COPIED_TIMEOUT } from '../code-block.config';
import styles from '../code-block.module.css';

type CopyCodeButtonProps = {
  code: string;
};

function CopyCodeButton({ code }: CopyCodeButtonProps) {
  const { hasCopied, copyText } = useCopyToClipboard(COPIED_TIMEOUT);

  const handleCopyCode = () => {
    if (hasCopied) return;
    copyText(code);
  };

  return (
    <div className={styles['copy-code-btn']}>
      <Button
        size="small"
        icon={{
          position: 'left',
          children: hasCopied ? <CheckIcon /> : <CopyIcon />,
        }}
        onClick={handleCopyCode}
      >
        {hasCopied ? 'Copied!' : 'Copy'}
      </Button>
    </div>
  );
}

export default CopyCodeButton;

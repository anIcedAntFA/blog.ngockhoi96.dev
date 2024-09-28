import { useTranslations } from 'next-intl';

import CustomTooltip from '@/components/common/custom-tooltip';
import NavItem from '@/components/common/nav-item';

import {
  footerSocialIcons,
  PERSONAL_EMAIL,
  PERSONAL_GITHUB_REPO_URL,
  socialLinks,
} from './footer.config';
import styles from './footer.module.css';

function Footer() {
  const t = useTranslations('layout.footer');

  return (
    <footer className={styles.wrapper}>
      <div className={styles['github-info']}>
        <p>{t('githubInfo.infoText')}</p>
        <NavItem color='info' to={PERSONAL_GITHUB_REPO_URL} target='_blank'>
          {t('githubInfo.linkText')}
        </NavItem>
      </div>
      <div className={styles['email-info']}>
        <p>{t('emailInfo.infoText')}</p>
        <NavItem variant='bg' color='info' to={`mailto:${PERSONAL_EMAIL}`}>
          {PERSONAL_EMAIL}
        </NavItem>
      </div>
      <ul className={styles['social-links']}>
        {socialLinks.map((item) => (
          <li key={item.id}>
            <CustomTooltip label={item.alt} hasArrow>
              <NavItem
                variant='icon'
                to={item.link}
                aria-label={item.alt}
                target='_blank'
              >
                {footerSocialIcons[item.icon]}
              </NavItem>
            </CustomTooltip>
          </li>
        ))}
      </ul>
      <p className={styles.copyright}>
        {t('copyright')} &copy; 2024-2025 ngockhoi96
      </p>
    </footer>
  );
}

export default Footer;

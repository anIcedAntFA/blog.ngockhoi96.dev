import CustomTooltip from '@/components/common/custom-tooltip';
import NavItem from '@/components/common/nav-item';

import { footerSocialIcons, socialLinks } from './footer.config';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles['github-info']}>
        <p>Find an issue with this page?</p>
        <NavItem
          color="info"
          to="https://github.com/anIcedAntFA/blog.ngockhoi96.dev"
          target="_blank"
        >
          Fix it on GitHub
        </NavItem>
      </div>
      <div className={styles['email-info']}>
        <p>Need help?</p>
        <a href="mailto:ngockhoi96.dev@gmail.com">
          Email <strong>ngockhoi96.dev@gmail.com</strong>
        </a>
      </div>
      <ul className={styles['social-links']}>
        {socialLinks.map((item) => (
          <li key={item.id}>
            <CustomTooltip label={item.alt} hasArrow>
              <NavItem
                variant="icon"
                to={item.link}
                aria-label={item.alt}
                target="_blank"
              >
                {footerSocialIcons[item.icon]}
              </NavItem>
            </CustomTooltip>
          </li>
        ))}
      </ul>
      <p className={styles['copyright-info']}>
        Copyright &copy; 2024-2025 ngockhoi96
      </p>
    </footer>
  );
}

export default Footer;

import { useTranslation } from '../../../i18n';
import './Footer.style.scss';

const Footer = ({ language }) => {
  const t = useTranslation(language);

  return (
    <footer className="footer">
      <div className="container">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
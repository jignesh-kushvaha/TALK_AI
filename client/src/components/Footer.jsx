import { Layout } from 'antd';
import './Footer.css';

const { Footer } = Layout;

const FooterBar = () => (
  <Footer className="footer-container">
    <div className="footer-text">
      © 2025 Talk AI. Built with <span className="footer-heart">❤️</span> by jigneshkushvaha
    </div>
  </Footer>
);

export default FooterBar;

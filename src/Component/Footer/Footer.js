import "./Footer.scss";
function Footer() {
  return (
    <div className="footer-container grid">
      <div className="row">
        <div className="copy-right col l-8 m-12 c-12">The Copyright &copy; 2024. By Satomi Jin</div>
        <div className="social col l-4 m-12 c-12">
          <a href="https://github.com/SatomiJin?tab=repositories" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.facebook.com/shiyoru.satomi.9/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="mailto:trongdh0904@gmail.com" target="_blank" rel="noreferrer">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

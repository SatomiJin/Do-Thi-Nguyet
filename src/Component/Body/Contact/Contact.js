import "./Contact.scss";
function Contact() {
  return (
    <div className="contact-container grid wide" id="contact">
      <div className="row" data-aos="zoom-in-right" data-aos-duration="1000">
        <div className="title col l-2 m-4 m-o-4 c-6 c-o-3">Liên hệ</div>
        <div className="contact-me col l-12 m-12 grid" data-aos="fade-right" data-aos-duration="2000">
          <div className="contact-item">
            <div className="contact__icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="contact__text">
              <div className="contact-title">Địa Chỉ</div>
              <div className="contact-desc">Thủ Đức, Hồ Chí Minh</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact__icon">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="contact__text">
              <div className="contact-title">Email</div>
              <div className="contact-desc">
                <a
                  href="mailto:dminhnguyet04@gmail.com
"
                >
                  dminhnguyet04@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

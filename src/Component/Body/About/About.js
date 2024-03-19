import "./About.scss";
import CV from "../../../Assets/CV/Do-Thi-Nguyet-TopCV.vn-130324.224834.pdf";
import * as constant from "../../../constant";
function About() {
  return (
    <div className="about-container grid wide" id="about">
      <div className="row">
        <div className="about__title col l-2 m-4 m-o-4 c-6 c-o-3" data-aos="zoom-in-right" data-aos-duration="1500">
          Giới Thiệu
        </div>
        <div className="about__intro grid col l-12 m-10 m-o-1 c-12" data-aos="fade-left" data-aos-duration="1500">
          <div className="row">
            <div className="image-intro col l-6 m-12 c-0">
              <div className="image"></div>
            </div>
            <div className="description col l-6 m-12 c-12">
              <div className="header">Về tôi</div>
              <div className="body">
                <ul className="list">
                  <li className="list-item">
                    <i className="fa-regular fa-user"></i> Họ & Tên: Đỡ Thị Nguyệt
                  </li>
                  <li className="list-item">
                    <i className="fa-solid fa-cake-candles"></i> Ngày sinh: 13/03/2002
                  </li>
                  <li className="list-item">
                    <i className="fa-solid fa-phone-volume"></i> Số điện thoại: 0372 833 558
                  </li>
                  <li className="list-item">
                    <i className="fa-solid fa-location-dot"></i> Địa chỉ: Thủ Đức, HCM
                  </li>
                </ul>
              </div>
              <div className="footer">
                <a href={CV} download={"Do-Thi-Nguyet"}>
                  <button className="btn-download-cv">Tải CV .pdf</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="about__target grid col l-12 m-10 m-o-1 c-12" data-aos="fade-right" data-aos-duration="1500">
          <div className="row">
            <div className="target col l-6 m-12 c-12">
              <div className="title">Mục tiêu</div>
              <div className="desc">
                <ul className="list">
                  {constant.target &&
                    constant.target.length > 0 &&
                    constant.target.map((item, index) => {
                      return (
                        <li key={index} className="list-item">
                          <i className="fa-solid fa-thumbtack"></i> {item.name} {item.desc}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className="image col l-6 m-0 c-0">{/* <div className="image"></div> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

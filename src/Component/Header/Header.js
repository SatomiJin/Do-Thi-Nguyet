import { useState } from "react";
import ".//Header.scss";
function Header() {
  let [checked, setChecked] = useState(false);
  console.log(checked);
  return (
    <div className="header-container">
      <div className="header-content grid wide">
        <div className="row">
          <div className="navbar col l-6 l-o-6 m-8 m-o-2 c-0">
            <ul className="navbar-list">
              <a href="#home">
                <li className="navbar-item">Trang chủ</li>
              </a>
              <a href="#about">
                <li className="navbar-item">Giới thiệu</li>
              </a>
              <a href="#exp">
                <li className="navbar-item">Kinh nghiệm</li>
              </a>
              <a href="#active">
                <li className="navbar-item">Hoạt động</li>
              </a>
              <a href="#contact">
                <li className="navbar-item">Liên hệ</li>
              </a>
            </ul>
          </div>
          <input type="checkbox" className="navbar-mobile-input" id="navbar-mobile__input" checked={checked} />
          <div className="navbar-mobile__icon col l-0 m-0" onClick={() => setChecked(!checked)}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div onClick={() => setChecked(!checked)} className="navbar-mobile__overlay"></div>
          <div className="navbar-mobile grid">
            <div className="row">
              <div className="navbar-mobile__header col c-12">
                <div className="name">Đỗ Thị Nguyệt</div>
                <div onClick={() => setChecked(!checked)} className="close" htmlFor="navbar-mobile__input">
                  <i style={{ backgroundColor: "transparent" }} className="fa-solid fa-x"></i>
                </div>
              </div>
              <div className="sidebar-list c-10 c-o-1">
                <ul className="list">
                  <a onClick={() => setChecked(!checked)} href="#home">
                    <li className="item">Trang chủ</li>
                  </a>

                  <a onClick={() => setChecked(!checked)} href="#about">
                    <li className="item">Giới thiệu</li>
                  </a>

                  <a onClick={() => setChecked(!checked)} href="#exp">
                    <li className="item">Kinh nghiệm</li>
                  </a>

                  <a onClick={() => setChecked(!checked)} href="#active">
                    <li className="item">Hoạt động</li>
                  </a>

                  <a onClick={() => setChecked(!checked)} href="#contact">
                    <li className="item">Liên hệ</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

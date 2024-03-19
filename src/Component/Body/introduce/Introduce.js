import "./Introduce.scss";
function Introduce() {
  return (
    <div className="introduce-container grid wide" style={{ marginTop: "15vh" }} id="home">
      <div className="row" data-aos="fade-up-right" data-aos-duration="1500">
        <div className="intro-content col l-6 m-12 c-12">
          <div>
            <div className="title">Cử Nhân Quản Trị Kinh Doanh</div>
            <div className="intro">
              Xin chào, Tôi là Đỗ Thị Nguyệt, một Cử Nhân Quản Trị Kinh Doanh tới từ Hồ Chí Minh
            </div>
            <div className="social">
              <a href="https://www.facebook.com/profile.php?id=100009139439712&locale=vi_VN" target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.tiktok.com/@moonzuiiiii" target="_blank">
                <i class="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="intro-image col l-6 m-12 c-12">
          <div className="image"></div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;

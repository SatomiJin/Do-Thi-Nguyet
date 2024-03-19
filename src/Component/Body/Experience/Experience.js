import "./Experience.scss";
import * as constant from "../../../constant";
function Experience() {
  return (
    <div className="experience-container grid wide" id="exp">
      <div className="row">
        <div data-aos="fade-left" data-aos-duration="1000" className="experience-title col l-2 m-4 m-o-4 c-6 c-o-3">
          Kinh Nghiệm
        </div>
        {constant &&
          constant.experience.length > 0 &&
          constant.experience.map((item, index) => {
            let typeAos = (index + 1) % 2 === 0 ? "fade-right" : "fade-left";
            return (
              <div data-aos={typeAos} key={index} className="experience-content col grid l-12 m-10 m-o-1 c-12">
                <div className="row" style={{ flexDirection: (index + 1) % 2 === 0 && "row-reverse" }}>
                  <div className="image-ex col l-5 m-12 c-12">
                    <div className="image" style={{ backgroundImage: `url("${item.image}")` }}></div>
                  </div>
                  <div className="description col l-7 m-12 c-12">
                    <div className="title">Mô tả</div>
                    <div className="intro">
                      <div style={{ textAlign: "center" }}>
                        <div className="name">{item.name}</div>
                        <div className="time">{item.time}</div>
                        <div className="position">Vị Trí: {item.position}</div>
                      </div>
                      <ul className="list">
                        {item &&
                          item.detail.length > 0 &&
                          item.detail.map((detail, index) => {
                            return (
                              <li className="list-item" key={index}>
                                <i className="fa-solid fa-check"></i> {detail}
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Experience;

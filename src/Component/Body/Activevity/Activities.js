import "./Activities.scss";
import * as constant from "../../../constant";
function Activities() {
  let activities = constant.activities;
  return (
    <div className="activities-container grid wide" id="active">
      <div className="row">
        <div className="title col l-2 m-4 m-o-4 c-6 c-o-3">Hoạt động</div>
        {activities &&
          activities.length > 0 &&
          activities.map((item, index) => {
            let typeFade = (index + 1) % 2 === 0 ? "fade-right" : "fade-left";
            return (
              <div
                className="activity col l-12 m-10 m-o-1 c-12 grid"
                key={index}
                style={{ flexDirection: (index + 1) % 2 === 0 ? "row-reverse" : "" }}
                data-aos={typeFade}
                data-aos-duration="1000"
              >
                <div
                  className="content col l-9 m-9 c-10"
                  style={{
                    clipPath: (index + 1) % 2 === 0 ? "polygon(0 0, 6% 50%, 0 100%, 90% 100%, 100% 52%, 91% 0)" : "",
                  }}
                >
                  <div>
                    <div className="content__name">{item.name}</div>
                    <div className="content__position">{item.position}</div>
                    <div className="content__time">{item.time}</div>
                    <ul className="content__list">
                      {item.desc &&
                        item.desc.length > 0 &&
                        item.desc.map((descItem, descIndex) => {
                          return (
                            <li key={descIndex} className="list-item">
                              {descItem}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
                <div className="count col l-3 m-3 c-2">{index + 1}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Activities;

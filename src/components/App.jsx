import "/src/styles/App.css";
import "/src/styles/dark_mode.css";
import Followers from "/src/components/Followers.jsx";
import arrowup from "/src/assets/images/icon-up.svg";
import arrowdown from "/src/assets/images/icon-down.svg";
import logoFB from "/src/assets/images/icon-facebook.svg";
import logoIG from "/src/assets/images/icon-instagram.svg";
import logoTW from "/src/assets/images/icon-twitter.svg";
import logoYT from "/src/assets/images/icon-youtube.svg";
import DailyOverview from "./DailyOverview";

function Active_Dark_Mode() {
  document.querySelector("body").classList.toggle("dark");
  document.querySelector(".dark_mode_button").classList.toggle("move");
}

function App() {
  return (
    <>
      <div id="main-container">
        <div className="head_container">
          <div className="encabezado">
            <p className="social">Social Media Dashboard</p>
            <p className="followers_total">Total Followers: 23,004</p>
            <div className="hr"></div>
            <hr />
          </div>
          <div className="dark_mode_container">
            <p>Dark Mode</p>
            <button
              onClick={Active_Dark_Mode}
              className="dark_mode_button"
            ></button>
          </div>
        </div>
        <div className="total_container">
          <Followers
            logo={logoFB}
            username="@nathanf"
            number="1987"
            definition="Followers"
            arrow={arrowup}
            days="12"
            ClassColor="facebook"
            result="up"
          />
          <Followers
            logo={logoTW}
            username="@nathanf"
            number="1044"
            definition="Followers"
            arrow={arrowup}
            days="99"
            ClassColor="twitter"
            result="up"
          />
          <Followers
            logo={logoIG}
            username=" @realnathanf"
            number="11k"
            definition="Followers"
            arrow={arrowup}
            days="1099"
            ClassColor="instagram"
            result="up"
          />
          <Followers
            logo={logoYT}
            username="Nathan F."
            number="8239"
            definition="Subscribers"
            arrow={arrowdown}
            days="144"
            ClassColor="youtube"
            result="down"
          />
        </div>
        <section>
          <div className="overview_container">
            <p>Overview - Today</p>
          </div>
          <div className="details_container">
            <DailyOverview
              logo={logoFB}
              number="87"
              arrow={arrowup}
              porcent="3"
              status="up"
            >
              Page Views
            </DailyOverview>
            <DailyOverview
              logo={logoFB}
              number="52"
              arrow={arrowdown}
              porcent="2"
              status="down"
            >
              Likes
            </DailyOverview>
            <DailyOverview
              logo={logoIG}
              number="5462"
              arrow={arrowup}
              porcent="2257"
              status="up"
            >
              Likes
            </DailyOverview>
            <DailyOverview
              logo={logoIG}
              number="52k"
              arrow={arrowup}
              porcent="1375"
              status="up"
            >
              Profile Views
            </DailyOverview>
            <DailyOverview
              logo={logoTW}
              number="117"
              arrow={arrowup}
              porcent="303"
              status="up"
            >
              Retweets
            </DailyOverview>
            <DailyOverview
              logo={logoTW}
              number="507"
              arrow={arrowup}
              porcent="553"
              status="up"
            >
              Likes
            </DailyOverview>
            <DailyOverview
              logo={logoYT}
              number="107"
              arrow={arrowdown}
              porcent="19"
              status="down"
            >
              Likes
            </DailyOverview>
            <DailyOverview
              logo={logoYT}
              number="1407"
              arrow={arrowdown}
              porcent="12"
              status="down"
            >
              Total Views
            </DailyOverview>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

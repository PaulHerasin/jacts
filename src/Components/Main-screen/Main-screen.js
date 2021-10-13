import React from 'react';
import "./Main-screen.scss";
import mainBg from "../../assets/images/main-bg.png";
import mainImg from "../../assets/images/main-screen-img.png";

export const MainScreen = () => {
  return (
    <>
      <section className="main-screen" id="main-screen">
        <img className="main-screen__bg" src={mainBg} alt="" />
        <div className="center-wrap">
          <div className="main-screen__wrap">
            <div className="main-screen__left">
              <h1 className="main-screen__title">PUMPKIN JACKS</h1>
              <div className="main-screen__content content">
                <p>These Pumpkin Jacks are part of the
                  <a target="_blank" rel="noopener noreferrer" href="https://www.sadbearsnft.com/"> Sad Bear 12-week giveaway.</a>
                </p>
              </div>
              {/* <Link to="/product" className="main-screen__btn btn">Connect your wallet</Link> */}
              {/* <div className="main-screen__value"><span>145</span> / 10 000</div> */}
              {/* <div className="main-screen__available">NFTs are available</div> */}
              <div className="main-screen__available">NFT Drop Coming Soon</div>
            </div>
            <div className="main-screen__img-wrap img-wrap">
              <div><img src={mainImg} alt="" /></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainScreen;


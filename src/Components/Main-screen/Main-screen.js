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
                  <a target="_blank" rel="noopener noreferrer" href="https://www.sadbearsnft.com/"> Sad Bear 12-week giveaway. </a>
                  The Sad Bears needed a pick me up, so we are releasing this special collection of Halloween jack-o'lanterns (better late than never). The jacks will be airdropped to wallets holding Sad Bears. The more Sad Bears in a wallet, the higher the chance of receiving a pumpkin jack. The only way to get airdropped a free pumpkin is to own a Sad Bear.
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


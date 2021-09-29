import React from 'react';
import "./Rarity.scss";
// import mainBg from "../../assets/images/main-bg.png";
import rarityRightImg from "../../assets/images/rarity-img.png";

// style="background-image:url(&quot;assets/images/png/rarity-bg.png&quot;);"

const Rarity = () => (
  <section className="rarity"  >
    <div className="center-wrap">
      <div className="rarity__wrap" id="rarity-ar">
        <div className="rarity__left">
          <div className="rarity__small-title small-title">RARITY</div>
          <h2 className="rarity__simple-title simple-title">Every pumpkin is unique</h2>
          <div className="rarity__content content">
            <p>Our jack-o’-lanterns are generated from 202 unique traits in 6 categories, resulting in over 280 million unique pumpkins</p>
            <p>A rarity explorer is coming soon … </p>
          </div>
        </div>
        <div className="rarity__right img-wrap">
          <div><img src={rarityRightImg} alt="" /></div>
        </div>
      </div>
    </div>
  </section>
)

export default Rarity;


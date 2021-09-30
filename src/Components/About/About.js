import React from 'react';
import "./About.scss"
import AboutImg from "../../assets/images/about-img.png";


export const About = () => (
  <section class="about" >
    <div class="center-wrap">
      <div class="about__wrap" id="about-ar">
        <div class="about__left img-wrap">
          <div><img src={AboutImg} alt="" /></div>
        </div>
        <div class="about__right">
          <div class="about__small-title small-title">ABOUT</div>
          <h2 class="about__simple-title simple-title">Halloween Jacks</h2>
          <div class="about__content content">
            <p>The  <a href="http://www.sadbearsnft.com">Sad Bears</a> needed a pick me up, so <a href="https://twitter.com/7labsNFT">7Labs</a>  is releasing this special collection of Halloween jack-o'-lanterns. </p>
            <p>The jacks will be airdropped into your Sad Bear wallet automatically. You do not need to do anything. One jack for each Sad Bear in your wallet. </p>
            <p>An additional 2000 jacks will go on sale for 0.5 SOL for those who want more pumpkin for their pumpkin pie this fall season</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About;


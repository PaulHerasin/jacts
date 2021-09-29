import React, { useState } from 'react';
import "./Product.scss"
import productImg from "../../assets/images/product-img.png";


export const Product = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className="product">
      <div className="center-wrap">
        <h2 className="product__title">Jack-o'-Lantern Trait Explorer</h2>
        <div className="product__wrap toogles">
          <div className="product__top">
            <div className={toggleState === 1 ? "product__top-item toogles__item-title toogles__item-title--active" : "product__top-item toogles__item-title"} onClick={() => toggleTab(1)}>Background</div>
            <div className={toggleState === 2 ? "product__top-item toogles__item-title toogles__item-title--active" : "product__top-item toogles__item-title"} onClick={() => toggleTab(2)}>Body</div>
            <div className={toggleState === 3 ? "product__top-item toogles__item-title toogles__item-title--active" : "product__top-item toogles__item-title"} onClick={() => toggleTab(3)}>Eyes</div>
            <div className={toggleState === 4 ? "product__top-item toogles__item-title toogles__item-title--active" : "product__top-item toogles__item-title"} onClick={() => toggleTab(4)}>Nose</div>
            <div className={toggleState === 5 ? "product__top-item toogles__item-title toogles__item-title--active" : "product__top-item toogles__item-title"} onClick={() => toggleTab(5)}>Mouth</div>
            <div className={toggleState === 6 ? "product__top-item toogles__item-title toogles__item-title--active" : "product__top-item toogles__item-title"} onClick={() => toggleTab(6)}>Hat</div>
          </div>
          <div className="product__body">
            <div className={toggleState === 1 ? "toogles__item toogles__item--active" : "toogles__item"}>
              <div className="toogles__item-content">
                <div>
                  <div className="product__body-title">Background</div>
                  <div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Сommon</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Uncommon</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Rare</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Legendary</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={toggleState === 2 ? "toogles__item toogles__item--active" : "toogles__item"}>
              <div className="toogles__item-content">
                <div>
                  <div className="product__body-title">Body</div>
                  <div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Сommon</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Uncommon</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Rare</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Legendary</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={toggleState === 3 ? "toogles__item toogles__item--active" : "toogles__item"}>
              <div className="toogles__item-content">
                <div>
                  <div className="product__body-title">Eyes</div>
                  <div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Сommon</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Uncommon</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Rare</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Legendary</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={toggleState === 4 ? "toogles__item toogles__item--active" : "toogles__item"}>
              <div className="toogles__item-content">
                <div>
                  <div className="product__body-title">Nose</div>
                  <div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Сommon</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Uncommon</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Rare</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Legendary</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={toggleState === 5 ? "toogles__item toogles__item--active" : "toogles__item"}>
              <div className="toogles__item-content">
                <div>
                  <div className="product__body-title">Mouth</div>
                  <div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Сommon</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Uncommon</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Rare</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Legendary</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={toggleState === 6 ? "toogles__item toogles__item--active" : "toogles__item"}>
              <div className="toogles__item-content">
                <div>
                  <div className="product__body-title">Hat</div>
                  <div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Сommon</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Uncommon</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Rare</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__body-box">
                      <div className="product__body-subtitle">Legendary</div>
                      <div className="product__body-scroll">
                        <div className="product__body-list">
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Blue Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Red Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                          <div className="product__item">
                            <div className="product__item-title">Orange Head</div>
                            <div className="product__item-img img-wrap">
                              <div><img src={productImg} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product;

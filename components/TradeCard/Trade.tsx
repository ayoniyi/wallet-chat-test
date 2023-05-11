import React from "react";
import style from "./TradeCard.module.scss";
import Image from "next/image";

import Logo from "./smlogo.svg";
import Ex from "./ex.svg";
import Eth from "./ethlogo.svg";
import Arrow from "./rightArr.svg";

const TradeCard = (props: { openTrade?: any }) => {
  return (
    <>
      <div className={style.cardBorder}>
        <div className={style.card}>
          <div className={style.cardTop}>
            <div className={style.topLeft}>
              <Image src={Logo} alt="buylist" />
              <p>BUY/Eth</p>
            </div>
            <div className={style.topRight}>
              <p>Tkn/Eth</p>
            </div>
          </div>
          <div className={style.cardTxt}>
            <p>4000 BUY</p>
            <Image src={Ex} alt="exchange" />
            <div className={style.amount}>
              <Image src={Eth} alt="token" />
              <p>2000 BUSD</p>
            </div>
          </div>
          <div className={style.cardArrBorder}>
            <div className={style.cardArrow} onClick={props.openTrade}>
              <Image src={Arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TradeCard;

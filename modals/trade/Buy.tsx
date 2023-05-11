import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import style from "./Trade.module.scss";
import Image from "next/image";

import Close from "./assets/close.svg";
import Shape from "./assets/cshape.svg";
import Link from "next/link";

import Share from "./assets/share.svg";
import Info from "./assets/info.svg";
import Yellow from "./assets/yellow.svg";

// components
import BuyReq from "./BuyReq";

const overlayyy = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8,
    },
  },
};
const modalise = {
  hidden: {
    scale: 0.6,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      //type: "spring",
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.6,
    },
    //opacity: 0,
  },
};

const Buy = (props: { closeTrade?: any }) => {
  const [buyState, setBuyState] = useState("buy");

  const handleBack = () => {
    // if (saleState === "sellItem") {
    //   setSaleState("choose");
    // } else {
    //   setSaleState("sellItem");
    // }
    setBuyState("buy");
  };
  const handleNext = () => {
    if (buyState === "buy") {
      setBuyState("sent");
    }
    //else {
    //   setBuyState("complete");
    // }
  };
  return (
    <motion.div>
      <motion.div
        key="overlay"
        className={style.overlay}
        onClick={props.closeTrade}
        variants={overlayyy}
        initial="hidden"
        animate="visible"
        exit="exit"
      ></motion.div>
      <motion.div
        key="modal"
        className={`${style.modal}`}
        variants={modalise}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className={style.modalContent}>
          <AnimatePresence exitBeforeEnter>
            {buyState === "buy" ? (
              <motion.div
                key="sellll"
                initial={{ y: -300 }}
                animate={{ y: 0 }}
                exit={{ y: -300 }}
              >
                <div className={style.modalTop}>
                  <Image src={Close} alt="close" onClick={props.closeTrade} />
                  <h4>Buy token</h4>
                </div>
                <div className={style.confirmBxBuy}>
                  <div className={style.confirmContent}>
                    <div className={style.cTop}>
                      <Image src={Info} alt="info" />
                      <p>You are paying</p>
                    </div>
                    <div className={style.cBody}>
                      <p>USDT 200</p>
                      <span>For</span>
                      <p>$0.00 ARB </p>
                    </div>
                    <div className={style.cBottom}>
                      <div className={style.feeBx}>
                        <p>Transaction fee: 3%</p>
                      </div>
                      <div className={style.cSaleBx}>
                        <p>Token sale </p>
                        <Image src={Yellow} alt="yellow" />
                        <Image
                          style={{ cursor: "pointer" }}
                          src={Share}
                          alt="share"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.modalInfo}>
                  <ul>
                    <li>Funds will be sent to your latent wallet.</li>
                    <li>
                      Seller cannot access funds until buyer confirms receipt of
                      tokens
                    </li>
                  </ul>
                </div>
                <div className={style.modalBtns}>
                  <button>Back</button>
                  <button onClick={handleNext}>Send request</button>
                </div>
              </motion.div>
            ) : (
              <BuyReq buyState={buyState} handleBack={handleBack} />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Buy;

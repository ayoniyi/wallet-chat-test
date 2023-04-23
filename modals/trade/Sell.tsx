import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import style from "./Trade.module.scss";
import Image from "next/image";
import Close from "./assets/close.svg";
import Shape from "./assets/cshape.svg";
import Link from "next/link";

import Share from "./assets/Share.svg";

// components
import SellItem from "./SellItem";
import ConfirmSale from "./ConfirmSale";
import SaleCreated from "./SaleCreated";

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

const Sell = (props: { handleClose?: any }) => {
  const [hoverItem, setHoverItem] = useState("none");
  const [saleState, setSaleState] = useState("choose");
  const [itemChoice, setItemChoice] = useState("");

  const handleBack = () => {
    if (saleState === "sellItem") {
      setSaleState("choose");
    } else {
      setSaleState("sellItem");
    }
  };
  const handleNext = () => {
    if (saleState === "sellItem") {
      setSaleState("confirm");
    } else {
      setSaleState("complete");
    }
  };
  return (
    <motion.div>
      {/* animate__animated animate__fadeInUp */}
      <motion.div
        key="overlay"
        className={style.overlay}
        onClick={props.handleClose}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
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
        // initial={{ opacity: 0, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1 }}
      >
        {/* item choice */}
        <div className={style.modalContent}>
          <AnimatePresence exitBeforeEnter>
            {saleState === "choose" ? (
              <motion.div
                key="sellll"
                initial={{ y: -300 }}
                animate={{ y: 0 }}
                exit={{ y: -300 }}
              >
                <div className={style.modalTop}>
                  <Image src={Close} alt="close" onClick={props.handleClose} />
                  <h3>Welcome to Buylist, what are you trading today?</h3>
                </div>
                <div
                  className={style.saleItem}
                  onMouseEnter={() => setHoverItem("token")}
                  onClick={() => {
                    setItemChoice("token");
                    setSaleState("sellItem");
                  }}
                >
                  <h4>Illiquid tokens</h4>
                  {hoverItem === "token" && (
                    <Image
                      src={Shape}
                      alt="active item"
                      //className="animate__animated animate__fadeIn"
                    />
                  )}
                </div>
                <div
                  className={style.saleItem}
                  onMouseEnter={() => setHoverItem("nft")}
                  onClick={() => {
                    setItemChoice("nft");
                    setSaleState("sellItem");
                  }}
                >
                  <h4>NFT / Whitelist</h4>
                  {hoverItem === "nft" && (
                    <Image
                      src={Shape}
                      alt="active item"
                      //className="animate__animated animate__fadeIn"
                    />
                  )}
                </div>
                <div
                  className={style.saleItem}
                  onMouseEnter={() => setHoverItem("social media")}
                  onClick={() => {
                    setItemChoice("socials");
                    setSaleState("sellItem");
                  }}
                >
                  <h4>Social media accounts</h4>
                  {hoverItem === "social media" && (
                    <Image
                      src={Shape}
                      alt="active item"
                      //className="animate__animated animate__fadeIn"
                    />
                  )}
                </div>
                <div
                  className={style.saleItem}
                  onMouseEnter={() => setHoverItem("others")}
                >
                  <h4>Others</h4>
                  {hoverItem === "others" && (
                    <Image
                      src={Shape}
                      alt="active item"
                      //className="animate__animated animate__fadeIn"
                    />
                  )}
                </div>
              </motion.div>
            ) : saleState === "sellItem" ? (
              <SellItem itemChoice={itemChoice} saleState={saleState} />
            ) : saleState === "confirm" ? (
              <ConfirmSale itemChoice={itemChoice} saleState={saleState} />
            ) : saleState === "complete" ? (
              <SaleCreated itemChoice={itemChoice} saleState={saleState} />
            ) : (
              ""
            )}
          </AnimatePresence>
          {itemChoice !== "" &&
            saleState !== "complete" &&
            saleState !== "choose" && (
              <motion.div
                className={style.modalBtns}
                // initial={{ x: 50 }}
                // animate={{ x: 0 }}
                // exit={{ x: 50 }}
                // variants={modalise}
                // initial="hidden"
                // animate="visible"
                // exit="exit"
              >
                <button onClick={handleBack}>Back</button>
                <button onClick={handleNext}>
                  {saleState === "sellItem"
                    ? "Next"
                    : saleState === "confirm"
                    ? "Create trade"
                    : ""}
                </button>
              </motion.div>
            )}
          {saleState === "complete" && (
            <motion.div
              className={style.completeBtns}
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              exit={{ y: 300 }}
            >
              <div className={style.shareBtn}>
                <p>Share transaction to buyer</p>
                <Image src={Share} alt="share" />
              </div>
              <Link href="#" className={style.dashBtn}>
                <p>Dashboard</p>
              </Link>
            </motion.div>
          )}
        </div>
        {/* sell token */}
        {/* <div className={style.modalContent}>
          <div className={style.modalTopSingle}>
            <h3>Sell token</h3>
            <p>For easy summary</p>
          </div>
        </div> */}
      </motion.div>
    </motion.div>
  );
};

export default Sell;

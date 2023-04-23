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

const Buy = (props: { handleClose?: any }) => {
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
            {/* {saleState === "choose" ? ( */}
            <motion.div
              key="sellll"
              initial={{ y: -300 }}
              animate={{ y: 0 }}
              exit={{ y: -300 }}
            >
              <div className={style.modalTop}>
                <Image src={Close} alt="close" onClick={props.handleClose} />
                <h3>Buy now</h3>
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

            {/* )} */}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Buy;

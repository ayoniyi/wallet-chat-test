import { useState } from "react";
import { motion } from "framer-motion";
import style from "./Trade.module.scss";
import Image from "next/image";
import Close from "./assets/close.svg";
import Shape from "./assets/cshape.svg";

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
  const [itemChoice, setItemChoice] = useState("");
  return (
    <motion.div>
      {/* animate__animated animate__fadeInUp */}
      <motion.div
        key="overlay"
        className={style.overlay}
        onClick={props.handleClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
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
          <div className={style.modalTop}>
            <Image src={Close} alt="close" onClick={props.handleClose} />
            <h3>Welcome to Buylist, what are you trading today?</h3>
          </div>
          <div
            className={style.saleItem}
            onMouseEnter={() => setHoverItem("token")}
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

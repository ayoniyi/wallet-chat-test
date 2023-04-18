import style from "./Trade.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

import Time from "./assets/time.svg";
import Tether from "./assets/usdt.svg";

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

const ConfirmSale = (props: { itemChoice?: string; saleState?: any }) => {
  return (
    <>
      <motion.div
        className={style.modalContent}
        key="confirmT"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
      >
        <div className={style.modalTime}>
          <Image src={Time} alt="confirm transcation" />
        </div>
        <div className={style.confirmBx}>
          <p> You have put up $0.00 ARB for sale </p>
          <p>@</p>
          <div className={style.amountBx}>
            <p>200</p>
            <Image src={Tether} alt="usdt" />
          </div>
        </div>
        <div className={style.modalInfo}>
          <ul>
            <li>Funds will be sent to your latent wallet.</li>
            <li>
              You cannot access funds until buyer confirms receipt of tokens{" "}
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default ConfirmSale;

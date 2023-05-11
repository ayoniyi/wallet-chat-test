import style from "./Trade.module.scss";
import Image from "next/image";
import Check from "./assets/check-g.svg";
import { motion } from "framer-motion";

const BuyReq = (props: { handleBack?: any; buyState?: any }) => {
  return (
    <>
      <motion.div
        className={style.modalContent}
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        exit={{ x: 300 }}
      >
        <div className={style.modalTitle2}>
          <h3>Request sent!</h3>
          <h5>
            Congratulations, you have sent a transaction request to
            Oliva.buylist{" "}
          </h5>
        </div>
        <div className={style.reqBorder}>
          <div className={style.reqSent}>
            <Image src={Check} alt="sent" />
            <div className={style.rTxt}>
              <p>$0.00 ARB </p>
              <span>For</span>
              <p>USDT 200</p>
            </div>
          </div>
        </div>
        {/* <div className={style.forSaleBx}>
          <p>$0.00 ARB for sale @USDT200 </p>
        </div>
        <div className={style.check}>
          <Image src={Check} alt="check" />
        </div> */}
        <div className={style.modalInfo}>
          <ul>
            <li>Funds will be sent to your latent wallet.</li>
            <li>
              Seller cannot access funds until buyer confirms receipt of tokens
            </li>
          </ul>
        </div>
        <div className={style.centerBtn}>
          <button onClick={props.handleBack}>Back home</button>
        </div>
      </motion.div>
    </>
  );
};

export default BuyReq;

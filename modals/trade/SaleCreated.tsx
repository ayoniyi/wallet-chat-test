import style from "./Trade.module.scss";
import Image from "next/image";
import Check from "./assets/check.svg";
import { motion } from "framer-motion";

const SaleCreated = (props: { itemChoice?: string; saleState?: any }) => {
  return (
    <>
      <motion.div
        className={style.modalContent}
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        exit={{ y: 300 }}
      >
        <div className={style.modalTitle2}>
          <h3>Transaction created!</h3>
        </div>
        <div className={style.forSaleBx}>
          <p>$0.00 ARB for sale @USDT200 </p>
        </div>
        <div className={style.check}>
          <Image src={Check} alt="check" />
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

export default SaleCreated;

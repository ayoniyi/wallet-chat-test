import { useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import SelectInput from "../../components/TextInput/SelectInput";
import style from "./Trade.module.scss";
import { AnimatePresence, motion } from "framer-motion";

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

const SellItem = (props: { itemChoice?: string; saleState?: any }) => {
  interface Sale {
    selling: string;
    paying: string;
    nftName: string;
    nftLink: string;
    projectName: string;
    discordLink: string;
    accountLink: string;
    socialMedia: string;
  }
  const [userInput, setUserInput] = useState<Sale>({
    selling: "0.00",
    paying: "0.00",
    nftName: "",
    nftLink: "",
    projectName: "",
    discordLink: "",
    accountLink: "",
    socialMedia: "",
  });
  const socialM = ["Twitter", "Instagram", "Facebook"];
  const inputHandler = (event: any) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      {props.itemChoice === "token" ? (
        <motion.div
          className={style.modalContent}
          key="sellT"
          //variants={modalise}
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          //   initial="hidden"
          //   animate="visible"
          //   exit="exit"
        >
          <div className={style.modalTitle}>
            <h3>Sell token</h3>
            <p>For easy summary</p>
          </div>
          <div className={style.modalForm}>
            <TextInput
              labelName="I'm selling"
              inputName="selling"
              type="text"
              value={userInput.selling}
              inputHandler={inputHandler}
            />
            <p className={style.for}>For</p>
            <TextInput
              labelName="Buyer is paying"
              inputName="paying"
              type="text"
              value={userInput.paying}
              inputHandler={inputHandler}
            />
            <div className={style.negTxt}>
              <p>Is your price negotiable?</p>
              <div className={style.negBtns}>
                <div className={style.negBtn}>
                  <p>Yes</p>
                  <input type="radio" id="yes" name="age" value="yes" />
                </div>
                <div className={style.negBtn}>
                  <p>No</p>
                  <input type="radio" id="no" name="age" value="no" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : props.itemChoice === "nft" ? (
        <div className={style.modalContent}>
          <div className={style.modalTitle}>
            <h3>Sell your whitelist</h3>
            <p>Tell us more about this transaction</p>
          </div>
          <div className={style.modalForm}>
            <TextInput
              labelName="Project name"
              inputName="projectName"
              type="text"
              value={userInput.projectName}
              inputHandler={inputHandler}
            />
            <div className={style.mb2}></div>
            <TextInput
              labelName="Discord link"
              inputName="discordlink"
              type="text"
              value={userInput.discordLink}
              inputHandler={inputHandler}
            />
            <p className={style.for}>For</p>
            <TextInput
              labelName="Buyer is paying"
              inputName="paying"
              type="text"
              value={userInput.paying}
              inputHandler={inputHandler}
            />
            <div className={style.negTxt}>
              <p>Is your price negotiable?</p>
              <div className={style.negBtns}>
                <div className={style.negBtn}>
                  <p>Yes</p>
                  <input type="radio" id="yes" name="age" value="yes" />
                </div>
                <div className={style.negBtn}>
                  <p>No</p>
                  <input type="radio" id="no" name="age" value="no" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : props.itemChoice === "socials" ? (
        <div className={style.modalContent}>
          <div className={style.modalTitle}>
            <h3>Sell social media account</h3>
            <p>More details on the account</p>
          </div>
          <div className={style.modalForm}>
            <TextInput
              labelName="Account link"
              inputName="accountlink"
              type="text"
              value={userInput.accountLink}
              inputHandler={inputHandler}
            />
            <div className={style.mb2}></div>
            {/* <TextInput
              labelName="Social media platform"
              inputName="socialMedia"
              type="text"
              value={userInput.socialMedia}
              inputHandler={inputHandler}
            />
            <div className={style.mb2}></div> */}
            <SelectInput labelName="Social media platform">
              {socialM.map((social: any) => (
                <>
                  <option value={social}>{social}</option>
                  <p></p>
                </>
              ))}
            </SelectInput>
            <p className={style.for}>For</p>
            <TextInput
              labelName="Buyer is paying"
              inputName="paying"
              type="text"
              value={userInput.paying}
              inputHandler={inputHandler}
            />
            <div className={style.negTxt}>
              <p>Is your price negotiable?</p>
              <div className={style.negBtns}>
                <div className={style.negBtn}>
                  <p>Yes</p>
                  <input type="radio" id="yes" name="negotiable" value="yes" />
                </div>
                <div className={style.negBtn}>
                  <p>No</p>
                  <input type="radio" id="no" name="negotiable" value="no" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SellItem;

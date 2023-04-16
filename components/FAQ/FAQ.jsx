import { useEffect } from "react";
import style from "./FAQ.module.scss";
const FAQ = () => {
  useEffect(() => {
    const accordion = document.getElementsByClassName(style.faqContentBx);
    let i;
    for (i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener("click", function () {
        this.classList.toggle(style.activeAcc);
      });
    }
  }, []);

  return (
    <div className={style.faqContainer}>
      <div className={style.faqCont} id="faq">
        <div className={style.titleBx}>
          <h2>Have any questions? </h2>
          <p>We&apos;ve got you covered</p>
        </div>
        <div className={style.faqBox}>
          <div className={style.faqContentBx}>
            <div className={style.faqLabel}>
              <p>What is BuyList?</p>
            </div>
            <div className={style.faqContentsm2}>
              {/* <p>
                * Buylist is an NFT whitelist marketplace; it connects buyers
                and sellers of whitelisting spots in a peer-to-peer fashion,
                powered by smart contract.
                <br />
                <br />* Buylist helps NFT enthusiasts to curate upcoming mints
                through direct mail notifications.
                <br />
                <br />* Buylist uses a unique algorithm to provide NFT data such
                as trending NFTs and upcoming NFTs available for public view and
                use.
              </p> */}
              <p>
                Buylist is a flexible decentralized P2P escrow-as-a-service
                platform that facilitates direct exchange of items and services
                in a seamless and secure way.
              </p>
            </div>
          </div>
          <div className={style.faqContentBx}>
            <div className={style.faqLabel}>
              <p>What can I exchange on Buylist?</p>
            </div>
            <div className={style.faqContentsm}>
              <p>
                Buylist can be used to exchange illiquid tokens, OTC sales,
                NFTs, social accounts, game collectibles, and other transferable
                digital assets.
              </p>
            </div>
          </div>
          <div className={style.faqContentBx}>
            <div className={style.faqLabel}>
              <p>Do I pay fees?</p>
            </div>
            <div className={style.faqContentsm}>
              <p>Buylist charges 5% in transaction fee.</p>
            </div>
          </div>
          <div className={style.faqContentBx}>
            <div className={style.faqLabel}>
              <p>What network is Buylist built on ?</p>
            </div>
            <div className={style.faqContentsm}>
              <p>
                Buylist is a multi-chain platform that allows users exchange
                items on various EVM compatible.
              </p>
            </div>
          </div>
          <div className={style.faqContentBx}>
            <div className={style.faqLabel}>
              <p>Is the Buylist smart contract audited ?</p>
            </div>
            <div className={style.faqContentsm}>
              <p>
                Buylist smart contract will be audited to guarantee an extra
                layer of safety for users.
              </p>
            </div>
          </div>

          <div className={style.faqContentBx}>
            <div className={style.faqLabel}>
              <p>
                Can I share a created transaction link to my other social media
                platforms?
              </p>
            </div>
            <div className={style.faqContentsm}>
              <p>Yes! Buylist is built to allow for shareable transactions.</p>
            </div>
          </div>
          <div className={style.faqContentBx}>
            <div className={style.faqLabel}>
              <p>Can I get scammed on Buylist ?</p>
            </div>
            <div className={style.faqContent1}>
              <p>
                Buylist reduces the possibility of getting scammed but doesn’t
                eliminate it. You are advised to only confirm a transaction
                after you are sure of it being completed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

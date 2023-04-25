import Head from "next/head";
import React from "react";
import TradeCard from "../../components/TradeCard/Trade";
import style from "./Marketplace.module.scss";

const Marketplace = () => {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" href="/logo.png" />
        <title>buylist</title>
        <meta name="description" content="escrow everything..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoIcon.svg" />
      </Head>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.top}>
            <div className={style.title}>
              <h2>Trades</h2>
            </div>
            <div className={style.topTabs}>
              <div className={style.tradeTab}>All trades</div>
              <div className={style.tradeTab}>Tokens</div>
              <div className={style.tradeTab}>NFTs & whitelists</div>
              <div className={style.tradeTab}>Social media account</div>
            </div>
          </div>
          <div className={style.itemsBlock}>
            <h2>Tokens</h2>
            <div className={style.itemsRow}>
              <TradeCard />
              <TradeCard />
              <TradeCard />
              <TradeCard />
            </div>
            <div className={style.itemsRow}>
              <TradeCard />
              <TradeCard />
              <TradeCard />
              <TradeCard />
            </div>
          </div>
          <div className={style.itemsBlock}>
            <h2>Whitelists</h2>
            <div className={style.itemsRow}>
              <TradeCard />
              <TradeCard />
              <TradeCard />
              <TradeCard />
            </div>
            <div className={style.itemsRow}>
              <TradeCard />
              <TradeCard />
              <TradeCard />
              <TradeCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketplace;

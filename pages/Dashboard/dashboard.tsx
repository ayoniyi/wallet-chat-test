import { useState, useEffect } from "react";
import { useIsMounted } from "../../hooks/useIsMounted";
import { ethers } from "ethers";
import Head from "next/head";
import style from "./Dashboard.module.scss";
import {
  useAccount,
  // useBalance,
} from "wagmi";
import ABI from "../../contracts/abi.json";
import { create, CID, IPFSHTTPClient } from "ipfs-http-client";
import UserNav from "../../components/userNav";
declare const window: any;
//
import Image from "next/image";
import Info from "./assets/Info.svg";
import User from "./assets/user.svg";
import Down from "./assets/down.svg";
import Send from "./assets/send.svg";
import Dots from "./assets/dots.svg";
import Exc from "./assets/exchange.svg";
import Del from "./assets/trash.svg";
import Share from "./assets/share.svg";
import Share2 from "./assets/share2.svg";
import Copy from "./assets/copy.svg";

const Dashboard = () => {
  const { address } = useAccount();

  const [provider, setProvider] = useState<any>(null);
  const [signer, setSigner] = useState<any>(null);
  const [contract, setContract] = useState<any>(null);
  const mounted = useIsMounted();

  let ipfs: IPFSHTTPClient | undefined;
  try {
    ipfs = create({
      url: "https://ipfs.infura.io:5001/api/v0",
    });
  } catch (error) {
    console.error("IPFS error ", error);
    ipfs = undefined;
  }
  const file = "ayochills/twitter";
  const upload = async () => {
    const result = await (ipfs as IPFSHTTPClient).add(file);
    console.log(">>>", result);
  };

  const offer = {
    id: "0x121212",
    status: 1,
    creator: address,
    token: "0x16631e53C20Fd2670027C6D53EfE2642929b285C",
    //token: "0",
    minAmount: "0",
    maxAmount: "0",
    availableAmount: "0",
    totalAmount: "0",
    orderProcessingTime: 1800,
    item: {
      chargeNonDispute: false,
      hasExternalItem: false,
      //itemData: "0x1234",
      itemData: "ipfs://t5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi",
      disputeHandler: "0x20810f449A750F36345DE17d4a35EAdAD503Da90",
      disputeHandlerFeeReceiver: address,
      disputeHandlerFeePercentage: 1,
      disputeHandlerProof:
        "0x4bb49da701f7c0058afe9be2828963a105cc395d81b157c50cecf0665bcb9d38",
      //"0xeb0deeb00dba9d642a7b8a679b6dceb5a616f09a5678572e7392db2fce178583",
    },
  };

  const addEthers = () => {
    let tempProvider: any = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(tempProvider);

    let tempSigner: any = tempProvider.getSigner();
    setSigner(tempSigner);

    let tempContract: any = new ethers.Contract(
      "0xa5343165d51Ea577d63e1a550b1F3c872ADc58e4",
      ABI,
      tempSigner
    );
    setContract(tempContract);
  };

  useEffect(() => {
    addEthers();
  }, []);

  const generateHash = async () => {
    //upload();
    const call: any = await contract.generateHashForOffer(offer);
    console.log("generate res>>", call);
  };
  const createOffer = async () => {
    addEthers();
    const call: any = await contract.createOffer(offer, false);
    console.log("create>>", call);
  };
  return (
    <>
      {/* {mounted && (
        <div className={style.manual}>
         
          {!ipfs && (
            <p>
              Oh oh, Not connected to IPFS. Checkout out the logs for errors
            </p>
          )}
          <br />
          <p>Address {address}</p>
          <br />
          <br />
          <br />
          <button onClick={createOffer}>Manual Contract call</button>
        </div>
      )} */}
      <Head>
        <link rel="apple-touch-icon" href="/logo.png" />
        <title>buylist</title>
        <meta name="description" content="escrow everything..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoIcon.svg" />
      </Head>
      <UserNav />
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.topContent}>
            <div className={style.topText}>
              <div className={style.welcome}>
                <h2>Welcome.</h2>
                <p>All your transactions in one place</p>
              </div>
              <div className={style.tradesNav}>
                <div className={style.trade}>
                  <p>All</p>
                </div>
                <div className={style.trade}>
                  <p>Active</p>
                </div>
                <div className={style.trade}>
                  <p>Completed</p>
                </div>
                <div className={style.trade}>
                  <p>Disputes</p>
                </div>
              </div>
            </div>
            <div className={style.walletBox}>
              <div className={style.walletAmt}>
                <h2>$0.00</h2>
                <div className={style.walletDesc}>
                  <p className={style.lat}>Latent balance</p>
                  <Image src={Info} alt="info" />
                </div>
              </div>
              <div className={style.walletAmt}>
                <h2>$0.00</h2>
                <div className={style.walletDesc}>
                  <p>Available balance</p>
                  <Image src={Info} alt="info" />
                </div>
              </div>
              <div className={style.walletUser}>
                <Image src={User} alt="user" />
                <p>Juwon.buy</p>
              </div>
            </div>
          </div>
          <button className={style.cr} onClick={createOffer}>
            Create
          </button>
        </div>

        <div className={style.actionBoxes}>
          <div className={style.actionBxContent}>
            <div className={style.tradeListBox}>
              <div className={style.tlTop}>
                <div className={style.search}>
                  <p>Search a trade</p>
                </div>
                <div className={style.sort}>
                  <p>Sort by</p>
                  <Image src={Down} alt="sort" />
                </div>
              </div>
              <div className={style.tradeItem}>
                <div className={style.itemContent}>
                  <div className={style.tradeTxt}>
                    <div className={style.trTitle}>
                      <h2>$0.00 ARB</h2>
                      <Image src={Exc} alt="exchange" />
                      <h2>USDT 200</h2>
                    </div>
                    <div className={style.trIcons}>
                      <Image src={Del} alt="delete" />
                      <Image className={style.mLeft} src={Share} alt="share" />
                    </div>
                  </div>
                  <div className={style.tradeStatus}>
                    <p>Token sale</p>
                    <div className={style.yellow}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.singleTradeBox}>
              <div className={style.dotBx}>
                <Image src={Dots} alt="options" />
              </div>
              <div className={style.itemTitle}>
                <Image src={Copy} alt="copy" />
                <h2>123BUY.BUY</h2>
                <Image src={Share2} alt="share" />
              </div>
              <div className={style.noReq}>
                <h2>
                  This trade has no requests yet, Share transaction link to
                  invite buyers.
                </h2>
              </div>
              <div className={style.closeBtm}>
                <p>Close trade</p>
              </div>
            </div>
            <div className={style.chatBox}>
              <div className={style.dotBx}>
                <Image src={Dots} alt="options" />
              </div>
              <div className={style.chatInput}>
                <input type="text" placeholder="Type a message" />
                <button>
                  <Image src={Send} alt="send" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

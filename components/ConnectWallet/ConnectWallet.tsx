import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { gsap, Power3 } from "gsap";
import style from "./Connect.module.scss";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useBalance,
  useNetwork,
  useContract,
  useSigner,
} from "wagmi";
import { ethers } from "ethers";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import User from "./images/user.svg";
import Close from "./images/close.svg";
import Metamask from "./images/metamask.svg";
import Coinbase from "./images/coinbase.svg";
import WalletConnect from "./images/wc.svg";
import Check from "./images/check.svg";
import Logo from "./images/logo.svg";
import { useIsMounted } from "../../hooks/useIsMounted";
import TextInput from "../TextInput/TextInput";
import { InferusClient } from "inferus-js";
import Sell from "../../modals/trade/Sell";
import Buy from "../../modals/trade/Buy";
//import { shortenAddress } from "../../utils/formatting";

const ConnectWallet = () => {
  const [hasTag, setHasTag] = useState(false);
  const [isChainSupported, setIsChainSupported] = useState(false);
  const [contract, setContract] = useState<any>();
  const mounted = useIsMounted();
  const [showModal, setShowModal] = useState("none");

  interface User {
    tag: string;
    email: string;
  }
  const [userInput, setUserInput] = useState<User>({
    tag: "",
    email: "",
  });

  //alerts
  const connectAlert = () => {
    toast.success(`Wallet connected successfully. `, { duration: 5000 });
  };
  const disconnectAlert = () => {
    toast.success(`Wallet disconnected.`, { duration: 2000 });
  };

  const inputHandler = (event: any) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
    //console.log(userInput);
  };

  //wagmi and connection
  const { disconnect } = useDisconnect();
  const { address, isConnected, connector: activeConnector } = useAccount();
  //const { chain } = useNetwork();
  // const { data, isError, isLoading } = useBalance({
  //   addressOrName: address,
  // });
  const { connectors, connect, isLoading, pendingConnector } = useConnect({
    onSuccess(data) {
      console.log(data);
      if (data.chain.unsupported) {
        disconnect();
        toast.error(`Chain not supported, please switch to supported chain`, {
          duration: 6000,
        });
      } else {
        connectAlert();
        setIsChainSupported(true);
        //localStorage.setItem(isSuppported, true)
        //window.localStorage.setItem("isSupported", "true");
      }
      console.log("Connect", data);
    },
    onError(error) {
      console.log("Error", error);
    },
  });

  //inferus
  const [verified, setVerified] = useState(false);
  const [comment, setComment] = useState("");

  const { data: signer, isError } = useSigner<any>(); // ***
  const signerData: any = useSigner().data;

  const registerName = async () => {
    const linkMetadata: any = {
      paymentLink: {
        evmFallbackAddress: address,
        chains: {
          "evm:137": {
            isEVM: true,
            fallbackAddress: address,
            tokens: {
              coin: [
                {
                  address: address,
                  tag: "*",
                },
              ],
            },
          },
        },
      },
    };
    try {
      console.log("contract>>", contract);
      const regName = await contract.register(userInput.tag, linkMetadata);
      console.log(regName);
    } catch (err) {
      console.log(err);
      //console.log("reg?",regName);
      console.log(isError);
    }
  };

  const checkValidName = async (e: any) => {
    e.preventDefault();
    console.log("signer ==== ", signerData);
    let contractData: any = new InferusClient(signerData);
    console.log("contract", contractData);
    setContract(contractData);

    try {
      if (userInput.tag !== "") {
        if (userInput.tag.length > 1 && userInput.tag.length < 33) {
          let search = userInput.tag;

          let metadataUri = await new InferusClient(
            signerData
          ).namesContract.metadataURIs(
            ethers.utils.formatBytes32String(search)
          );
          metadataUri = ethers.utils.toUtf8String(metadataUri);
          //console.log("meta>>", metadataUri);
          if (metadataUri.substring(0, 5) == "ipfs:") {
            setVerified(false);
          } else if (metadataUri === "") {
            setVerified(true);
          }
        } else if (userInput.tag.length < 2) {
          setVerified(false);
          setComment(
            `Valid inferus names have a minimum of 2 and a maximum of 32 characters.`
          );
        }
      } else if (userInput.tag == "") {
        setVerified(false);
      }
    } catch (err) {
      //setNameError(true);
      console.log(err);
      setVerified(false);
      setComment(`Error: Name not available`);
    }

    registerName();
  };

  //

  const box: any = useRef();
  const close: any = useRef();
  const overlay: any = useRef();

  useEffect(() => {
    let openConnect: any = document.getElementById("openConnect");
    let openConnect2: any = document.getElementById("openConnect2");
    let openConnect3: any = document.getElementById("openConnect3");
    const t1 = gsap.timeline();
    t1.to(box.current, 0.001, {
      right: 0,
      ease: Power3.easeInOut,
    });
    t1.reverse();
    openConnect.onclick = function () {
      t1.reversed(!t1.reversed());
      overlay.current.classList.toggle(style.overlay);
    };
    openConnect2.onclick = function () {
      t1.reversed(!t1.reversed());
      overlay.current.classList.toggle(style.overlay);
    };
    openConnect3.onclick = function () {
      t1.reversed(!t1.reversed());
      overlay.current.classList.toggle(style.overlay);
    };
    overlay.current.onclick = function () {
      t1.reversed(!t1.reversed());
      overlay.current.classList.toggle(style.overlay);
    };
    close.current.onclick = function () {
      t1.reversed(!t1.reversed());
      overlay.current.classList.toggle(style.overlay);
    };
  }, []);

  const handleClose = () => {
    // setTimeout(() => {

    // }, 1000);
    setShowModal("none");
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {/* {showModal === "buy" ? (
          <Buy handleClose={handleClose} />
        ) : showModal === "sell" ? (
          <Sell handleClose={handleClose} />
        ) : (
          ""
        )} */}
        {showModal === "sell" && <Sell handleClose={handleClose} />}
      </AnimatePresence>
      <Toaster
        toastOptions={{
          className: "toasts",
          style: {
            // border: '11px solid #713200',
          },
          success: {
            iconTheme: {
              primary: "#0770A8;",
              secondary: "#fff",
            },
          },
        }}
      />

      <div className={style.container}>
        <div
          //onClick={props.handleModal}
          //className={style.overlay}
          //id="overlay"
          ref={overlay}
        ></div>
        <div className={style.box} ref={box}>
          <div className={style.top}>
            <div className={style.connectTxt}>
              <Image src={User} alt="user" />
              <h2>{!isConnected ? "Connect Wallet" : "Wallet Connected"}</h2>
            </div>
            <div className={style.closeBx}>
              <Image src={Close} alt="close" ref={close} />
            </div>
          </div>
          <div className={style.walletBox}>
            {!isConnected && (
              <div className={style.walletTxt}>
                <p>
                  Connect with one of our wallet providers or Create a new one
                </p>
              </div>
            )}
            {/* <div className={style.wallets}></div> */}
            {!isConnected && (
              <div className={style.connectBox}>
                {connectors.map((connector) => (
                  <div
                    className={`
                    ${style.connectBtn} 
                    ${!connector.ready || isLoading ? "disable2" : " "} 
                    `}
                    // disabled={!mounted}
                    //suppressHydrationWarning
                    key={connector?.id}
                    onClick={() => connect({ connector })}
                  >
                    <div className={style.walletImg} suppressHydrationWarning>
                      <Image
                        suppressHydrationWarning
                        src={
                          connector?.name === "MetaMask"
                            ? Metamask
                            : connector?.name === "WalletConnect"
                            ? WalletConnect
                            : Coinbase
                        }
                        alt="wallet"
                      />
                    </div>
                    <p>
                      {connector.name}
                      {isLoading &&
                        pendingConnector?.id === connector.id &&
                        " (connecting)"}
                    </p>
                  </div>
                ))}
              </div>
            )}
            {mounted && isConnected && (
              <>
                <div className={style.walletTxt}>
                  <h3>Welcome to buylist!</h3>
                  {/* <p>
                    You will be redirected to create your trade in a second!
                  </p> */}
                </div>
                <div className={style.connectedBox}>
                  <Image
                    src={
                      activeConnector?.name === "MetaMask"
                        ? Metamask
                        : activeConnector?.name === "WalletConnect"
                        ? WalletConnect
                        : Coinbase
                    }
                    alt="wallet"
                  />
                  <Image src={Check} alt="good" />
                  <Image src={Logo} alt="logo" />
                </div>
                <button
                  className={style.disconnect}
                  onClick={() => disconnect()}
                >
                  {" "}
                  Sign Out
                </button>
              </>
            )}
          </div>
          <div className={style.line}></div>
          <div className={style.tagBox}>
            {/* {!hasTag && isConnected && ( */}
            <>
              <form
                className={`${style.walletTxt} ${
                  !isConnected ? "disable" : " "
                }`}
                //onSubmit={checkValidName}
              >
                <h3>Quickly setup buylist profile</h3>
                <div className={style.tagForm}>
                  <TextInput
                    labelName="Buylist tag"
                    inputName="tag"
                    type="text"
                    value={userInput.tag}
                    inputHandler={inputHandler}
                    required
                    // onKeyUp={(e) => handleKey}
                  />
                  <button onClick={() => setShowModal("sell")}>Submit</button>
                  <p>{comment}</p>
                  {/* <p>{verified ? "True" : "False"}</p> */}
                </div>
              </form>
            </>
            {/* )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectWallet;

import { useState } from "react";
import { ethers } from "ethers";
//import Nav from "../../components/nav/Nav";
import style from "./Dashboard.module.scss";
import {
  useConnect,
  useAccount,
  useBalance,
  usePrepareContractWrite,
  useContractWrite,
} from "wagmi";

import ABI from "../../contracts/abi.json";

const Dashboard = () => {
  // const { config } = usePrepareContractWrite({
  //   addressOrName: "0xa5343165d51Ea577d63e1a550b1F3c872ADc58e4",
  //   //addressOrName: "0xfBcf1da8f7fe74aA9F7c5829126b2FBe561012B7",
  //   abi: ABI,
  //   chainId: 8001,
  //   functionName: "createOffer",
  // });
  // const { write } = useContractWrite(config);

  // const { config } = usePrepareContractWrite({
  //   //...contractConfig,
  //   //address: "0xa5343165d51Ea577d63e1a550b1F3c872ADc58e4",
  //   //ABI,
  //   // functionName: "createOffer",
  //   // args: [10000000000000000, 200],
  // });

  const { address } = useAccount();
  const { data, isError, isLoading } = useBalance({
    addressOrName: address,
  });
  const offer = {
    id: "0x121212",
    status: 1,
    creator: address,
    token: "0x16631e53C20Fd2670027C6D53EfE2642929b285C",
    minAmount: "0x2386F26FC10000",
    maxAmount: "0x016345785D8A0000",
    availableAmount: "0x016345785D8A0000",
    totalAmount: "0x016345785D8A0000",
    orderProcessingTime: 1800,
    item: {
      chargeNonDispute: false,
      hasExternalItem: false,
      itemData: "0x1234",
      disputeHandler: address,
      disputeHandlerFeeReceiver: address,
      disputeHandlerFeePercentage: 300,
      disputeHandlerProof: "0x1234",
    },
  };

  // const { createOffer } = usePrepareContractWrite({
  //   addressOrName: "0xa5343165d51Ea577d63e1a550b1F3c872ADc58e4",
  //   //addressOrName: "0xfBcf1da8f7fe74aA9F7c5829126b2FBe561012B7",
  //   //abi: ABI,
  //   contractInterface: ABI,
  //   //chainId: 8001,
  //   functionName: "createOffer",
  //   args: [offer, false],
  // });
  // const { write } = useContractWrite(createOffer);

  const { config } = usePrepareContractWrite({
    addressOrName: "0xa5343165d51Ea577d63e1a550b1F3c872ADc58e4",
    //addressOrName: "0xfBcf1da8f7fe74aA9F7c5829126b2FBe561012B7",
    //abi: ABI,
    contractInterface: ABI,
    //chainId: 8001,
    functionName: "generateHashForOffer",
    args: [offer],
    // functionName: "createOffer",
    // args: [offer, false],
  });
  const { write2 } = useContractWrite(config);

  const handleWrite = async () => {
    try {
      // write?.();
      console.log("act1");
      const genr = await write2?.();
      console.log(genr);
      console.log("act2");
    } catch (err) {
      console.log(err);
    }
  };

  //const [address, setAddress] = useState("");
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  // const offer = {
  //   id: "0x121212",
  //   status: 1,
  //   creator: address,
  //   token: "0x16631e53C20Fd2670027C6D53EfE2642929b285C",
  //   minAmount: "0x2386F26FC10000",
  //   maxAmount: "0x016345785D8A0000",
  //   availableAmount: "0x016345785D8A0000",
  //   totalAmount: "0x016345785D8A0000",
  //   orderProcessingTime: 1800,
  //   item: {
  //     chargeNonDispute: false,
  //     hasExternalItem: false,
  //     itemData: "0x1234",
  //     disputeHandler: address,
  //     disputeHandlerFeeReceiver: address,
  //     disputeHandlerFeePercentage: 300,
  //     disputeHandlerProof: "0x1234",
  //   },
  // };

  const manualConnect = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAddress(accounts[0]);
      } catch (err) {
        alert("Install metamask");
      }
    }
    addEthers();
  };

  const addEthers = () => {
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(tempProvider);

    let tempSigner = tempProvider.getSigner();
    setSigner(tempSigner);

    let tempContract = new ethers.Contract(
      "0xa5343165d51Ea577d63e1a550b1F3c872ADc58e4",
      ABI,
      tempSigner
    );
    setContract(tempContract);
  };

  const contractCall = async () => {
    const call = await contract.createOffer(offer, false);
    console.log(call);
  };

  return (
    <>
      <div className={style.container}>
        {/* <button onClick={() => create?.()}>Launch</button> */}
        <button onClick={handleWrite}>Launch</button>
        {/* <p>{address ? address : ""}</p> */}
      </div>
      {/* <div className={style.manual}>
        <button onClick={manualConnect}>Manual connect</button>
        <br />
        <p>Address {address}</p>
        <br />
        <br />
        <br />
        <button onClick={contractCall}>Manual Contract call</button>
      </div> */}
    </>
  );
};

export default Dashboard;

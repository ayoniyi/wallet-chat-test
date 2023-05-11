import "../styles/globals.css";
import "../styles/hvr.css";
import "animate.css";
import "../components/rwc/dist/index.css";

import type { AppProps } from "next/app";

import {
  WagmiConfig,
  createClient,
  //defaultChains,
  chain,
  //Chain,
  configureChains,
} from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const supportedChains = [
  // { ...chain.mainnet, name: "Ethereum" },
  { ...chain.polygon, name: "Polygon" },
  { ...chain.polygonMumbai, name: "Polygon Mumbai" },
];

const { chains, provider, webSocketProvider } = configureChains(
  supportedChains,
  [
    // alchemyProvider({ apiKey: 'yourAlchemyApiKey' }),
    publicProvider(),
  ]
);

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains, options: {} }),
    new WalletConnectConnector({ chains, options: {} }),
    new CoinbaseWalletConnector({ chains, options: { appName: "coinbase" } }),
  ],
  provider,
  webSocketProvider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      {" "}
      <Component {...pageProps} />
    </WagmiConfig>
  );
}

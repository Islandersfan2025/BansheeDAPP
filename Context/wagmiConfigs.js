import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  holesky,
  sepolia,
  baseSepolia,
  moonbaseAlpha,
} from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT;

export const config = getDefaultConfig({
  appName: "Ticket AirDrops",
  projectId: projectId,
  chains: [moonbaseAlpha],
  ssr: true,
});

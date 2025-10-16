import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { parseEther } from "ethers";

export default buildModule("SeoroERCModule", (m) => {
  const seoroERC = m.contract("SeoroERC", ["SeoroERC", "SeoroToken", parseEther("150000000")]);

  return { seoroERC };
});
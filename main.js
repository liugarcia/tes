import { EthereumProvider } from "https://unpkg.com/@walletconnect/ethereum-provider@2.11.4/dist/esm/index.js";

const connectButton = document.getElementById("connect-btn");
const walletDisplay = document.getElementById("wallet-address");

// Configurar o WalletConnect com seu projectId
const provider = await EthereumProvider.init({
  projectId: "b8b153f3d90c148517ecb92b997dfcab", // Substitua pelo seu se quiser
  chains: [1], // Ethereum Mainnet
  showQrModal: true,
});

connectButton.addEventListener("click", async () => {
  try {
    await provider.enable(); // Abre QR Code
    const accounts = await provider.request({ method: "eth_accounts" });
    walletDisplay.textContent = `Carteira: ${accounts[0]}`;
  } catch (err) {
    console.error("Erro ao conectar", err);
    walletDisplay.textContent = "Erro ao conectar";
  }
});

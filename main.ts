import { EthereumProvider } from "https://unpkg.com/@walletconnect/ethereum-provider@2.11.4/dist/esm/index.js"

const connectButton = document.getElementById("connect-btn")
const addressDisplay = document.getElementById("wallet-address")

// Configuração do WalletConnect Provider
const provider = await EthereumProvider.init({
  projectId: "b8b153f3d90c148517ecb92b997dfcab", // Seu project ID do WalletConnect Cloud
  chains: [1], // Ethereum Mainnet
  showQrModal: true,
})

connectButton.addEventListener("click", async () => {
  try {
    // Solicita conexão
    await provider.enable()

    const accounts = await provider.request({ method: "eth_accounts" })

    if (accounts.length > 0) {
      addressDisplay.textContent = `Carteira: ${accounts[0]}`
    } else {
      addressDisplay.textContent = "Nenhuma carteira conectada"
    }
  } catch (error) {
    console.error("Erro ao conectar:", error)
    addressDisplay.textContent = "Erro ao conectar"
  }
})

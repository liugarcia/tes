import { createAppKit } from 'https://unpkg.com/@reown/appkit@latest/dist/index.mjs'
import { mainnet, arbitrum } from 'https://unpkg.com/@reown/appkit@latest/dist/networks/index.mjs'
import { WagmiAdapter } from 'https://unpkg.com/@reown/appkit-adapter-wagmi@latest/dist/index.mjs'

// Seu Project ID do Reown Cloud
const projectId = 'b8b153f3d90c148517ecb92b997dfcab'

const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks: [mainnet, arbitrum]
})

const metadata = {
  name: 'blokiox',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit',
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

const modal = createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, arbitrum],
  metadata,
  projectId,
  features: {
    analytics: true
  }
})

// Espera o DOM carregar antes de adicionar eventos
window.addEventListener('DOMContentLoaded', () => {
  const openConnectModalBtn = document.getElementById('open-connect-modal')
  const openNetworkModalBtn = document.getElementById('open-network-modal')

  openConnectModalBtn?.addEventListener('click', () => modal.open())
  openNetworkModalBtn?.addEventListener('click', () => modal.open({ view: 'Networks' }))
})

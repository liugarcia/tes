import { createAppKit } from '@reown/appkit'
import { mainnet, arbitrum } from '@reown/appkit/networks'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

const projectId = 'b8b153f3d90c148517ecb92b997dfcab' // substitua com o seu se necessário

const networks = [mainnet, arbitrum]

const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks
})

const metadata = {
  name: 'blokiox',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit',
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

const modal = createAppKit({
  adapters: [wagmiAdapter],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const openConnectModalBtn = document.getElementById('open-connect-modal')
  const openNetworkModalBtn = document.getElementById('open-network-modal')

  openConnectModalBtn?.addEventListener('click', () => modal.open())
  openNetworkModalBtn?.addEventListener('click', () => modal.open({ view: 'Networks' }))
})

// Importações necessárias
import { createAppKit } from '@reown/appkit';
import { mainnet, arbitrum } from '@reown/appkit/networks';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';

// 1. Configuração do projeto
const projectId = 'b8b153f3d90c148517ecb92b997dfcab';

// 2. Configurar o adaptador Wagmi
const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks: [mainnet, arbitrum]
});

// 3. Configurar os metadados
const metadata = {
  name: 'blokiox',
  description: 'AppKit Example',
  url: window.location.origin, // Usa a origem atual
  icons: ['https://assets.reown.com/reown-profile-pic.png']
};

// 4. Criar o modal
const modal = createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, arbitrum],
  metadata,
  projectId,
  features: {
    analytics: true
  }
});

// 5. Configurar os botões
const openConnectModalBtn = document.getElementById('open-connect-modal');
const openNetworkModalBtn = document.getElementById('open-network-modal');

openConnectModalBtn.addEventListener('click', () => modal.open());
openNetworkModalBtn.addEventListener('click', () => modal.open({ view: 'Networks' }));

// 6. Ouvir eventos de conexão (opcional)
modal.subscribe('connect', (data) => {
  console.log('Conectado:', data);
  document.getElementById('walletAddress').textContent = data.address;
  document.getElementById('walletChain').textContent = getNetworkName(data.chainId);
  document.getElementById('walletInfo').style.display = 'block';
});

modal.subscribe('disconnect', () => {
  console.log('Desconectado');
  document.getElementById('walletInfo').style.display = 'none';
});

// Função auxiliar para nome de rede
function getNetworkName(chainId) {
  const networks = {
    1: "Ethereum Mainnet",
    42161: "Arbitrum One"
  };
  return networks[chainId] || `Unknown Network (ID: ${chainId})`;
}

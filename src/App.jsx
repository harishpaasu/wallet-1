import { Web3Modal } from '@web3modal/react'
import { EthereumClient, w3mConnectors, w3mProviders } from '@web3modal/ethereum'

import {ConfigureChains, createConfig ,wagmiConfig} from 'wagmi'
import { arbitrum, mainnet,polygon } from 'wagmi/chains'
import{ web3button }from "@web3modal/react"

function Homepage(){
  return<web3button/>
}
function App() {
  
  const chains = [mainnet, arbitrum,polygon]
  const projectId= "98ef98080a9b4a178e3c6ecab2b79fa9"

  const{publicClient}= ConfigureChains (chains, [w3mProviders({projectId})])
  const wagmiConfig = createConfig({
    autoConnect:true,
    connectors: w3mConnectors ({projectId,chains}),
    publicClient
  })
  const ethereumClient =new EthereumClient (wagmiConfig,chains)
  return (
    <>
   <wagmiConfig config={wagmiConfig}>
    <Homepage/>
   </wagmiConfig>
   <Web3Modal projectId={projectId} ethereumClient={ethereumClient}/>
      
    </>
  )
}

export default App
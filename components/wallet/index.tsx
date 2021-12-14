import { useWeb3React,  } from '@web3-react/core'
import { useEffect } from 'react'
import { injected } from '../../connector/connector'
import { Account, Balance, BlockNumber, ChainId } from './components'
import styles from './wallet.module.css'

type WalletProps = {
    handleClose: () => void
}

const Wallet = ({handleClose}: WalletProps) => {
    const { active, activate, deactivate } = useWeb3React()
    const handleConnect = async () => {
        await activate(injected, (error) => {
            console.error(error)
        });
    }
    
    const handleDisconnect = () => {
        deactivate()
    }
    
    if(!active) {
        return (
            <div className="text-center">
                <h2>Connect to Metamask</h2>
                <p>Please connect to Metamask to use this application</p>
                <div className="mt-24">
                    <button className="btn btn-primary" onClick={handleConnect}>Connect</button>
                    <button className="btn btn-secondary ml-12" onClick={handleClose}>Cancel</button>
                </div>
            </div>
        )
    }
    return (
        <div>
            
            <div className={styles["wallet-container"]}>
                    <Account />
                    <BlockNumber />
                    <ChainId />
                    <Balance />
                    <button className="btn btn-warn" onClick={handleDisconnect}>Disconnect</button>
                </div>
        </div>
    )
}

export default Wallet
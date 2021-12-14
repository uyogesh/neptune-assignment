import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { formatEther } from '@ethersproject/units'
import styles from './wallet.module.css'

export function ChainId() {
    const { chainId } = useWeb3React()
  
    return (
        <div className={styles["wallet-row"]}>
        <span>Chain Id</span>
        <span>{chainId ?? ''}</span>
      </div>
    )
  }
  
export function BlockNumber() {
    const { chainId, library } = useWeb3React()
  
    const [blockNumber, setBlockNumber] = React.useState<number>()
    React.useEffect((): any => {
      if (!!library) {
        let stale = false
  
        library
          .getBlockNumber()
          .then((blockNumber: number) => {
            if (!stale) {
              setBlockNumber(blockNumber)
            }
          })
          .catch(() => {
            if (!stale) {
              setBlockNumber(undefined)
            }
          })
  
        const updateBlockNumber = (blockNumber: number) => {
          setBlockNumber(blockNumber)
        }
        library.on('block', updateBlockNumber)
  
        return () => {
          stale = true
          library.removeListener('block', updateBlockNumber)
          setBlockNumber(undefined)
        }
      }
    }, [library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds
  
    return (
        <div className={styles["wallet-row"]}>
        <span>Block Number</span>
        <span>{blockNumber === null ? 'Error' : blockNumber ?? ''}</span>
      </div>
    )
  }
  
export function Account() {
    const { account } = useWeb3React()
  
    return (
        <div className={styles["wallet-row"]}>
        <span>Account</span>
        <span>
          {account === null
            ? '-'
            : account
            ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
            : ''}
        </span>
      </div>
    )
  }
  
export function Balance() {
    const { account, library, chainId } = useWeb3React()
  
    const [balance, setBalance] = React.useState()
    React.useEffect((): any => {
      if (!!account && !!library) {
        let stale = false
  
        library
          .getBalance(account)
          .then((balance: any) => {
            if (!stale) {
              setBalance(balance)
            }
          })
          .catch(() => {
            if (!stale) {
              setBalance(undefined)
            }
          })
  
        return () => {
          stale = true
          setBalance(undefined)
        }
      }
    }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds
  
    return (
      <div className={styles["wallet-row"]}>
        <span>Balance</span>
        <span>{balance === null ? 'Error' : balance ? `Ξ${formatEther(balance||0)}` : ''}</span>
      </div>
    )
  }
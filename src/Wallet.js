import { React, useState, useEffect } from 'react'
import { ethers } from 'ethers'
import styles from './Wallet.module.css'
import simple_token_abi from './Contracts/simple_token_abi.json'
import Interactions from './Interactions';

const Wallet = () => {

    // deploy simple token contract and paste deployed contract address here. This value is local ganache chain
    let contractAddress = '0x1d0C2dBe7F3D9Db4B04a6517e9E25403F17D75dB';

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');

    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [contract, setContract] = useState(null);

    const [tokenName, setTokenName] = useState("Token");
    const [balance, setBalance] = useState(null);
    const [transferHash, setTransferHash] = useState(null);



    const connectWalletHandler = () => {
        if (window.ethereum && window.ethereum.isMetaMask) {

            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
                    accountChangedHandler(result[0]);
                    setConnButtonText('Wallet Connected');
                })
                .catch(error => {
                    setErrorMessage(error.message);
                });

        } else {
            console.log('Need to install MetaMask');
            setErrorMessage('Please install MetaMask browser extension to interact');
        }
    }

    // update account, will cause component re-render
    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        updateEthers();
    }

    const updateBalance = async () => {
        let balanceBigN = await contract.balanceOf(defaultAccount);
        let balanceNumber = balanceBigN.toNumber();

        let tokenDecimals = await contract.decimals();

        let tokenBalance = balanceNumber / Math.pow(10, tokenDecimals);

        setBalance(toFixed(tokenBalance));


    }

    function toFixed(x) {
        if (Math.abs(x) < 1.0) {
            var e = parseInt(x.toString().split('e-')[1]);
            if (e) {
                x *= Math.pow(10, e - 1);
                x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
            }
        } else {
            var e = parseInt(x.toString().split('+')[1]);
            if (e > 20) {
                e -= 20;
                x /= Math.pow(10, e);
                x += (new Array(e + 1)).join('0');
            }
        }
        return x;
    }

    const chainChangedHandler = () => {
        // reload the page to avoid any errors with chain change mid use of application
        window.location.reload();
    }

    // listen for account changes
    window.ethereum.on('accountsChanged', accountChangedHandler);

    window.ethereum.on('chainChanged', chainChangedHandler);

    const updateEthers = () => {
        let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(tempProvider);

        let tempSigner = tempProvider.getSigner();
        setSigner(tempSigner);

        let tempContract = new ethers.Contract(contractAddress, simple_token_abi, tempSigner);
        setContract(tempContract);
    }

    useEffect(() => {
        if (contract != null) {
            updateBalance();
            updateTokenName();
        }
    }, [contract]);

    const updateTokenName = async () => {
        setTokenName(await contract.name());
    }

    return (
        <div>
            {/* <h2> {tokenName + "Purchase your Galaktic"} </h2> */}
            <div className={styles.walletCards}>
                <div className={styles.walletCard}>
                    <h3>Address: {defaultAccount}</h3>
                </div>
                <div className={styles.cartText}>
                   <h4>
                        Purchase your Galaktic
                        <br />
                        Gang Member
                    </h4>
                    <p className={styles.balance}>You may purchase up to 10 at at time and 10 per wallet.</p>
                </div>
                <Interactions contract={contract} />
            <h3 className={styles.balance}>Your available Ethereum: {balance}</h3>
                <button className={styles.button6} onClick={connectWalletHandler}>{connButtonText}</button>
                <div>
                </div>
                {errorMessage}

        </div>
        </div>
    )
}

export default Wallet;
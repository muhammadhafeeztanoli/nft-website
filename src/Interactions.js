import { React, useState } from 'react'
import styles from './Wallet.module.css';

const Interactions = (props) => {

	const [transferHash, setTransferHash] = useState();


	const transferHandler = async (e) => {
		e.preventDefault();
		let transferAmount = e.target.sendAmount.value;
		let recieverAddress = e.target.recieverAddress.value;

		let txt = await props.contract.transfer(recieverAddress, transferAmount);
		console.log(txt);
		setTransferHash("Transfer confirmation hash: " + txt.hash);
	}

	return (
		<div>
			<form onSubmit={transferHandler}>
				<div className={styles.walletCard}>
					<h3> Transfer Coins </h3>
					<p> Reciever Address </p>
					<input type='text' id='recieverAddress' className={styles.addressInput} value="0x1d0C2dBe7F3D9Db4B04a6517e9E25403F17D75dB" />
				</div>
				{/* <p> Send Amount </p> */}
					<input type='number' id='sendAmount' className={styles.inputFiled} />
					<button type='submit' className={styles.clear}>Purchase</button>
				<div>
					{transferHash}
				</div>
			</form>
		</div>
	)

}

export default Interactions;
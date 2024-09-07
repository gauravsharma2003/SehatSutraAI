import React, { useState, useEffect } from 'react';
import { AptosClient, AptosAccount, FaucetClient, CoinClient } from 'aptos';

const NODE_URL = 'https://fullnode.devnet.aptoslabs.com';
const FAUCET_URL = 'https://faucet.devnet.aptoslabs.com';

export default function PaymentComponent() {
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');
  const [client, setClient] = useState(null);
  const [faucetClient, setFaucetClient] = useState(null);
  const [coinClient, setCoinClient] = useState(null);
  const [connectedAccount, setConnectedAccount] = useState(null);

  useEffect(() => {
    const newClient = new AptosClient(NODE_URL);
    setClient(newClient);
    setFaucetClient(new FaucetClient(NODE_URL, FAUCET_URL));
    setCoinClient(new CoinClient(newClient));
  }, []);

  const connectWallet = async () => {
    try {
      const newAccount = new AptosAccount();
      setConnectedAccount(newAccount);
      setSender(newAccount.address().hex());
      
      await faucetClient.fundAccount(newAccount.address(), 100_000_000);
      setStatus('Wallet connected and funded successfully!');
    } catch (error) {
      console.error('Failed to connect or fund account:', error);
      setStatus('Failed to connect or fund wallet. See console for details.');
    }
  };

  const handlePayment = async () => {
    if (!client || !coinClient || !connectedAccount) {
      setStatus('Please connect your wallet first.');
      return;
    }

    try {
      setStatus('Initiating payment...');

      const payload = {
        type: "entry_function_payload",
        function: "0x1::coin::transfer",
        type_arguments: ["0x1::aptos_coin::AptosCoin"],
        arguments: [recipient, amount]
      };

      const txnRequest = await client.generateTransaction(connectedAccount.address(), payload);
      const signedTxn = await client.signTransaction(connectedAccount, txnRequest);
      const transactionRes = await client.submitTransaction(signedTxn);
      await client.waitForTransaction(transactionRes.hash);

      setStatus('Payment successful!');
    } catch (error) {
      console.error('Error:', error);
      setStatus('Payment failed. See console for details.');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Aptos Payment Gateway</h2>
      {!connectedAccount ? (
        <button
          onClick={connectWallet}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
        >
          Connect Wallet
        </button>
      ) : (
        <>
          <input
            type="text"
            value={sender}
            readOnly
            className="w-full p-2 mb-4 border rounded bg-gray-100"
            placeholder="Sender Address (Your Address)"
          />
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Recipient Address"
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Amount (in Octas)"
          />
          <button
            onClick={handlePayment}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Send Payment
          </button>
        </>
      )}
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
}
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Button, Card } from 'react-bootstrap';

function Wallet() {
    const [walletAddress, setWalletAddress] = useState('');
    const [balance, setBalance] = useState('');
    const [isConnected, setIsConnected] = useState(false);
  
    const connectWallet = async () => {
      if (window.ethereum) {
        try {
          const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setWalletAddress(account);
          setIsConnected(true);
          getBalance(account);
        } catch (err) {
          console.error('Wallet connection error:', err);
        }
      } else {
        alert('MetaMask not found. Please install MetaMask!');
      }
    };
  
    const getBalance = async (address) => {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const balance = await provider.getBalance(address);
      setBalance(ethers.formatEther(balance));
    };
  
    useEffect(() => {
      if (walletAddress) getBalance(walletAddress);
    }, [walletAddress]);
  
    return (
      <div className="container mt-4">
      <Card>
        <Card.Body>
          <Card.Title>Company Wallet</Card.Title>
          {!isConnected ? (
            <Button onClick={connectWallet}>Connect Wallet</Button>
          ) : (
            <>
              <p><strong>Address:</strong> {walletAddress}</p>
              <p><strong>Balance:</strong> {balance} ETH</p>
            </>
          )}
        </Card.Body>
      </Card>
      </div>
    );
  };
  
  export default Wallet;

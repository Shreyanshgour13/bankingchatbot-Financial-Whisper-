import {useState} from 'react';
import axios from 'axios';
import CGLogo from './chatGPT.png';
import AppLogo from './app-logo.png';
import './App.css';

const keywords = [
  "hi",
  "hello",
  "Account",
  "Transaction",
  "Deposit",
  "Withdrawal",
  "Balance",
  "ATM",
  "Credit",
  "Debit",
  "Loan",
  "Interest",
  "Statement",
  "Branch",
  "Customer",
  "Savings",
  "Checking",
  "Online banking",
  "Mobile banking",
  "Fraud",
  "Mortgage",
  "Insurance,Overdraft",
  "Foreign exchange",
  "Wire transfer",
  "Swift code",
  "Account statement",
  "Online payment",
  "Bill payment",
  "Credit score",
  "Investment",
  "Retirement",
  "Wealth management",
  "Trust account",
  "Chequebook",
  "Direct deposit",
  "E-banking",
  "Fraud detection",
  "Customer service",
  "Financial planning",
  "Escrow",
  "Identity verification",
  "ATM card",
  "PIN number",
  "Online security",
  "Credit card",
  "Debit card",
  "Rewards program",
  "Mobile payments",
  "Exchange rates",
  "Foreign currency",
  "Personal finance",
  "Budgeting",
  "Loan application",
  "Account closure",
  "Online fraud",
  "Identity theft",
  "Trustee",
  "Automatic payments",
  "Account holder",
  "Online DataTransferItemList",
  "Financial institution",
  "thank",
  "thank you",
];

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // communicate with API
    // post input value 'prompt' to API end point 
    const isBankingRelated = keywords.some(keyword => prompt.toLowerCase().includes(keyword.toLowerCase()));

    if(!isBankingRelated){
      setResponse("Please ask banking-related queries. I'm here to help with banking-related topics!");
      setLoading(false);
      return ;
    }
    axios
      .post("http://localhost:5555/chat", { prompt })
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
    
  };

  return (
    <div className="wrapper">
      <img src={AppLogo} alt="" className="app-logo" />	
      <form onSubmit={handleSubmit}>
        <img src={CGLogo} alt="" className="cg-logo" />
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Hi, how can I assist you today:)"
        />
        <button type="submit">Send</button>
      </form>
      <p className="response-area">
        {loading ? 'loading...' : response}
      </p>
      <div className="footer">~ Financial Whisper ~</div>
</div>
  );
}

export default App;

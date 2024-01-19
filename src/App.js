import './App.css';
import logo from './assets/logo.png';
import { useState } from 'react';
import OpenAI from 'openai';


function App() {

  const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY});
    
  const [code, setCode] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages:[{"role":"system", "content": `Please analyze the code snippet and provide detailed information about any errors present, along with concise solutions for each identified error: ${code}`}],
        temperature: 0.5,
        max_tokens: 300,
      });
      setApiResponse(result.choices[0].message.content);
    } catch (e) {
      console.log(e);
      setApiResponse("Something is going wrong, Please try again.");
    }
    setLoading(false);
  };
  return (
    <div className="App">
      <div className="header">
        <img src={logo} className='logo' alt="logo" />
        <span>Coder </span><span>AI</span>
      </div>
      <div className="code-area">
        <div className="usercode">
          <form onSubmit={handleSubmit}>
            <label htmlFor="code">Enter Your code...</label>
            <textarea name="code" id="code" cols="30" rows="10" placeholder='Paste your code here...' value={code} onChange={(e) => setCode(e.target.value)}></textarea>
            <button disabled={loading || code.length === 0}
            type="submit">{loading ? "Analyzing..." : "Analyze Code"}</button>
          </form>
        </div>
        <div className="result-area">
          <label htmlFor="data">Answer By AI</label>
          {apiResponse && (
          <p id="data">{apiResponse}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

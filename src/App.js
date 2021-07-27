import axios from 'axios';
import './components/UpdatedTimer';
import UpdatedTimer from './components/UpdatedTimer';
const config = require("./config.json");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={downloadButton}>Download Latest</button>
        <button onClick={startScrapeButton}>Start New Scrape</button>
        <UpdatedTimer />
      </header>
    </div>
  );
}

let downloadButton = () => {
  window.location.href = config.downloadUrl;
}

let startScrapeButton = () =>{
  axios.get(config.apiUrl).then((res) => alert(`${res.data.started} Started scrape, refresh in a few minutes and download.`));
}

export default App;

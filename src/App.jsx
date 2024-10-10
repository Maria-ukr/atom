import './App.css';
import SearchBlock from './components/SearchBlock/SearchBlock';
import Steps from './components/Steps/Steps';
import HowDoes from './components/TopInfo/HowDoes/HowDoes';
import Topinfo from './components/TopInfo/Topinfo';
import WaysToUse from './components/TopInfo/WaysToUse/WaysToUse';

function App () {
  return (
    <>
      <Topinfo />
      <HowDoes />
      <WaysToUse />
      <Steps />
      <SearchBlock />
    </>
  );
}

export default App;

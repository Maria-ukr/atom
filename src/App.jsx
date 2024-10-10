import './App.css';
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
    </>
  );
}

export default App;

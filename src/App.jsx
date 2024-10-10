import './App.css';
import Footer from './components/Footer/Footer';
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
      <Footer />
    </>
  );
}

export default App;

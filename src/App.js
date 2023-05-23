import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NoResult from './components/NoResult';
import RegisterReason from './components/RegisterReason';
import InvestChange from './components/InvestChange';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/no-result" element={<NoResult />} />
      <Route exact path="/modals" element={<InvestChange />} />
      <Route exact path="/reason" element={<RegisterReason />} />
    </Routes>
  );
}

export default App;

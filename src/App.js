import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NoResult from './components/NoResult';
import RegisterReason from './components/RegisterReason';
import InvestChange from './components/InvestChange';
import CheckReason from './components/CheckReason';
import Container from './components/Container';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Container><Dashboard /></Container>} />
      <Route exact path="/no-result" element={<NoResult />} />
      <Route exact path="/modals" element={<Container><InvestChange /></Container>} />
      <Route exact path="/registration" element={<Container><RegisterReason /></Container>} />
      <Route exact path="/check-reason" element={<CheckReason />} />
    </Routes>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import ApplicationList from './components/ApplicationList';
import Container from './helpers/Container';

const App = () => (
  <Routes>
    <Route exact path="/" element={<Container><ApplicationList /></Container>} />
  </Routes>
);

export default App;

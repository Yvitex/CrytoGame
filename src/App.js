import './App.scss';
import { Route, Routes } from 'react-router-dom';
import NavigationRoute from './routes/navigation.route';

function App() {
  return (
    <Routes>
      <Route index element={<NavigationRoute />} />
    </Routes>
  );
}

export default App;

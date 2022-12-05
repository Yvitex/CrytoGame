import './App.scss';
import { Route, Routes } from 'react-router-dom';
import NavigationRoute from './routes/navigation.route';
import Home from './routes/home.route';
import Play from './routes/play.route';
import Buy from './routes/buy.route';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavigationRoute />}>
        <Route index element={<Home />} />
        <Route path='play' element={<Play />} />
        <Route path='buy' element={<Buy />} />
      </ Route>

    </Routes>
  );
}

export default App;

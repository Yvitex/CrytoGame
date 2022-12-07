import './App.scss';
import { Route, Routes } from 'react-router-dom';
import NavigationRoute from './routes/navigation.route';
import Home from './routes/home.route';
import Play from './routes/play.route';
import Buy from './routes/buy.route';
import CommunityChatbox from './routes/communityChatbox.route';
import RoadMap from './routes/roadmap.route';
import { useContext } from 'react';
import { TokenContext } from './context/token.context';

function App() {
  const {setChainId} = useContext(TokenContext);
  const {ethereum} = window;

  if(ethereum) {
    window.ethereum.on('chainChanged', function(networkId){
      setChainId(parseInt(networkId.split("x")[1]))
    });
  }


  return (
    <Routes>
      <Route path='/' element={<NavigationRoute />}>
        <Route index element={<Home />} />
        <Route path='play' element={<Play />} />
        <Route path='buy' element={<Buy />} />
        <Route path='community' element={<CommunityChatbox />} />
        <Route path='roadmap' element={<RoadMap />} /> 
      </ Route>

    </Routes>
  );
}

export default App;

import './App.css';
import TopBar from './components/TopBar';
import Home from './components/Home';
import ChatRoom from './components/ChatRoom';
import { Route } from 'react-router-dom';
import {Routes} from 'react-router-dom';
function App() {
  return (
      <div className="App">
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatroom" element={<ChatRoom />} />
          </Routes>
    </div>
  );
}

export default App;

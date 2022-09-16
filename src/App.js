import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Navigation,
  Home,
  About,
  Cookie,
} from './components/index';
// import DateCountdown from 'react-date-countdown-timer';

function App() {
  // const [tilXmas] = useState('2022-12-25');

  return (
    <Router>
      <div className='app'>
        <Navigation />
        {/* <DateCountdown dateTo={tilXmas} callback={() => alert('Hello')} /> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cookie" element={<Cookie />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
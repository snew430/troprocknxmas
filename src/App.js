import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Navigation,
  Footer,
  Home,
  About,
  Sponsors,
  Contact,
  Cookie,
} from './components/index';
// import DateCountdown from 'react-date-countdown-timer';

function App() {
  // const [tilXmas] = useState('2022-12-25');

  return (
    <Router>
      <Navigation />
      {/* <DateCountdown dateTo={tilXmas} callback={() => alert('Hello')} /> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cookie" element={<Cookie />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Sponsors />
      <Footer sticky="bottom" />
    </Router>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import MyBooking from './Pages/myBooking/MyBooking';
import ManageBooking from './Pages/ManageBooking/ManageBooking';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="placeorder" element={<PlaceOrder />} />
            <Route path="mybooking" element={<MyBooking />} />
            <Route path="manageBooking" element={<ManageBooking />} />
            <Route path="login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

import './App.css';
import Layout from './Layout';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Subscribe from './pages/subscribe/Subscribe';
import Login from './pages/login/Login';
import Logout from './pages/logout/Logout';
import Register from './pages/register/Register';
import Privacy from './pages/privacy/Privacy';
import Dashboard from './pages/dashboard/Dashboard'; //under construction
import DashboardBookings from './pages/dashboard/DashboardBookings'; //under construction
import DashboardContent from './pages/dashboard/DashboardContent'; //under construction
import DashboardOverview from './pages/dashboard/DashboardOverview'; //under construction
import FAQ from './pages/faq/FAQ'; //under construction
import NotFound from './pages/404/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/privacy" element={<Privacy />} />
            
            {/* The dashboard pages will only be accessible after login*/ }

            {/**
             *  <Route
                path="/dashboard/*"
                element={
                  <PrivateRoute>
                  <Dashboard />
                  </PrivateRoute>
                }
              />
             */}

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/bookings" element={<DashboardBookings />} />
            <Route path="/dashboard/content" element={<DashboardContent />} />
            <Route path="/dashboard/overview" element={<DashboardOverview />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

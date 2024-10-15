import './App.css';
import Layout from './Layout';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PropTypes from "prop-types";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Subscribe from './pages/subscribe/Subscribe';
import Login from './pages/login/Login';
import Logout from './pages/logout/Logout';
import Register from './pages/register/Register';
import Privacy from './pages/privacy/Privacy';
import Dashboard from './pages/dashboard/Dashboard'; 
import DashboardBookings from './pages/dashboard/DashboardBookings'; 
import DashboardContent from './pages/dashboard/DashboardContent'; 
import DashboardOverview from './pages/dashboard/DashboardOverview'; 
import DashboardEmployer from './pages/dashboard/DashboardEmployer';
import DashboardEmployerBookings from './pages/dashboard/DashboardEmployerBookings';
import DashboardEmployerContent from './pages/dashboard/DashboardEmployerContent';
import DashboardEmployerOverview from './pages/dashboard/DashboardEmployerOverview'; 
import DashboardUser from './pages/dashboard/DashboardUser'; 
import DashboardUserBookings from './pages/dashboard/DashboardUserBookings';
import DashboardUserContent from './pages/dashboard/DashboardUserContent';
import DashboardUserOverview from './pages/dashboard/DashboardUserOverview';
import FAQ from './pages/faq/FAQ'; 
import NotFound from './pages/404/NotFound';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

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
            {/** <Route path="/dashboard/*"
                element={<PrivateRoute><Dashboard /></PrivateRoute>} />  */}

            {/* These links are currently being used for tests*/ }
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/bookings" element={<DashboardBookings />} />
            <Route path="/dashboard/content" element={<DashboardContent />} />
            <Route path="/dashboard/overview" element={<DashboardOverview />} />

            <Route path="/dashboard/employer" element={<DashboardEmployer />} />
            <Route path="/dashboard/employer/bookings" element={<DashboardEmployerBookings />} />
            <Route path="/dashboard/employer/content" element={<DashboardEmployerContent />} />
            <Route path="/dashboard/employer/overview" element={<DashboardEmployerOverview />} />

            <Route path="/dashboard/user" element={<DashboardUser />} />
            <Route path="/dashboard/user/bookings" element={<DashboardUserBookings />} />
            <Route path="/dashboard/user/content" element={<DashboardUserContent />} />
            <Route path="/dashboard/user/overview" element={<DashboardUserOverview />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
import './App.css';
{/** All pages are listed here */}
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
import NotFound from './pages/404/NotFound';
import FAQ from './pages/faq/FAQ';
import Partners from './pages/partners/Partners';
import Support from './pages/support/Support';

import Dashboard from './pages/dashboard/admin/Dashboard'; 
import DashboardBookings from './pages/dashboard/admin/DashboardBookings'; 
import DashboardContent from './pages/dashboard/admin/DashboardContent'; 
import DashboardOverview from './pages/dashboard/admin/DashboardOverview'; 
import DashboardAllEmployers from './pages/dashboard/admin/DashboardAllEmployers'; 
import DashboardAllUsers from './pages/dashboard/admin/DashboardAllUsers';
import DashboardInternships from './pages/dashboard/admin/DashboardInternships';

import DashboardEmployer from './pages/dashboard/employer/DashboardEmployer';
import DashboardEmployerBookings from './pages/dashboard/employer/DashboardEmployerBookings';
import DashboardEmployerContent from './pages/dashboard/employer/DashboardEmployerContent';
import DashboardEmployerDetails from './pages/dashboard/employer/DashboardEmployerDetails';
import DashboardEmployerOverview from './pages/dashboard/employer/DashboardEmployerOverview'; 

import DashboardUser from './pages/dashboard/user/DashboardUser'; 
import DashboardUserBookings from './pages/dashboard/user/DashboardUserBookings';
import DashboardUserContent from './pages/dashboard/user/DashboardUserContent';
import DashboardUserDetails from './pages/dashboard/user/DashboardUserDetails';
import DashboardUserOverview from './pages/dashboard/user/DashboardUserOverview';

{/** The PrivateRoute is for pages that require users to log in */}
{/** The dashboard pages will only be accessible after login when the 
     Private Route has been activated */}
{/** When a user logs in, a httponly session cookie is stored in the browser. 
     The cookie is valid for 60 minutes, and it is removed from the browser when 
     users log out. */}

const PrivateRoute = ({ children }) => {
  const cookie = localStorage.getItem("cookie");
  return cookie ? children : <Navigate to="/login" />;
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
            <Route path="*" element={<NotFound />} /> 
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/subscribe" element={<Subscribe />} /> 

            <Route path="/faq" element={<FAQ />} /> 
            <Route path="/partners" element={<Partners />} />
            <Route path="/support" element={<Support />} /> 
                                    
            <Route path="/dashboard/admin" element={<Dashboard />} />
            <Route path="/dashboard/admin/bookings" element={<DashboardBookings />} />
            <Route path="/dashboard/admin/content" element={<DashboardContent />} />
            <Route path="/dashboard/admin/overview" element={<DashboardOverview />} />
            <Route path="/dashboard/admin/allemployers" element={<DashboardAllEmployers />} />
            <Route path="/dashboard/admin/allusers" element={<DashboardAllUsers />} />
            <Route path="/dashboard/admin/internships" element={<DashboardInternships />} />

            <Route path="/dashboard/employer" element={<DashboardEmployer />} />
            <Route path="/dashboard/employer/bookings" element={<DashboardEmployerBookings />} />
            <Route path="/dashboard/employer/content" element={<DashboardEmployerContent />} />
            <Route path="/dashboard/employer/details" element={<DashboardEmployerDetails />} />
            <Route path="/dashboard/employer/overview" element={<DashboardEmployerOverview />} />

            <Route path="/dashboard/user" element={<DashboardUser />} />
            <Route path="/dashboard/user/bookings" element={<DashboardUserBookings />} />
            <Route path="/dashboard/user/content" element={<DashboardUserContent />} />
            <Route path="/dashboard/user/details" element={<DashboardUserDetails />} />
            <Route path="/dashboard/user/overview" element={<DashboardUserOverview />} />  

            {/** <Route path="/dashboard/*"
                element={<PrivateRoute><Dashboard /></PrivateRoute>} />  */}           

          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
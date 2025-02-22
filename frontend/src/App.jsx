import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MainDashboard from './MainDashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import RecuratorDashboard from './components/RecutorDashboard';
import UserDashboard from './components/UserDashboard';
import Footer from './components/Footer';
import { AnimatedTooltipPreview } from './components/AnimatedTooltipPreview';
import CandidateForm from './components/CandidateForm';
import PageNotFound from './components/PageNotFound';

const App = () => {
  const location = useLocation();

  const hideNavbarFooterTooltip = ['/login', '/signup'];
  
  // Check if user is on a random (non-existing) route
  const isNotFound = ![
    '/',
    '/signup',
    '/login',
    '/recurator-dashboard',
    '/apply-jobs'
  ].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Provider store={store}>
        
        {!hideNavbarFooterTooltip.includes(location.pathname) && !isNotFound && <Navbar />}

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<><Home /><MainDashboard /></>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recurator-dashboard" element={<RecuratorDashboard />} />
            <Route path="/apply-jobs" element={<CandidateForm />} />

          
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>

       
        {!hideNavbarFooterTooltip.includes(location.pathname) && !isNotFound && <AnimatedTooltipPreview />}
        {!hideNavbarFooterTooltip.includes(location.pathname) && !isNotFound && <Footer />}
      </Provider>
    </div>
  );
};

export default App;

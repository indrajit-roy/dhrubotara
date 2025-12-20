import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AuthProvider } from './context/AuthContext';
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard } from './pages/AdminDashboard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-emerald-200 selection:text-emerald-950">
          <Routes>
            {/* Public Routes - Keep Navbar/Footer */}
            <Route path="/" element={<><Navbar /><main><Home /></main><Footer /></>} />
            <Route path="/product/:id" element={<><Navbar /><main><ProductDetailPage /></main><Footer /></>} />
            
            {/* Admin Routes - Custom Layout */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
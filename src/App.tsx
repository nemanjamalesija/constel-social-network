import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProtectedRoute from './ui/ProtectedRoute';

function App() {
  console.log('aa');
  return (
    <Router>
      <Routes>
        <Route
          path='/home'
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Navigate to='/home' replace />} />
      </Routes>
    </Router>
  );
}

export default App;

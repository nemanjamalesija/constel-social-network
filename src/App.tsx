import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />

        <Route path='/' element={<Navigate to='/home' replace />} />
      </Routes>
    </Router>
  );
}

export default App;

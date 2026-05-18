import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Layout from './layouts/Layout';
import BoletosPage from './pages/BoletosPage/BoletosPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import FaltasPage from './pages/FaltasPage/FaltasPage';
import Login from './pages/Login/Login';
import NotasPage from './pages/NotasPage/NotasPage';
import RequerimentosPage from './pages/RequerimentosPage/RequerimentosPage';

function App() {
  const { autenticado } = useAuth();

  if (!autenticado) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="faltas" element={<FaltasPage />} />
        <Route path="notas" element={<NotasPage />} />
        <Route path="boletos" element={<BoletosPage />} />
        <Route path="requerimentos" element={<RequerimentosPage />} />
      </Route>
      <Route path="/login" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

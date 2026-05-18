import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import BoletosPage from './pages/BoletosPage/BoletosPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import FaltasPage from './pages/FaltasPage/FaltasPage';
import NotasPage from './pages/NotasPage/NotasPage';
import RequerimentosPage from './pages/RequerimentosPage/RequerimentosPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="faltas" element={<FaltasPage />} />
        <Route path="notas" element={<NotasPage />} />
        <Route path="boletos" element={<BoletosPage />} />
        <Route path="requerimentos" element={<RequerimentosPage />} />
      </Route>
    </Routes>
  );
}

export default App;

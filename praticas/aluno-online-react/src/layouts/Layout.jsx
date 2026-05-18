import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Topbar from '../components/Topbar/Topbar';

function Layout() {
  return (
    <div className="screen">
      <Sidebar />

      <div className="screen-content">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

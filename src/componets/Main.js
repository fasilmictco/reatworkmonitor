import Preloader from './Preloader';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import ControlSidebar from './ControlSidebar';
function Main()
{
    return(
        <div className="hold-transition sidebar-mini layout-fixed">
            <div className="wrapper">
                
                <Navbar/>
                <Sidebar/>
                <Dashboard/>
                <Footer/>
                <ControlSidebar/>
            </div>
        </div>
    );
}
export default Main;
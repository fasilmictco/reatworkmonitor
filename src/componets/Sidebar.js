import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
function Sidebar()
{
    return(
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <div className="sidebar">

                <nav className="mt-2">

                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/settings">
                            <i className="nav-icon fas fa-th"></i>
                            <p>
                                Settings
                                <span className="right badge badge-danger">New</span>
                            </p>
                            </Link>
                        </li>

                        

                        <li className="nav-item">
                            <a href="pages/widgets.html" className="nav-link">
                            <i className="nav-icon fas fa-th"></i>
                            <p>
                                Widgets
                                <span className="right badge badge-danger">New</span>
                            </p>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="pages/widgets.html" className="nav-link">
                            <i className="nav-icon fas fa-th"></i>
                            <p>
                                Widgets
                                <span className="right badge badge-danger">New</span>
                            </p>
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>
        </aside>
    );

}
export default Sidebar;
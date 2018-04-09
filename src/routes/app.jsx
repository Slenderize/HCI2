import Dashboard from 'views/Dashboard/Dashboard';
import UserProfile from 'views/UserProfile/UserProfile';
import TableList from 'views/TableList/TableList';
import Enrollment from 'views/Enrollment/Enrollment';
import Icons from 'views/Icons/Icons';
import Financial from 'views/Financial/Financial';
import Advising from 'views/Advising/Advising';

const appRoutes = [
    { path: "/dashboard", name: "Home", icon: "fa fa-university", component: Dashboard },
    { path: "/table", name: "Academics", icon: "fa fa-book", component: TableList },
    { path: "/enrollment", name: "Enrollment", icon: "fa fa-pencil-square-o", component: Enrollment },
    { path: "/user", name: "Personal Information", icon: "pe-7s-user", component: UserProfile },
    { path: "/icons", name: "Finance Center", icon: "fa fa-money", component: Icons },
    { path: "/financial", name: "Financial Aid Center", icon: "fa fa-usd", component: Financial },
    { path: "/advising", name: "My Advising Center", icon: "fa fa-user-plus", component: Advising },
    { redirect: true, path:"/", to:"/dashboard", name: "Dashboard" }
];

export default appRoutes;

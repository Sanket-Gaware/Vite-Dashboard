import "./App.css";
// import DashboardLogin from "./Dashboard_Components/Login/DashboardLogin";
// import { DontHaveAccount } from "./Dashboard_Components/Login/DontHaveAccount";
// import ForgotPassword from "./Dashboard_Components/Login/ForgotPassword";
import { Dashboard } from "./Dashboard_Components/Dashboard/DashboardMain/Dashboard";
// import { RedeuxComponents } from "./ReduxComponents";
// import RoutesFile from "./RoutesFile";
import "./Dashboard_Components/Css/DashboardAll.css";
// export const UserContext1 = createContext();

function App() {
  // const [user,setUser]=useState("manish");

  return (
    <>
      {/* <RedeuxComponents/> */}
      {/* <RoutesFile /> */}
      {/* <ForgotPassword /> */}
      {/* <DashboardLogin /> */}
      {/* <DontHaveAccount /> */}
      <Dashboard />
    </>
  );
}

export default App;
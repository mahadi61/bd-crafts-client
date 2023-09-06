import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import FindFriend from "./Pages/FindFriend/FindFriend";
import Home from "./Pages/Home/Home";

import Profile from "./Pages/Profile/Profile";
import "./index.css";
import MessageLayout from "./Layout/MessageLayout";
import ChatBox from "./Components/ChatBox/ChatBox";
import FriendRequest from "./Pages/FindFriend/FriendRequest";
import AddFriend from "./Pages/FindFriend/AddFriend";
import AllFriend from "./Pages/FindFriend/AllFriend";
import CreateGroup from "./Pages/FindFriend/CreateGroup";
import Payment from "./Pages/Payment/Payment";
import Shop from "./Pages/Shop/Shop";

import SettingPage from "./Components/Navber/SettingPage/SettingPage";
import Genarel from "./Components/Navber/SettingPage/Genarel/Genarel";
import Alert from "./Components/Navber/SettingPage/Alert/Alert";
import DashboardLayout from "./Layout/Dashboard/DashboardLayout";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import PayedProducts from "./Components/Dashboard/GeneralUser/PayedProducts";
import MyCart from "./Components/Dashboard/GeneralUser/MyCart";
import PaymentHistory from "./Components/Dashboard/GeneralUser/PaymentHistory";
import ManageShop from "./Components/Dashboard/Admin/ManageShop";

import AddProducts from "./Components/Dashboard/Seller/AddProducts";
import MyShop from "./Components/Dashboard/Seller/MyShop";
import SellerForm from "./Components/SellerForm/SellerForm";
import PendingSeller from "./Components/Dashboard/Admin/PendingSeller";
import Security from "./Components/Navber/SettingPage/Security/Security";
import Account from "./Components/Navber/SettingPage/Security/Account/Account";
import PersonalDetails from "./Components/Navber/SettingPage/Security/PersonalDetails/PersonalDetails";
import PasswordAndSecurity from "./Components/Navber/SettingPage/Security/PasswordAndSecurity/PasswordAndSecurity";
import AddPreference from "./Components/Navber/SettingPage/Security/AddPreference/AddPreference";
import Privacy from "./Components/Navber/SettingPage/Privacy/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      //mostafizur rahmaan
      {
        path: "/setting",
        element: <SettingPage />,
        children: [
          {
            path: "/setting/genarel",
            element: <Genarel />,
          },
          {
            path: "/setting/security",
            element: <Security/>,
            children:[
              {
                path:'/setting/security/account',
                element:<Account/>
              },
              {
                path:'/setting/security/personalDetails',
                element:<PersonalDetails/>
              },
              {
                path:'/setting/security/passwordAndSecurity',
                element:<PasswordAndSecurity/>
              },
              {
                path:'/setting/security/addPreference',
                element:<AddPreference/>
              }
            ]
          },
          {
            path: "/setting/privacy",
            element: <Privacy/>,
          },
          {
            path: "/setting/activities",
            element: "activities",
          },
          {
            path: "/setting/support",
            element: "support",
          },
          {
            path: "/setting/alert",
            element: <Alert />,
          },
        ],
      },

      //Mahdi vai
      {
        path: "/profile",
        element: <Profile />,
      },
      //Rabeya Akter
      {
        path: "/findFriend",
        element: <FindFriend />,
      },
      {
        path: "/friendRequest",
        element: <FriendRequest></FriendRequest>,
      },
      {
        path: "/addFriend",
        element: <AddFriend></AddFriend>,
      },
      {
        path: "/allFriend",
        element: <AllFriend></AllFriend>,
      },
      {
        path: "/createGroup",
        element: <CreateGroup></CreateGroup>,
      },
      
      {
        path: "/shop",
        element: <Shop />,
      },

      {
        path: "/selerForm",
        element: <SellerForm />,
      },
    ],
  },
  // Rayhan
  {
    path: "messages",
    element: <MessageLayout />,
    children: [
      {
        path: "/messages",
        element: <ChatBox />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "payed",
        element: <PayedProducts />,
      },
      {
        path: "myCart",
        element: <MyCart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },

      {
        path: "manageShop",
        element: <ManageShop />,
      },

      {
        path: "pendingSeller",
        element: <PendingSeller></PendingSeller>,
      },
      {
        path: "addProducts",
        element: <AddProducts />,
      },
      {
        path: "myShop",
        element: <MyShop/>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;

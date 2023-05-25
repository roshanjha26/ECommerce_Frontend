// import React, { useEffect } from "react";
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {
//   LoginPage,
//   SignupPage,
//   ActivationPage,
//   HomePage,
//   ProductPage,
//   BestSellingPage,
//   EventsPage,
//   FAQPage,
//   ProductDetailsPage,
//   ProfilePage,
// } from "./Routes.js";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Store from "./redux/store";
// import { loadUser } from "./redux/actions/userAction";
// import { useSelector } from "react-redux";
// import ProtectedRoute from "./ProtectedRoute";

// const App = () => {
//   const { loading, isAuthenticated } = useSelector((state) => state.user);

//   useEffect(() => {
//     Store.dispatch(loadUser());
//   }, []);
//   return (
//     <>
//       {loading ? null : (
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/sign-up" element={<SignupPage />} />
//             <Route
//               path="/activation/:activation_token"
//               element={<ActivationPage />}
//             />
//             <Route path="/products" element={<ProductPage />} />
//             <Route path="/product/:name" element={<ProductDetailsPage />} />
//             <Route path="/best-selling" element={<BestSellingPage />} />
//             <Route path="/events" element={<EventsPage />} />
//             <Route path="/faq" element={<FAQPage />} />
//             <Route
//               path="/profile"
//               element={
//                 <ProtectedRoute isAuthenticated={isAuthenticated}>
//                   <ProfilePage />
//                 </ProtectedRoute>
//               }
//             />
//           </Routes>
//           <ToastContainer
//             position="top-center"
//             autoClose={4000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="dark"
//           />
//         </BrowserRouter>
//       )}
//     </>
//   );
// };

// export default App;

import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  ProductDetailsPage,
  ProfilePage,
  ShopCreatePage,
} from "./Routes.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadUser } from "./redux/actions/userAction";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
const App = () => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  return (
    <>
      {loading ? null : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route
              path="/activation/:activation_token"
              element={<ActivationPage />}
            />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/product/:name" element={<ProductDetailsPage />} />
            <Route path="/best-selling" element={<BestSellingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path="/shop-create" element={<ShopCreatePage />} />
          </Routes>
          <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;

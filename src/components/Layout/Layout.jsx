import React from "react";
import { Outlet } from "react-router-dom";
import Sidepar from "../Sidepar/Sidepar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <div className="flex flex-1">
        <Sidepar />

        {/* <div className="flex-1 w-full p-8 md:ml-64"> */}
        <div className="flex-1 min-h-screen bg-[#e0edf8] flex-col w-full md:pl-[18rem] p-8 md:pr-4">

          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};


export default Layout;


// import React from "react";
// import { Outlet } from "react-router-dom";
// import Sidepar from "../Sidepar/Sidepar";
// import Style from "./Layout.module.css";
// import Footer from "../Footer/Footer";

// const Layout = () => {
//   return (
//     <>
//       <div className="flex">
//         <Sidepar />

//         <div className="flex-1 min-h-screen bg-[#e0edf8] flex-col w-full md:pl-[18rem] p-8 md:pr-4">
//           <Outlet />
//         </div>
//       </div>

//       <Footer />

//     </>
//   );
// };

// export default Layout;


"use client";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import UserService from "../api/services/UserService";
import Footer from "./components/Footer";
import BasicTable from "./components/BasicTable";
import NavBar from "./src/layouts/AdminLayout/NavBar";

export default function AdminLayout({ children }) {
  let currentUser;

  UserService.getAll()
    .then(({ data }) => {
      currentUser = data?.data[0];
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });

  const toggleContent = () => {};

  return (
    <div className="">
      <Header toggleContent={toggleContent} />
      {/* <Header currentUser={currentUser} /> */}
      {/* <NavBar /> */}
      <div className="" style={{ width: "400px", height: "60px" }}>
        sadf
      </div>
      <div className="row mt-3 fixHeight  justify-content-center" id="wrapper">
        <Sidebar />
        {/* <BasicTable /> */}
        {/* Page Content */}
        <div id="" className="pt-5 mt-5 col-9">
          {children} {/* This is where each nested page will be rendered */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

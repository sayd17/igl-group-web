"use client";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import UserService from "../api/services/UserService";
import Footer from "./components/Footer";
import { useRouter } from "next/navigation";
import { useStateContext } from "../context/contextProvider";

export default function AdminLayout({ children }) {
  const { setUser, token, setToken } = useStateContext();
  const router = useRouter();

  let currentUser;

  if (!token) {
    router.push("/login");
  }

  // UserService.getAll()
  //   .then(({ data }) => {
  //     currentUser = data?.data[0];
  //   })
  //   .catch((err) => {
  //     console.error("Error fetching data:", err);
  //   });

  const toggleContent = () => {};

  return (
    <div className="row d-flex justify-content-around">
      <Header toggleContent={toggleContent} />
      {/* <Header currentUser={currentUser} /> */}
      {/* <NavBar /> */}
      {/* <div className="" style={{ width: "400px", height: "60px" }}></div> */}
      <div
        className="col-9 mt-3 fixHeight  justify-content-center"
        id="wrapper"
      >
        <Sidebar />
        {/* <BasicTable /> */}
        {/* Page Content */}
        <div id="" className="pt-5 mx-5 p-left-5 mt-5 col-9">
          {children} {/* This is where each nested page will be rendered */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

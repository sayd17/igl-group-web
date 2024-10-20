import Sidebar from "./components/Sidebar";
import Header from "./components/Navbar";
import UserService from "../api/services/UserService";
import Footer from "./components/Footer";
import BasicTable from "./components/BasicTable";

export default function AdminLayout({ children }) {
  let currentUser;

  UserService.getAll()
    .then(({ data }) => {
      currentUser = data?.data[0];
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });

  return (
    <>
      <Header currentUser={currentUser} />

      <div className="row mt-3 fixHeight" id="wrapper">
        <Sidebar />
        <BasicTable />

        {/* Page Content */}
        <div id="page-content-wrapper" className="p-4">
          {children} {/* This is where each nested page will be rendered */}
        </div>
      </div>
      <Footer />
    </>
  );
}

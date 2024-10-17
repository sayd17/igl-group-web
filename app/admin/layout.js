import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import UserService from "../api/services/UserService";

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

      <div className="d-flex mt-3" id="wrapper">
        <Sidebar />

        {/* Page Content */}
        <div id="page-content-wrapper" className="p-4">
          {children} {/* This is where each nested page will be rendered */}
        </div>
      </div>
    </>
  );
}

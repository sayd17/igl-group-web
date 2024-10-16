import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function AdminLayout({ children }) {
  return (
    <>
      <Header />

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

import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

function MainLayout() {
  return (
    <div className="w-full">
      <Header />
      {/* {children ? children : <Outlet />} */}
      <main className="w-full h-full min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;

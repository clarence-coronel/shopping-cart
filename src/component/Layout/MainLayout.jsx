import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

function MainLayout() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      {/* {children ? children : <Outlet />} */}
      <main className="w-full h-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;

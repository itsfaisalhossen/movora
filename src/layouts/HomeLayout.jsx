import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="dark:bg-primary-dark bg-primary flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default HomeLayout;

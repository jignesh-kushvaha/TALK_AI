import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => (
  <>
    <Navbar />
     <main style={{ minHeight: "80vh"}}>{children}</main>
    <Footer />
  </>
);

export default MainLayout;

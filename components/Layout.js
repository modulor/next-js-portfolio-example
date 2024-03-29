import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div className="container py-4">
      <div className="row">
        <div className="col-12">{children}</div>
      </div>
    </div>
  </>
);

export default Layout;

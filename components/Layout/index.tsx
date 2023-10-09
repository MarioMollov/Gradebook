import TitleBar from "../TitleBar";
import classes from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <TitleBar />
      <div className={classes.main}>{children}</div>
    </>
  );
};

export default Layout;

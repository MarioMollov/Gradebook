import Layout from "../components/Layout";
import classes from "./Home.module.scss";

const HomePage = () => {
  return (
    <Layout>
      <div className={classes.sideBar}>Side bar</div>
      <div className={classes.main}>Main container</div>
    </Layout>
  );
};

export default HomePage;

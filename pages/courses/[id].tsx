import Head from "next/head";
import Layout from "../../components/Layout";

const Course = ({ userData }) => {
  const fullName = `${userData.firstName} ${userData.lastName}`;

  return (
    <Layout>
      <Head>
        <title>{fullName}</title>
      </Head>
      {userData.firstName}
      <br />
      {userData.lastName}
    </Layout>
  );
};

export default Course;

export const getStaticPaths = async () => {
  const users = await fetch(
    "https://gradebook-eb9ee-default-rtdb.europe-west1.firebasedatabase.app/courses.json"
  ).then((response) => response.json());

  return {
    paths: Object.keys(users).map((userId) => ({ params: { id: userId } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const userData = await fetch(
    `https://gradebook-eb9ee-default-rtdb.europe-west1.firebasedatabase.app/courses/${params.id}.json`
  ).then((response) => response.json());

  return { props: { userData } };
};

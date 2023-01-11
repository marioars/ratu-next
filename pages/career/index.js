import Head from "next/head";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import styles from "./career.module.css";

const Career = () => {
  return (
    <AnimatedPage>
      <Head>
        <title>Career - PT Ratu Oceania Raya</title>
        <meta
          name="description"
          content="We are the preeminent provider in Indonesia of hotel and marine personnel to international cruise lines, commercial shipping and hotels worldwide."
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className={styles.container}>
        <span>career page</span>
      </div>
    </AnimatedPage>
  );
};

export default Career;

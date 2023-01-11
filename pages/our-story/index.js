import Head from "next/head";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import styles from "./our-story.module.css";

const OurStory = () => {
  return (
    <AnimatedPage>
      <Head>
        <title>Our Story - PT Ratu Oceania Raya</title>
        <meta
          name="description"
          content="We are the preeminent provider in Indonesia of hotel and marine personnel to international cruise lines, commercial shipping and hotels worldwide."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <span>our story page</span>
      </div>
    </AnimatedPage>
  );
};

export default OurStory;

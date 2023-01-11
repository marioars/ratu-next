import Head from "next/head";
import { motion, Variants } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import CompetitiveEdge from "../components/CompetitiveEdge/CompetitiveEdge";
import OurPrincipals from "../components/OurPrincipals/OurPrincipals";
import OurStory from "../components/OurStory/OurStory";
import Quote from "../components/Quote/Quote";
import styles from "../styles/Home.module.css";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

export default function Home() {
  return (
    <AnimatedPage>
      <Head>
        <title>Home - PT Ratu Oceania Raya</title>
        <meta
          name="description"
          content="We are the preeminent provider in Indonesia of hotel and marine personnel to international cruise lines, commercial shipping and hotels worldwide."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ width: "100vw", textAlign: "center" }}>
        <BannerSlider />
      </div>
      <div>
        <Quote />
      </div>
      <CompetitiveEdge />
      <OurStory />
      <div style={{ width: "100vw" }}>
        <OurPrincipals />
      </div>
      <div className={styles.bottomInfo}></div>
    </AnimatedPage>
  );
}

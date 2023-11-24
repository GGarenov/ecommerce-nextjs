import styles from "../styles/Home.module.css";
import { Button } from "../components/elements/Button";
import { Header } from "../components/navigation/Header";
import { Banner } from "@/components/Banner";
import { CategoriesSection } from "@/components/CategoriesSection";
import { Footer } from "@/components/navigation/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Button>This is btn!</Button>
      <Banner />
      <CategoriesSection />
      <Footer />
    </div>
  );
}

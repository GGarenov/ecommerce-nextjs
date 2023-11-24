import styles from "../styles/Home.module.css";
import { Button } from "../components/elements/Button";
import { Header } from "../components/navigation/Header";
import { Banner } from "@/components/Banner";
import { CategoriesSection } from "@/components/CategoriesSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Button>This is btn!</Button>
      <Banner />
      <CategoriesSection />
    </div>
  );
}

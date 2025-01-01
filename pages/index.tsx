import Layout from "@/components/layout-comp/index";
import styles from "@/styles/Home.module.css";
import { HippoIcon } from "@/ui/icons/hippo-icon/index";
import { HorseIcon } from "@/ui/icons/horse-icon/index";
import { CatIcon } from "@/ui/icons/cat-icon/index";

export default function Home() {
  return (
    <Layout>
      <div className={styles["icon-container"]}>
        <HippoIcon />
        <HorseIcon />
        <CatIcon />
      </div>
    </Layout>
  );
}

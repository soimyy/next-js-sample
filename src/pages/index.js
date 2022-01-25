import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import { ProductList } from "@/components/ProductList";

export default function Home() {
  return (
    <div className={styles.ProductList}>
      <ProductList />
    </div>
  );
}

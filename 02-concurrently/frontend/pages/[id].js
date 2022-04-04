import React from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import useSWR from "swr";

import styles from "../styles/styles.module.css";

export default function AboutPage() {
  const router = useRouter();

  const { id } = router.query;
  const { data } = useSWR(id && `/posts/${id}`);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h2>Posts</h2>
        <small>Next.js SWR Infinite Loading Example</small>
      </header>

      {!data && (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      )}

      {data && (
        <div className={clsx(styles.item, styles.itemDetail)}>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.body}>{data.body}</div>
          <div className={styles.back} onClick={() => router.back()}>
            {"<"}
          </div>
        </div>
      )}
    </main>
  );
}

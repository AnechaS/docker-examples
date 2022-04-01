import React from "react";
import { useRouter } from "next/router";
import useSWRInfinite from "swr/infinite";
import clsx from "clsx";

import styles from "../styles/styles.module.css";

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;

  const limit = 5;
  let start = pageIndex * 5;
  if (start) start += 1;
  return `/posts?_start=${start}&_limit=${limit}`;
};

export default function IndexPage() {
  const router = useRouter();

  const { data, size, setSize } = useSWRInfinite(getKey);

  const handleClick = ({ id }) => {
    router.push(`/${id}`);
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h2>Posts</h2>
        <small>Next.js SWR Infinite Loading Example</small>
      </header>

      {!data && (
        <div className={clsx(styles.loader, styles.loaderCenter)}>
          <span>Loading...</span>
        </div>
      )}

      {data?.map((items) => {
        return items.map((item) => (
          <div
            key={item.id}
            className={styles.item}
            onClick={() => handleClick(item)}
          >
            <div className={styles.title}>{item.title}</div>
            <div className={styles.body}>{item.body}</div>
          </div>
        ));
      })}

      {data && (
        <button className={styles.btn} onClick={() => setSize(size + 1)}>
          Load More
        </button>
      )}
    </main>
  );
}

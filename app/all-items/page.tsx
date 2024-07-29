// app/pages/about.tsx
import styles from "./AllItems.module.css";

export default function About() {
  return (
    <div>
      <h1>All items</h1>
      <div className={styles.card}>
        <div className={styles.container}>
          <div className={styles.itemImg}></div>
          <p>
            Description of item blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah
          </p>
        </div>
      </div>
    </div>
  );
}

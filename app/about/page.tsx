import styles from "./About.module.css";

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <div className={styles.card}>
        <div className={styles.container}>
          <p className={styles.text}>
            About us description blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah
          </p>
        </div>
      </div>
    </div>
  );
}

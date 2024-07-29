// app/pages/contact.tsx
import styles from "./Contact.module.css";

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <div className={styles.container}>
        <form>
          <label>Name</label>
          <input type="text" placeholder="E.g. John Doe" />

          <label>Email</label>
          <input type="text" placeholder="E.g. johndoe@gmail.com" />

          <label>Subject</label>
          <input type="text" placeholder="E.g. Flower Bouqet Enquiry" />

          <label>Message</label>
          <input type="text" placeholder="Enter your message" />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

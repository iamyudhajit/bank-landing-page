import styles from './style';

export default function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>Navbar</div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Hero</div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Stats
        Business
        Billing
        CarDeal
        testimonials
        Clients
        CTA
        Footer
        </div>
      </div>
    </div>
  );
}

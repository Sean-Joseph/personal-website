import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer} id="contact">
      <h2 className={styles.contactHeader}>Contact</h2>
      <h3>Reach out Below!</h3>
      <div className={styles.contactInfoContainer}>
        <div className={styles.contactEmail}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
          </span>
          <div>
            <h3>Email</h3>
            <a href="mailto:josephsean645@gmail.com">josephsean645@gmail.com</a>
          </div>
        </div>
        <div className={styles.contactLinkedIn}>
          <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-linkedin"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
          </span>
          <div>
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/sean-joseph-99969186/">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
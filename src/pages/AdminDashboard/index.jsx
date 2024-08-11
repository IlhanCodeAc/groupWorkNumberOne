import React from "react";
import Container from "../../components/Container";
import styles from "./style.module.scss";
import identIcon from "./imgs/identIcon.png";

const AdminDashboard = () => {
  return (
    <>
      <main className={styles.AdminMain}>
        <Container>
          <header className={styles.AdminHead}>
            <div className={styles.AdminLeft}>
              <img src={identIcon} alt="pfp" className={styles.pfp} />
            </div>
            <div className={styles.Right}>Admin</div>
          </header>
          <div className={styles.AdminOptions}>
            <div className={styles.AddOption}>+ Add Product</div>
            <div className={styles.Search}>Rates</div>
            <div className={styles.Users}>Users</div>
            <div className={styles.Orders}>Orders</div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default AdminDashboard;

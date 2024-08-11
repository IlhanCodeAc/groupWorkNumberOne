import React from 'react'
import Container from '../../components/Container'
import styles from './style.module.scss'
import { useState ,useEffect } from 'react'


const Productos = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((data) => {
        console.log('data fetched');
        setProducts([...data]);
      });
  }, []);
  return (
    <>
    <Container>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Tiny5&display=swap');
    </style>
      <main className={styles.productocontainer}>
        <header className={styles.productoshead}>
          <h3 className={styles.prodcutHeadText}>Available products</h3>
        </header>
        <div className={styles.Cards}>
  {products && products.map((data) => (
    <div key={data.id} className={styles.card}>
      <div className={styles.cardImg}>
        <img src={data.category.image} alt={data.title} />
      </div>
    </div>
  ))}
</div>

      </main>
    </Container>
    </>
  )
}

export default Productos

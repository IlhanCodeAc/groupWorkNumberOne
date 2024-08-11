import React from "react";
import Container from "../../components/Container";
import styles from "./style.module.scss";
import { useEffect } from "react";
import AddProduct from "../../components/AddProduct";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction} from "../../redux/features/actions/productActions";
import { MdDeleteOutline } from "react-icons/md";
import { Button } from "@mui/material";
import { deleteProductsAction } from "../../redux/features/actions/deleteAction";


const Productos = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

 const handleDelete = (id) => {
    dispatch(deleteProductsAction({ id }));
  };
  return (
    <>
      <Container>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Tiny5&display=swap');
        </style>
        <main className={styles.productocontainer}>
          <header className={styles.productoshead}>
            <h3 className={styles.prodcutHeadText}>Available products</h3>
            <AddProduct />
          </header>
          <div className={styles.Cards}>
            {products &&
              products.map((data) => (
                <div key={data.id} className={styles.card}>
                  <div className={styles.cardImg}>
                    <img src={data.category.image} alt={data.title} />
                  </div>
                  <div className={styles.cardFoot}>
                    <div className={styles.FootHead}>
                      <h3 className={styles.ProductDesc}>
                        {data.description.length > 100
                          ? data.description.substring(0, 200) + "..."
                          : data.description}
                      </h3>
                    </div>
                    <div className={styles.FootBottom}>
                      <div className={styles.NameCont}>
                        <h3 className={styles.NameText}>{data.title}</h3>
                      </div>
                      <div className={styles.Price}>
                        <h3 className={styles.PriceText}>{data.price}$</h3>
                      </div>
                      <Button
                        sx={{ backgroundColor: "black" }}
                        variant="contained"
                      >
                        Edit
                      </Button>
                      <MdDeleteOutline
                        className={styles.delete}
                        onClick={() => handleDelete(data.id)}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </main>
      </Container>
    </>
  );
};

export default Productos;

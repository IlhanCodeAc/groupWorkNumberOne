import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import styles from "./style.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../../redux/features/actions/productActions";
import { MdDeleteOutline } from "react-icons/md";
import { Button, CircularProgress } from "@mui/material";
import { deleteProductsAction } from "../../redux/features/actions/deleteAction";
import { toggleDarkMode } from "../../redux/features/theme/themeSlice";
import { FaRegMoon } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";

const Productos = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProductsAction({ id }));
  };

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
    console.log("Dark Mode Toggled:", darkMode);
  };

  return (
    <>
      <div className={darkMode ? styles.darkMode : styles.lightMode}>
        <Container>
          <main className={styles.productocontainer}>
            <header className={styles.productoshead}>
              <h3 className={styles.prodcutHeadText}>Available products</h3>
              <Button
                onClick={handleToggleDarkMode}
                variant="contained"
                sx={{ marginBottom: "20px" }}
              >
                {darkMode ? (
                  <FaMoon style={{ fontSize: "30px" }} />
                ) : (
                  <FaRegMoon style={{ fontSize: "30px" }} />
                )}
              </Button>
            </header>
            {loading ? (
              <div className={styles.spinnerContainer}>
                <CircularProgress style={{fontSize:"65px"}} />
              </div>
            ) : error ? (
              <div className={styles.error}>{error}</div>
            ) : (
              <div className={styles.Cards}>
                {products &&
                  products.map((data) => (
                    <div key={data.id} className={styles.card}>
                      <div className={styles.cardImg}>
                        <img src={data.category.image} alt={data.title} />
                      </div>
                      <div className={styles.cardFoot}>
                        <div className={styles.FootHead}>
                          {/* <h3 className={styles.ProductDesc}>
                        {data.description.length > 100
                          ? data.description.substring(0, 200) + "..."
                          : data.description}
                      </h3> */}
                        </div>
                        <div className={styles.FootBottom}>
                          <div className={styles.NameCont}>
                            <h4 className={styles.NameText}>{data.title}</h4>
                          </div>
                          <div className={styles.Price}>
                            <h3 className={styles.PriceText}>{data.price}$</h3>
                          </div>
                          <Button
                            color="success"
                            variant="contained"
                            size="small"
                          >
                            <Link
                              style={{ textDecoration: "none", color: "white" }}
                              to={`/edit/${data.id}`}
                            >
                              Edit
                            </Link>
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
            )}
          </main>
        </Container>
      </div>
    </>
  );
};

export default Productos;

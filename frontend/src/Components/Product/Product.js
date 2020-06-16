import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Appbar} from "../Appbar/Appbar";
import {ProductDetails} from "./ProductDetails/ProductDetails";
import APIService from "../../utils/APIService";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
}));

function Product({ match }) {
  const [productInfo, setProductInfo] = useState({});
  const classes = useStyles();
  const productId = match.params.id;

  useEffect(() => {
    APIService.fetchProduct(productId).then((product) => {
      console.log(product);
      setProductInfo(product);
    });
  }, [productId]);

  return (
    <div className={classes.grow}>
      <Appbar />
      <ProductDetails data={productInfo} />
    </div>
  );
}

export default Product;

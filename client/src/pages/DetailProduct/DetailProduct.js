import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ProductParameter, Loading } from "../../components";
import { pickBy } from "lodash";
// import styles from "./styles.module.css";

const DetailProduct = (props) => {
  const { slug } = useParams();
  const productBySlug = useSelector((state) =>
    state.products.products.find(
      (element) =>
        element.default_spec.slug === slug ||
        element.options.some((option) => option.slug === slug)
    )
  );
  const [product, setProduct] = useState({});
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_PRODUCT_BY_SLUG", slug: slug });
  }, [dispatch, slug]);
  const handleClick = (product) => {
    scrollToTop();
    dispatch({
      type: "ADD_CART",
      item: product,
      price: product.price,
    });
  };

  useEffect(() => {
    if (!productBySlug) return;
    function getCurrentProductBySlug() {
      const defaultSpecProduct = productBySlug.default_spec;
      if (defaultSpecProduct.slug === slug) {
        return defaultSpecProduct;
      }
      const optionProduct = productBySlug.options.find(
        (option) => option.slug === slug
      );
      const sanitisedOptionProduct = pickBy(
        optionProduct,
        (property) =>
          property === 0 ||
          (Array.isArray(property) && property.length) ||
          (!Array.isArray(property) && property)
      );
      return { ...defaultSpecProduct, ...sanitisedOptionProduct };
    }
    const currentProduct = getCurrentProductBySlug();
    setProduct(currentProduct);
  }, [productBySlug, slug]);

  useEffect(() => {
    if (!productBySlug) return;
    setOptions([productBySlug.default_spec, ...productBySlug.options]);
  }, [productBySlug, slug]);

  function scrollToTop() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return product.name ? (
    <ProductParameter
      slug={slug}
      name={productBySlug.default_spec && productBySlug.default_spec.name}
      price={product.price}
      discount={product.discount}
      display={product.display}
      processor={product.processor}
      memory={product.memory}
      storage={product.storage}
      operating_system={product.operating_system}
      graphic_card={product.graphic_card}
      click={(product) => handleClick(product)}
      product={productBySlug}
      options={options}
    />
  ) : (
    <Loading />
  );
};
export default DetailProduct;
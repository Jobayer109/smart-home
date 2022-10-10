import { getStoredData } from "../utilities/fakedb";

export const cartAndProductData = async () => {
  const productData = await fetch("data.json");
  const products = await productData.json();

  const storedData = getStoredData();
  const initialCart = [];
  for (const id in storedData) {
    const getProduct = products.find((product) => product.id === id);
    if (getProduct) {
      const quantity = storedData[id];
      getProduct.quantity = quantity;
      initialCart.push(getProduct);
    }
  }

  return { products, initialCart };
};

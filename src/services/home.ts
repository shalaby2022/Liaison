import axios from "axios";
import { IProduct, categoryArgument } from "../store/actions/home";

export const fetchProducts = async (category: categoryArgument) => {
  const url = `${"https://fakestoreapi.com/products/category/"}${category}`;

  return await axios<IProduct[]>({
    method: "GET",
    url,
  });
};

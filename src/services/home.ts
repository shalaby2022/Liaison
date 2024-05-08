import axios from "axios";
import { IProduct } from "../store/actions/home";

export const fetchPost = async (category?: string) => {
  const url = `${"https://fakestoreapi.com/products/category/"}${category}`;

  return await axios<IProduct[]>({
    method: "GET",
    url,
  });
};

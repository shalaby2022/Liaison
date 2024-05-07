import axios from "axios";
import { IPOST } from "../store/actions/home";

export const fetchPost = async (id?: number) => {
  const url = id
    ? `${"https://gorest.co.in/public/v2"}/posts?id=${id}`
    : `${"https://gorest.co.in/public/v2"}/posts`;

  return await axios<IPOST[]>({
    method: "GET",
    url,
  });
};

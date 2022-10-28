// Hooks
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Services
import { getShop } from "../services/shopService";

const Shop = () => {
  const [shopData, setShopData] = useState();
  const [shopDataHelperText, setShopDataHelperText] = useState("");

  const params = useParams();

  useEffect(() => {
    getShop(params.id)
      .then((response) => {
        setShopData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  return <div>{JSON.stringify(shopData)}</div>;
};

export default Shop;

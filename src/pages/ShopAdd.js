// Hooks
import { useState } from "react";

// Components
import ShopAddForm from "../components/forms/ShopAddForm";

const ShopAdd = () => {
  const [addShopOk, setAddShopOk] = useState(false);

  const handleSubmit = async (name, address, flavors) => {
    // const res = await addShop(name, address, flavors);
    setAddShopOk(true);
  };
  return (
    <>
      {addShopOk ? (
        <div>Lodziarnia dodana prawidłowo</div>
      ) : (
        <ShopAddForm handleSubmit={handleSubmit} />
      )}
    </>
  );
};

export default ShopAdd;

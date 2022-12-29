import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ShopAddAddress from "../components/ShopAddAddress";
import ShopAddFlavors from "../components/ShopAddFlavors";
import ShopAddMap from "../components/ShopAddMap";
import ShopAddName from "../components/ShopAddName";
import ShopAddOpeningHours from "../components/ShopAddOpeningHours";
import ShopAddSummary from "../components/ShopAddSummary";
import { useUser } from "../context/UserContext";
import { GetShopById, UpdateShopById } from "../services/shop";
import { GetUser } from "../services/user";

const EditShop = () => {
  const user = useUser();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState();
  const params = useParams();

  const styleTime = (h, m) => {
    if (h <= 9) h = `0${h}`;
    if (m <= 9) m = `0${m}`;

    return `${h}:${m}`;
  };

  const handleUpdateShop = async () => {
    const res = await UpdateShopById(params.id, formData);
    if (res.status) {
      console.log(res.content);

      const userData = await GetUser();
      user.setUser(await userData.content);

      navigate(`/shop/${res.content._id}`);
      return;
    }
    setError(res.message);
    console.log(res.message);
  };

  useEffect(() => {
    const populateShop = async (id) => {
      setFormData(await GetShopById(id));
    };

    populateShop(params.id);
  }, [params.id]);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  if (!formData) return null;
  switch (step) {
    case 1: {
      return (
        <ShopAddName
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      );
      break;
    }
    case 2: {
      return (
        <ShopAddAddress
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      );
      break;
    }
    case 3: {
      return (
        <ShopAddMap
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      );
      break;
    }
    case 4: {
      return (
        <ShopAddOpeningHours
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
          styleTime={styleTime}
        />
      );
      break;
    }
    case 5: {
      return (
        <ShopAddFlavors
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
          styleTime={styleTime}
        />
      );
      break;
    }
    case 6: {
      return (
        <>
          <ShopAddSummary
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
            styleTime={styleTime}
            error={error}
            setError={setError}
            handleCreateShop={handleUpdateShop}
          />
        </>
      );
      break;
    }
    default: {
      return "default";
      break;
    }
  }
};

export default EditShop;

import { Button, Card, CardContent, CardHeader } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { DeleteShopById, GetShopById } from "../services/shop";
import { GetUser } from "../services/user";

const DeleteShop = () => {
  const [error, setError] = useState("");
  const params = useParams();
  const [shop, setShop] = useState(null);
  const user = useUser();

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const deleteData = await DeleteShopById(id);
    console.log(deleteData);
    if (!deleteData.status) {
      if (!deleteData.message) {
        setError("Błąd usuwania");
        return;
      } else {
        setError(deleteData.message);
        return;
      }
    }

    const userData = await GetUser();
    if (!userData.status) {
      setError(userData.message);
      return;
    }

    user.setUser(await userData.content);
    navigate("/shop");
  };

  useEffect(() => {
    const populateShop = async (id) => {
      setShop(await GetShopById(id));
    };

    populateShop(params.id);
  }, [params.id]);

  if (!shop) return null;
  return (
    <Card className="card">
      <CardHeader
        className="card-header"
        title={`Czy chcesz usunąć ${shop.name}?`}
      />
      <CardContent className="card-content">
        {error && <div className="error">{error}</div>}

        <div className="flex-row">
          <Button
            fullWidth
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              setError("");
              navigate(`/shop/${params.id}`);
            }}
          >
            Nie
          </Button>
          <Button
            fullWidth
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              setError("");
              handleDelete(params.id);
            }}
          >
            Tak
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeleteShop;

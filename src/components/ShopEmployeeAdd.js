import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import validator from "validator";
import { useTheme } from "../context/ThemeContext";
import { GetShopById } from "../services/shop";
import Loading from "./Loading";

const ShopEmployeeAdd = ({ shop, setShop, setChanged, populateShop }) => {
  const isMobile = useTheme().getIsMobile();
  const [loading, setLoading] = useState(false);
  const [employee, setEmployee] = useState({ email: "", jobPosition: "" });
  const [error, setError] = useState("");

  const handleAddEmployee = async (e) => {
    setError("");
    setLoading(true);
    e.preventDefault();
    if (!validator.isEmail(employee.email)) {
      setError("Nieprawidłowy adres email pracownika.");
      return;
    }

    // send to api question about email exists

    populateShop();
    setEmployee({ email: "", jobPosition: "" });
    setShop({});
    setLoading(false);
  };

  if (loading) return <Loading />;

  return (
    <>
      <Container>
        <Typography variant="h5" gutterBottom>
          Zaproś nowego pracownika
        </Typography>
        {error && <div className="error">{error}</div>}
        <div
          className={
            isMobile
              ? "flex-column flex-space-between flex-center"
              : "flex-row flex-space-between flex-center"
          }
        >
          <TextField
            fullWidth
            label="Email pracownika"
            type="text"
            id="email"
            value={employee.email}
            onChange={(e) =>
              setEmployee({ ...employee, email: e.target.value })
            }
          />
          <FormControl fullWidth>
            <InputLabel id="job-position-label">Stanowisko</InputLabel>
            <Select
              labelId="job-position-label"
              id="job-position"
              value={employee.jobPosition}
              label="Stanowisko"
              onChange={(e) =>
                setEmployee({ ...employee, jobPosition: e.target.value })
              }
            >
              <MenuItem value={"owner"}>Właściciel</MenuItem>
              <MenuItem value={"employee"}>Pracownik</MenuItem>
            </Select>
          </FormControl>
          <div>
            <Button
              disabled={!employee.email || !employee.jobPosition}
              variant="contained"
              onClick={handleAddEmployee}
            >
              Zaproś
            </Button>
          </div>
        </div>
      </Container>
      <div>
        <Divider
          style={{
            marginBottom: "1rem",
            paddingBottom: "1rem",
          }}
        />
      </div>
    </>
  );
};

export default ShopEmployeeAdd;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetUserById, UpdateUserById } from "../services/user";
import Loading from "./Loading";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

const AdminUserProfile = () => {
  const params = useParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  const populateUser = async (id) => {
    const userData = await GetUserById(id);
    if (!userData.status) {
      setError(userData.status);
      setLoading(false);
      return;
    }
    setUser(userData.content);
    setLoading(false);
  };

  const handleUserUpdate = async (e) => {
    setLoading(true);
    setError("");
    e.preventDefault();
    const updateUserData = await UpdateUserById(user._id, user);
    if (!updateUserData.status) {
      setError(updateUserData.message);
      setLoading(false);
      return;
    }

    populateUser(params.id);
    setLoading(false);
  };
  const handleRolesChange = (e) => {
    let arr = user.roles;

    if (e.target.checked) {
      arr.push(e.target.name);
      setUser({ ...user, roles: arr });
      return;
    }

    arr = arr.filter((role) => role !== e.target.name);
    setUser({ ...user, roles: arr });
  };

  useEffect(() => {
    setError("");
    setLoading(true);
    populateUser(params.id);
  }, [params.id]);

  if (loading) return <Loading />;
  if (!user) return <Loading />;
  return (
    <Card className="card-profile">
      <CardHeader
        className="card-header"
        title={
          <Typography variant="h6">
            <strong>user._id:</strong> {user._id}
          </Typography>
        }
      />
      {error && <div className="error">{error}</div>}
      <CardContent className="card-content flex-column">
        <TextField
          label="user.email"
          fullWidth
          type="text"
          id="userEmail"
          value={user.email}
          disabled
        />
        <TextField
          label="user.authType"
          fullWidth
          type="text"
          id="user.authType"
          value={user.authType}
          disabled={true}
        />

        <FormControl>
          <FormLabel id="user.status-label">user.staus</FormLabel>
          <RadioGroup
            name="user.status"
            value={user.status}
            onChange={(e) => setUser({ ...user, status: e.target.value })}
          >
            <FormControlLabel
              value="active"
              control={<Radio />}
              label="active"
            />
            <FormControlLabel
              value="pending"
              control={<Radio />}
              label="pending"
            />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel id="user.roles-label">user.roles</FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleRolesChange}
                checked={user.roles.includes("default")}
                name="default"
                disabled={true}
              />
            }
            label="user"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleRolesChange}
                checked={user.roles.includes("owner")}
                disabled={true}
                name="owner"
              />
            }
            label="owner"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleRolesChange}
                checked={user.roles.includes("admin")}
                disabled={true}
                name="admin"
              />
            }
            label="admin"
          />
        </FormControl>
        <Button fullWidth variant="contained" onClick={handleUserUpdate}>
          Aktualizuj
        </Button>
      </CardContent>
    </Card>
  );
};

export default AdminUserProfile;

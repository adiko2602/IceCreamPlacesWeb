import {
  Card,
  CardHeader,
  Typography,
  CardContent,
  Link as MuiLink,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { GetAllUsers } from "../services/user";

const AdminUsers = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredUser, setFilteredUser] = useState([]);

  useEffect(() => {
    setError("");

    const populateUsers = async () => {
      const getUsersData = await GetAllUsers();
      if (!getUsersData.status) {
        setError(getUsersData.message);
        setLoading(false);
        return;
      }
      setUsers(getUsersData.content);
      setLoading(false);
    };

    setLoading(true);
    populateUsers();
  }, []);

  useEffect(() => {
    if (query === "") {
      setFilteredUser([]);
    } else {
      setFilteredUser(
        users.filter((user) => {
          if (
            user.email.toLowerCase().includes(query.toLowerCase()) ||
            user._id.toLowerCase().includes(query.toLowerCase())
          )
            return user;
          return null;
        })
      );
    }
  }, [query, users]);

  if (loading) return <Loading />;

  if (!users) return <div>Brak Użytkowników w bazie</div>;

  return (
    <Card className="card-profile">
      <CardHeader
        className="card-header"
        title={<Typography variant="h5">Użytkownicy</Typography>}
      />
      {error && <div className="error">{error}</div>}
      <CardContent className="card-content">
        <TextField
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          label="Szukaj"
          fullWidth
        />
      </CardContent>
      <CardContent className="card-content">
        {filteredUser.length <= 0 &&
          users.map((user) => (
            <div
              key={user._id}
              style={{ borderBottom: "solid 1px black", padding: "10px 0" }}
            >
              <MuiLink component={Link} to={`/admin/users/${user._id}`}>
                {user._id}
                <br />
                <strong>{user.email}</strong>
              </MuiLink>
            </div>
          ))}

        {filteredUser.length > 0 &&
          filteredUser.map((user) => (
            <div
              key={user._id}
              style={{ borderBottom: "solid 1px black", padding: "10px 0" }}
            >
              <MuiLink component={Link} to={`/admin/users/${user._id}`}>
                {user._id}
                <br />
                <strong>{user.email}</strong>
              </MuiLink>
            </div>
          ))}
      </CardContent>
    </Card>
  );
};

export default AdminUsers;

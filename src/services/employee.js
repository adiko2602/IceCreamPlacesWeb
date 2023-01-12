import { useAxios } from "./axios";
import { useAuthHeader } from "./useAuthHeader";

export const CreateEmployee = async (shopId, employee) => {
  const authHeader = useAuthHeader();
  const api = useAxios();

  if (!authHeader) return { message: "Błąd tokena autoryzacji" };

  return await api
    .post(`shops/${shopId}/employees`, employee, authHeader)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error.response.data;
    });
};

export const UpdateEmployee = async (shopId, employee) => {
  const authHeader = useAuthHeader();
  const api = useAxios();

  if (!authHeader) return { message: "Błąd tokena autoryzacji" };

  return await api
    .patch(`shops/${shopId}/employees`, employee, authHeader)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error.response.data;
    });
};

export const DeleteEmployee = async (shopId, employee) => {
  const authHeader = useAuthHeader();
  const api = useAxios();

  if (!authHeader) return { message: "Błąd tokena autoryzacji" };

  return await api
    .delete(`shops/${shopId}/employees/${employee.email}`, authHeader)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error.response.data;
    });
};

import axios, { type AxiosError, type AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { router } from "../router/Routes";

axios.defaults.baseURL = "http://localhost:5207/api";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;
    switch (status) {
      case 400:
        if (data.errors) {
          const ModelErrors :string[]=[];
          for (const key in data.errors) {
            ModelErrors.push(data.errors[key   ])
          }
          throw ModelErrors
          }
        toast.error(data.title);
        break;
      case 401:
        toast.error(data.title);
        break;
      case 404:
        router.navigate("/not-found");
        break;
      case 500:
        router.navigate("/server-error", {
          state: { error: data, status: status },
        });

        toast.error(data.title);
        break;

      default:
        break;
    }
    return Promise.reject(error.response);
  }
);

const queries = {
  get: (url: string) =>
    axios.get(url).then((response: AxiosResponse) => response.data),
  post: (url: string, body: {}) =>
    axios.post(url, body).then((response: AxiosResponse) => response.data),
  put: (url: string, body: {}) =>
    axios.put(url, body).then((response: AxiosResponse) => response.data),
  delete: (url: string) =>
    axios.delete(url).then((response: AxiosResponse) => response.data),
};

const Errors = {
  get400error: () => queries.get("/error/bad-request"),
  get401error: () => queries.get("/error/unauthorized"),
  get404error: () => queries.get("/error/not-found"),
  get500error: () => queries.get("/error/server-error"),
  getValidationError: () => queries.get("/error/validation-error"),
};
const Catalog = {
  list: () => queries.get("products"),
  details: (id: number) => queries.get(`products/${id}`),
};
const requests = {
  Catalog,
  Errors,
};
export default requests;

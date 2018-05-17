import axios from "../../config/axios";

function listarPrivado(cargados, cantidad, emisor, receptor) {
  const query = {
    params: {
      emisor,
      cargados,
      cantidad,
    },
  };
  return axios
    .get(`${axios.defaults.baseUrl}/api/mensaje/privado/${receptor}`, query)
    .then(resp => resp.data);
}

function listarPublico(cargados, cantidad) {
  const query = {
    params: {
      cargados,
      cantidad,
    },
  };
  return axios
    .get(`${axios.defaults.baseUrl}/api/mensaje/publico`, query)
    .then(resp => resp.data);
}

function guardar(obj) {
  if (obj._id) {
    return axios
      .put(`${axios.defaults.baseUrl}/api/mensaje/${obj._id}`, obj)
      .then(resp => resp.data);
  }
  return axios
    .post(`${axios.defaults.baseUrl}/api/mensaje`, obj)
    .then(resp => resp.data);
}

function marcarComoVistos(emisor) {
  return axios
    .put(`${axios.defaults.baseUrl}/api/mensaje/marcarvistos/${emisor}`)
    .then(resp => resp.data);
}

const chatApi = {
  listarPrivado,
  listarPublico,
  guardar,
  marcarComoVistos,
};

export default chatApi;

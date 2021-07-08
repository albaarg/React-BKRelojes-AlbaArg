const BASE_URL = 'https://my-json-server.typicode.com/albaarg/tienda';

const getProducts = () => fetch(`${BASE_URL}/productos`).then(res => res.json());

export default getProducts;
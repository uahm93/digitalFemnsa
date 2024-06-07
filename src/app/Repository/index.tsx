
const PRODUCTS_ENDPOINT = 'https://dummyjson.com/products'

export const handleGetProducts = async() => {
    try {
      const response = await fetch(PRODUCTS_ENDPOINT, {
        method: 'GET',
      });
      if (!response.ok) {
        throw response.status;
      }
      const data = await response.json();
      return {
        data,
        status: response.status,
      };
    } catch (error) {
      throw error;
    }
}
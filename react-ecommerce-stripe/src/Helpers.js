export const isInCart = (product, cartItems) => {
  return cartItems.find((item) => item.id === product.id);
};

const API_URL = "http://localhost:8000";

export async function fetchFromAPI(endpointURL, options) {
  // sets default values - if provided they overwrite defaults
  const { method, body } = { method: "POST", body: null, ...options };

  const res = await fetch(`${API_URL}/${endpointURL}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

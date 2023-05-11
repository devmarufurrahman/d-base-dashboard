export const getOrders = () => {
	return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
};

export const getRevenue = () => {
	return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export const getProduct = () => {
	return fetch("https://dummyjson.com/products").then((res) => res.json());
};

export const getUsers = () => {
	return fetch("https://dummyjson.com/users").then((res) => res.json());
};

export const getPost = () => {
	return fetch("https://dummyjson.com/posts").then((res) => res.json());
};

export const getMail = () => {
	return fetch("https://dummyjson.com/comments").then((res) => res.json());
};

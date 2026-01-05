const BASE_URL = 'https://dummyjson.com';

export const fetchPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`);
  const data = await res.json();
  return data;
};

export const fetchPostById = async (id) => {
  const res = await fetch(`${BASE_URL}/post/${id}`);
  const data = await res.json();
  return data;
};

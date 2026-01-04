const BASE_URL = 'https://dummyjson.com/';

export async function fetchPosts() {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  const data = await res.json();
  return data;
}

export async function fetchPostById(id) {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  if (!res.ok) throw new Error('Failed to fetch post with id');
  const data = await res.json();
  return data;
}

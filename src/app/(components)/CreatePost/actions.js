export async function createPost(formData, token) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/post/create`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

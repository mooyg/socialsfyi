import { SERVER_URL } from "$lib/constants.js";

export const actions = {
  login: async ({ request }) => {
    const formData = await request.formData();

    const username = formData.get("username");
    const password = formData.get("password");

    const res = await fetch(`${SERVER_URL}/api/auth/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
  },
  register: async ({ request }) => {
    const formData = await request.formData();

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch(`${SERVER_URL}/api/auth/register`, {
      method: "POST",
      body: JSON.stringify({ username, password, email }),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
  },
};

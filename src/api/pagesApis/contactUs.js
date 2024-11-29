import { axiosT } from "../axios";

function getCsrfToken() {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [key, value] = cookie.trim().split("=");
    if (key === "csrftoken") {
      return value;
    }
  }
  return null; // Return null if the token is not found
}
export const postServiceMessage = async (payload) => {
  const csrfToken = getCsrfToken();

  if (!csrfToken) {
    console.error("CSRF token not found");
    return;
  }
  const { data } = await axiosT.post("/service/message", payload, {
    headers: {
      "X-CSRF-Token": csrfToken,
    },
  });
  return data;
};

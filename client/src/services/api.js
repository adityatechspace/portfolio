import axios from "axios";

const API =
  axios.create({
    baseURL:
      "https://portfolio-zz8d.onrender.com/api",
  });

export const askAssistant =
  async (message) => {
    const response =
      await API.post(
        "/chat",
        { message }
      );

    return response.data;
  };
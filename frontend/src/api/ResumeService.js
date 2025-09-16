import axios from "axios";

//export const baseURLL = "https://ai-resume-maker-2gwm.onrender.com";
export const baseURLL = "http://localhost:8080";

export const axiosInstance = axios.create({
  baseURL: baseURLL,
});

export const generateResume = async (description) => {
  const response = await axiosInstance.post("/api/v1/resume/generate", {
    userDescription: description,
  });

  return response.data;
};

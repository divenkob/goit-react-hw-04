import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com";
export default async function fetchImages(query, currentPage) {
  const result = await axios.get(`/search/photos`, {
    params: {
      query: query,
      page: currentPage,
      per_page: 10,
      client_id: 'sm_AvHrEI6OsqwsJK9Q1Fgd0BnsXPqGshDVLGZQSoRg',
      orientation: "landscape",
    },
  });
  return result.data;
}
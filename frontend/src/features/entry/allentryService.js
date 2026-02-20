import axios from "axios";

const API_BASE = (process.env.REACT_APP_API_URL || "").replace(/\/$/, "");
const API_URL = `${API_BASE}/api/allentries`;

// Get  all  entry
const getAllEntries = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
// Get  all  entry
const searchEntry = async (text) => {
  const response = await axios.get(API_URL + "/search/" + text);
  return response.data;
};
const allentryService = {
  getAllEntries,
  searchEntry,
};

export default allentryService;

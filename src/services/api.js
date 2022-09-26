import axios from "axios";
const api = async (row) => {
  const data = row.name + row.sender_name + row.SIC;
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };

  // console.log('data:::::', data);

  const response = await axios.post(
    "https://l6ue901rsk.execute-api.eu-west-1.amazonaws.com/real-time",
    {
      inputs: data,
      parameters: { return_all_scores: true },
    },
    headers
  );

  return response;
};

export default api;

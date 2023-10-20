import axios from "axios";
const url ="https://api.unsplash.com/photos?client_id=SYTwPYm7xgaGbi2t5uvQoA8uZudNu2MtBjdSUYc0nt8";
export const getPosts = async () => {
  const resp = await axios.get(url);
  return resp.data;
};

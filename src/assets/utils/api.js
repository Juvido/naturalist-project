import axios from "axios";

const api = axios.create({baseURL:"https://naturalist.onrender.com/api"});

api.interceptors.request.use((config) => {
  config.headers = {
    Authorization:
      "Bearer f59391845314afc3a9919ebe90f45ff40eaa2f49b725ee9006a0c546d6158de24960963a70ddb52735d9eb86088ca8f4c11459bd3bdea54c67129931a58599df2a2fd2b3604208dd3e7025201b1462915342e33ff93b715eedde803cd984d0a17c65370a7cee78ac82ef83a6e85a691ad69f6c558c464bc12dc5a88218268fae",
  };
  return config
});

export { api };

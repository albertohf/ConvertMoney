const axios = require("axios");

const url = "https://api.hgbrasil.com/finance";

axios.get(url).then((res) => console.log(res));

const axios = require('axios');

const url = 'https://api.hgbrasil.com/finance';

const getCotacaoAPI = (data) => axios.get(url)
const extractCotacao = res => res.data.results.currencies.USD.buy
const getCotacao = async()=>{
  const res = await getCotacaoAPI()
  const cotacao = extractCotacao(res)
  return cotacao
}

module.exports = {
  getCotacao,
  extractCotacao,
  getCotacaoAPI
}



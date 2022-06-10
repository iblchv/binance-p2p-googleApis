require('dotenv').config();
const Binance = require('../api/binanceApi');
const axios = require('axios');

const api = new Binance();

class BinanceController {
  
  async getAllData(req, res) {
    try {
      res.status(200).json(await api.getAllData());
    } catch (error) {
      console.log({ success: false, error });
    }
  }
  
  async getAllTickersData(req, res) {
    try {
      const { data } = await axios.get('https://api1.binance.com/api/v3/ticker/price');
      const values = data.map((ticker) => [
        ticker.symbol,
        ticker.price.replace('.', ','),
      ]);
      res.status(200).json(values);
    } catch (error) {
      console.log({ success: false, error });
    }
  }
  
}

module.exports = new BinanceController();

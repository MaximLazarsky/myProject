import axios from "axios";

export default function ConvertingMoney() {

  
	const fetchGetExchangeRates = async () => {
		const response = await axios.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
	  console.log("response.data", response.data)
		return response.data
	
	  };
	  const exchangeData = fetchGetExchangeRates()
	  console.log("ExchangeData", exchangeData)
	return (
		<div>
			money
		</div>
	)
	
}



// https://api.privatbank.ua/p24api/exchange_rates?json&date=01.12.2014
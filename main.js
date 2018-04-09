const RainfallDatabase = {
	"1948" : [3.4, 3.8, 4.0, 3.9, 3.5, 3.6, 3.6],
	"1949" : [4.3, 4.7, 5.0, 5.3, 6.1, 6.2, 6.7],
	"1950" : [6.5, 6.4, 6.3, 5.8, 5.5, 5.4, 5.0],
	"1951" : [3.7, 3.4, 3.4, 3.1, 3.0, 3.2, 3.1],
	"1952" : [5.8, 6.4, 6.7, 7.4, 7.4, 7.3, 7.5]
}

const totalRainfall = RainfallDatabase["1951"].reduce(
	function (first,second){
		return first + second
	}
)

const monthsGreaterThanSix = RainfallDatabase["1949"].filter(
	rainfall => {
		if(rainfall >= 6.0){
			return true
		}
	}
)

/* 	//my solution before filter introduced
	//maintains initial position in array

const months = function sixPlus(){
	let arr
	for(let i = 0; i < RainfallDatabase["1949"].length; i +=1){
		if(RainfallDatabase["1949"][i] < 6){
			arr[i] = false	
		}else{
			arr[i] = true
		}
	}
	return arr
}
*/

// localStorage.setItem("rainfall", JSON.stringify(RainfallDatabase))

const average = RainfallDatabase["1950"].reduce(
	(total, thisMonth) => total += thisMonth
) / (RainfallDatabase["1950"].length)



console.log(totalRainfall)
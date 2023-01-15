const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': secret_Key,
		'X-RapidAPI-Host': secret_Host
	}
};


const getData = async(endPoint)=>{
    try {
        const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/${endPoint}` , options);
        console.log(response);
        const data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.log(error , error.message);
    }
   
}
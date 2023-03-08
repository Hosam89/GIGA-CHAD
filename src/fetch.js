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
       
        const data = await response.json();
     
        return data
    } catch (error) {
        console.log(error , error.message);
    }
   
}
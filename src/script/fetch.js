const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ac0dbb8156msh9a497bbaae70c47p104afajsnc99d338c5a28',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
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
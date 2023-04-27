import {useEffect} from "react";

function fetch() {

useEffect(() => {
	fetch('https://home.openweathermap.org/api_keys')
	.then(response => response.json())
	.then(json => console.log(json))
	}, []);

return (
	<div>
		Different ways to fetch Data
	</div>
);
}

export default fetch;

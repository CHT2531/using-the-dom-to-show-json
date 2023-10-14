function loadData(url,callback)
{
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(json) {
		callback(json)
	});
} //end of loadData

function showVehicles(data){
    console.log(data)
    const vehicles = data.results
	
	vehicles.forEach(function(vehicle){
		console.log(vehicle.name);
	})
    //Q2.
    const vehicleDiv = document.querySelector("#vehicles"); //get hold of the <div>
    vehicles.forEach(function(vehicle){
        vehicleDiv.innerHTML += `<p>`;
        vehicleDiv.innerHTML += `${vehicle.name}`;
        vehicleDiv.innerHTML += `</p>`;
    })
}

function showSingleVehicle(data){
    console.log(data);
    const props = data.result.properties;
    console.log(`The ${props.model} (${props.name})`);
    //Q5.
    const singleVehicleDiv = document.querySelector("#singleVehicle");
    singleVehicleDiv.classList.add("show"); 
    singleVehicleDiv.classList.remove("hide"); 

    //Q6.
    const nameLi = document.querySelector("#name");
    nameLi.innerHTML = `Name: ${props.name}`;
    const modelLi = document.querySelector("#model");
    modelLi.innerHTML = `Model: ${props.model}`;
    const passengerLi = document.querySelector("#passengers");
    passengerLi.innerHTML = `Passengers: ${props.passengers}`;

    //Q7.
    const manufacturerLi = document.querySelector("#manufacturer");
    manufacturerLi.innerHTML = `Manufacurer: ${props.manufacturer}`;
    
}

//Q3.
const showVehBtn = document.querySelector("#showVehBtn");
showVehBtn.addEventListener('click',function(){
    loadData("https://www.swapi.tech/api/vehicles",showVehicles);
})

//Q4.
const showSingleVehBtn = document.querySelector("#showSingleVehBtn");
showSingleVehBtn.addEventListener('click',function(){
    loadData("https://www.swapi.tech/api/vehicles/18",showSingleVehicle);
})

/*
1. Open the console.log. Make sure you can see the output from the function showVehicles() (it should show a list of Star Wars vehicles). Have a look at the code, see if you can follow the order of execution and how the fetch API is being used.

2. Modify the code in showVehicles() so that the list of vehicles is displayed in the <div id="vehicles"></div> element in the HTML page. Have a look at https://github.com/CHT2531/js-dom-recap/blob/master/notes.md#inserting-multiple-elements for some advice. 

3. Modify the code so that the list of vehicles is only loaded if the user clicks the button 'Show vehicles'. You will need to add a click event to the button. See https://github.com/CHT2531/js-dom-recap/blob/master/notes.md#events for a similar example. 

4. Add a click event listener to the 'Show details for a single vehicle' button. When this button is clicked loadData() should be called, but this time a URL of "https://www.swapi.tech/api/vehicles/18" should be used, and the function showSingleVehicle should be passed as the callback. If you have done this correctly, the text 'The All Terrain Armored Transport (AT-AT)' should appear in the console.log.  

5. In the HTML page, the singleVehicle <div> element is hidden when the page loads (have a look at the CSS in index.html). Add some code into the showSingleVehicle() that will display this div. Have a look at https://github.com/CHT2531/js-dom-recap/blob/master/notes.md#changing-the-css-of-an-element for some advice. If you have done this correctly, and empty bullet pointed list should appear.

6. Add some code in showSingleVehicle() that will display the name, model and number of passengers of the AT-AT vehicle in the list. 

7. Can you add an additional <li> element to the list in the HTML page and add some JavaScript to display the manufacturer of the AT-AT vehicle in this <li>. 
*/


function searchClear ()
{
    document.getElementById('searchField').value="";
}

function BookNow ()
{
    
}

function displaySearch(){
    const city = document.getElementById('searchField').value;
    let countriesArray;
    let TemplesArray;
    let beachesArray;

const jsonUrl ='./travel_recommendation_api.json';
    fetch(jsonUrl)
    .then (response=> response.json())
 .then(data => {
console.log(typeof data);
const jsonData= JSON.stringify(data);
console.log(typeof jsonData);
console.log(jsonData);

const jsonDataName= JSON.stringify(data,['beaches']);
console.log(typeof jsonDataName);
console.log(JSON.stringify(jsonDataName),['name']);


        
         }
 
   )
    
 }

document.getElementById("btnClear").addEventListener("click",searchClear);
// document.getElementById("btnBook").addEventListener("click",BookNow);
document.getElementById("btnSearch").addEventListener("click",displaySearch);
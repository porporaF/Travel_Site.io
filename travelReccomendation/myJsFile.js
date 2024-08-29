

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

 console.log(Object.keys (data));

 console.log('Lunghezza Arrey: ',Object.keys(data).length);

 console.log(data['countries']);
 
 console.log(data['countries'][0].name);
         }
 
   )
    
 }

document.getElementById("btnClear").addEventListener("click",searchClear);
// document.getElementById("btnBook").addEventListener("click",BookNow);
document.getElementById("btnSearch").addEventListener("click",displaySearch);
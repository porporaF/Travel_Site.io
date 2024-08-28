

function searchClear ()
{
    document.getElementById('searchField').value="";
}

function BookNow ()
{
    
}

function displaySearch(){
    const city = document.getElementById('searchField').value;
const jsonUrl ='./travel_recommendation_api.json';
    fetch(jsonUrl)
    .then (response=>{
        return response.json();    
    })
    .then (data =>{
        console.log('Data from API: ',data);
    })
    .catch (error =>{
        console.error(('An error occured:',error))
    });
}

document.getElementById("btnClear").addEventListener("click",searchClear);
// document.getElementById("btnBook").addEventListener("click",BookNow);
document.getElementById("btnSearch").addEventListener("click",displaySearch);
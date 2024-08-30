

function searchClear ()
{
    document.getElementById('searchField').value="";
}

function BookNow ()
{
    
}

function displaySearch(){
    const city = document.getElementById('searchField').value;
   console.log('city:',city);

const jsonUrl ='./travel_recommendation_api.json';
    fetch(jsonUrl)
    .then (response=> response.json())
    .then(data => {
        console.log()
        for (let i=0;i<Object.keys(data['countries']).length;i++)
        {
            console.log(data['countries'][i].name);
        if (data['countries'][i].name.includes(city)){
        console.log('ok');
        }

                    }
                }
       
         )

                        }
    

document.getElementById("btnClear").addEventListener("click",searchClear);
// document.getElementById("btnBook").addEventListener("click",BookNow);
document.getElementById("btnSearch").addEventListener("click",displaySearch);
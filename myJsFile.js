

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

        if (data['countries'][i].name.includes(city)){

         for (let j=0;j<Object.keys(data['countries'][i].cities).length;j++) {  
            var divElement =document.getElementById('searchList');
            var ulElement=document.createElement('ul');
            var liElement=document.createElement('li');
            var TextElement=document.createElement(data['countries'][i].name);
            var imgElement=document.createElement('img');

            console.log(data['countries'][i].cities[i].imageUrl);
         }
            //liElement.appendChild
            //let img = document.createElement('img');
            //img.src =data['countries'][i].imgUrl;
        }
        }

                    })
                           }
    

document.getElementById("btnClear").addEventListener("click",searchClear);
// document.getElementById("btnBook").addEventListener("click",BookNow);
document.getElementById("btnSearch").addEventListener("click",displaySearch);


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

       

        for (let i=0;i<Object.keys(data['beaches']).length;i++)
        {
           
        if (data['beaches'][i].name.includes(city)){

         for (let j=0;j<Object.keys(data['beaches']).length;j++) {  
            
           var ScityName=data['beaches'][j].name;
           var imgUrl=data['beaches'][j].imageUrl;
           console.log('Prima della funzione',imgUrl);
           console.log('Prima della funzione CityName:',ScityName);
           
           fillDiv(ScityName,imgUrl);
                                                                            }
           
                                                    }
        }    
              })
                           }

function fillDiv (cityName,url){
            var divElement =document.getElementById('searchList');
            var ulElement=document.createElement("ul");
            var liElement=document.createElement("li");
            var TextElement=document.createTextNode(cityName);
            console.log('Dopo la funzione',cityName);
            var imgElement=document.createElement("img");
            imgElement.src=url;
            var breakElement = document.createElement("br");
            var btnView =document.createElement("button");
            btnView.textContent="View";
            btnView.type="button";
          
            liElement.appendChild(TextElement);
            liElement.appendChild(breakElement);
            liElement.appendChild(imgElement);
            liElement.appendChild(breakElement);
             ulElement.appendChild(liElement);
             liElement.appendChild(breakElement);
            liElement.appendChild(btnView);
            liElement.appendChild(breakElement);
            ulElement.appendChild(liElement)
            divElement.appendChild(ulElement);
            }


    

document.getElementById("btnClear").addEventListener("click",searchClear);
// document.getElementById("btnBook").addEventListener("click",BookNow);
document.getElementById("btnSearch").addEventListener("click",displaySearch);

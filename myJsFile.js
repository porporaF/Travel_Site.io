

function searchClear ()
{
    document.getElementById('searchField').value="";
   
}

function BookNow ()
{
    
}

function displaySearch(){
    const searchTextValue = document.getElementById('searchField').value;
   console.log (typeof(searchTextValue));
   const searchValue =searchTextValue.toLowerCase();
    const jsonUrl ='./travel_recommendation_api.json';
    fetch(jsonUrl)
    .then (response=> response.json())
    .then(data => {
        var divElement =document.getElementById('searchList');
           divElement.innerHTML='';
               for (let i=0;i<Object.keys(data[searchValue]).length;i++)
        {
           
           var ScityName=data[searchValue][i].name;
           var imgUrl=data[searchValue][i].imageUrl;
           var description=data[searchValue][i].description;
           console.log('Prima della funzione',imgUrl);
           console.log('Prima della funzione CityName:',ScityName);
           
           fillDiv(ScityName,imgUrl,description);
        }
           
                 })
        
                                      
                        }

function fillDiv (cityName,url,description){
            var divElement =document.getElementById('searchList');
        
            var ulElement=document.createElement("ul");
            var liElement=document.createElement("li");
            var TextElement=document.createTextNode(cityName);
            var description=document.createTextNode(description);
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
            liElement.appendChild(description);
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

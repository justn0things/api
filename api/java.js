window.onload = async () => {
    let res = await fetch("https://ok.surf/api/v1/cors/news-feed")
    res = await res.json();

    let div = document.querySelector("div")
    res.Business.forEach(item => {
        div.innerHTML +=`
        <div class="card1">
        <div class="card">
        <img src="${item.og}" class="cardImage">
      
        </div>
    
          <div class="card-body">
    
            <h5>${item.title}</h5>
            <p>${item.source}</p>
        
          
            
          </div>
          </div>
      
      `})
    console.log(res);
}

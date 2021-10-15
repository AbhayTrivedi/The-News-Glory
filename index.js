
console.log("news website");

// Innitiaizing the news parameters
let country = "in";
let category = "general";

let links = document.getElementsByClassName("nav-link");
for (let i = 0; i < links.length; i++) {
   links[i].addEventListener("click", function () {
      category = links[i].innerText.toLowerCase();
      console.log(category);

      if (category == "home") category = "general";

      links[i].classList.add("active");
      removeActive(i);

      let url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`;
      getNews(url);

   });
}

function removeActive(index){
   for (let i = 0; i < links.length; i++) {
      if(i != index){
         links[i].classList.remove("active");
      }
   }
}


console.log(category);

let url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`;

let newsArea = document.getElementById("newsArea");
getNews(url);

function getNews(url) {
   fetch(url).then(res => res.json()).then(data => {
      showNews(data.articles);
   });
}

function showNews(articles) {
   console.log(articles);

   let html = "";

   articles.forEach(function (element) {
      let news = `<div class="card mx-2 my-2" style="width: 18rem;">
               <img src="${element.urlToImage}" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <p class="card-text">${element.description}</p>
                  <a href="${element.url}" class="btn btn-primary" target="_blank">Read more here</a>
               </div>
            </div>`;
      html += news;
   });

   newsArea.innerHTML = html;
};






const ByCard = document.getElementById("card");
const addBtn = document.getElementById("addBtn");
const nameInp = document.getElementById("name");
addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let nameValue = nameInp.value
  let user = {
    Title: nameInp.value,
  };
  
  
})

axios.get(API_URL).then((res) => {
  console.log(res);

  let innerHTML = "";

  for (let i = 0; i < res.data.length; i++) {
    const {
      Poster,
      Title,
      Year,
      Rated,
      Ratings,
      imdbRating,
      Production,
      Plot,
      Cast,
    } = res.data[i];
    innerHTML += ` <div class="common">
        
        <div>
        <div class="card_img">
          <img src="${Poster}" alt="" />
        </div>
  </div>
  
  <div>
        <div class="card_data">
          <h3>${Title}</h3>
          <i class="fa-solid fa-star" style="color: #ffe224">${imdbRating}</i>
        </div>
  
        <div class="span">
        <span>${Rated}-</span> <span>${Year}-</span> <span>${Production}</span>
      </div>
  
        <div class="card_button">
          <div><button>Comediy</button></div>
          <div><button>Crime</button></div>
          <div><button>Fantasy</button></div>
      </div>
  </div>
  </div>
  <div class="end">
          <h3>Plot:</h3>
          <p>${Plot}</p>
      </div>
  
      <div class="end2">
          <h3>Cast</h3>
          <p>${Cast}</p>
      </div>
      </div> 

   
`
  }
  ByCard.innerHTML = innerHTML;
  console.log()
});



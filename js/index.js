/* 
let result;
let result2;
let games="";
let game="";
let prevGenre;
const gameList= document.getElementById("gameList");
const gameDetails= document.getElementById("gameDetails");
const header= document.getElementById("header");
const list= document.getElementById("list");
const nav= document.getElementById("nav");
const load= document.getElementById("load");




async function getGames(genre){
  
  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category='+genre;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '2fa9290d04mshbcc0beba2ca168cp1dc36djsn8d6f3c460a7f',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
  
};



try {
	let response = await fetch(url, options);
  result= await response.json();
  console.log(result)
} catch (error) {
	console.error(error);
}
}

async function showGames(genre){
  
games="";
  gameDetails.classList.add("d-none");
  header.classList.add("d-none");
  nav.classList.add("d-none");
  list.classList.add("d-none");
  load.classList.remove("d-none");
await getGames(genre);

  
  for (var i = 0; i < result.length ; i++) {
    
      games += `
      <div class=" col-10 offset-1  offset-md-0 col-md-6 col-xl-4 col-xxl-3 ">
        <div onclick="showDetails(${result[i].id})" class="card card1 " >
            <div class="cover ">
            <img src="${result[i].thumbnail}" class="card-img-top mt-3 " alt="...">
            <div class="img-cover mt-3"></div>
        </div>
            <div class="card-body">
                <div class="d-flex justify-content-between text-white ">
              <h5 class="card-title name">${result[i].title}</h5>
              <h5 class="card-title price rounded-1 px-2 py-1">Free</h5>
            </div>
              <p class="card-text text-center text-secondary">${result[i].short_description.slice(0,80)}</p>
              
            </div>
            <div class="card-footer footer1 ">
                <div class="d-flex justify-content-between text-white ">
                    <h5 class="card-title bg-black rounded-1 px-2 py-1">${result[i].genre}</h5>
                    <h5 class="card-title  bg-black rounded-1 px-2 py-1">${result[i].platform}</h5>
                  </div>
              </div>
          </div>
        </div>

      ` 
    
  }
gameList.innerHTML=games;
header.classList.remove("d-none");
  nav.classList.remove("d-none");
  list.classList.remove("d-none");
  load.classList.add("d-none");



}
async function getDetails(i){
  console.log(i)
  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id='+i;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '2fa9290d04mshbcc0beba2ca168cp1dc36djsn8d6f3c460a7f',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	result2 = await response.json();
	console.log(result2);
} catch (error) {
	console.error(error);
}

}
async function showDetails(i){
  gameDetails.classList.add("d-none");
  header.classList.add("d-none");
  nav.classList.add("d-none");
  list.classList.add("d-none");
  load.classList.remove("d-none");
  await getDetails(i);
  game=`
  <div class="d-flex justify-content-between">
            <h2 class="mb-4">Game Details </h2>
            <span  ><i onclick="closeDetails()" class="fa-solid fa-x fs-5"></i></span>
        </div>
        <div class="d-flex flex-column flex-md-row  justify-content-between">
            <div><img src="${result2.thumbnail}" style="" alt="game image"></div>
            <div class="ms-4 pe-5">
                <h3 class="mt-3 mt-md-0">Title: <span class="mt-3 mt-md-0">${result2.title}</span></h3>
                <div class="mb-2 " >
                    <span class="disc">Category:</span>
                    <span class="rounded-2 bg-info px-2 py-1 text-black">${result2.genre}</span>
                </div>
                <div class="mb-2">
                    <span class="disc">Platform:</span>
                    <span class="rounded-2 bg-info px-2 py-1 text-black">${result2.platform}</span>
                </div>
                <div class="mb-2 ">
                    <span class="disc">Status: </span>
                    <span class="rounded-2 bg-info px-2 py-1 text-black">${result2.status}</span>
                </div>
                <p>
                    ${result2.description}</p>
                
            <a class="btn border border-warning fs-5 text-white" target="_blank" href="${result2.game_url}" role="button">Show Game</a>
                </div>
        </div>
  `;

  

  gameDetails.innerHTML=game;

  gameDetails.classList.remove("d-none");
  header.classList.add("d-none");
  nav.classList.add("d-none");
  list.classList.add("d-none");
  load.classList.add("d-none")
  scroll(0,0);

}
function closeDetails(){
  gameDetails.classList.add("d-none");
  header.classList.remove("d-none");
  nav.classList.remove("d-none");
  list.classList.remove("d-none");
  load.classList.add("d-none")
  console.log("yo")
}



showGames("mmorpg");


 */

class GameAPI {
  constructor(apiKey, apiHost) {
    this.apiKey = apiKey;
    this.apiHost = apiHost;
  }

  async fetchByGenre(genre) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${genre}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': this.apiKey,
        'x-rapidapi-host': this.apiHost,
      },
    };

    try {
      const response = await fetch(url, options);
      return await response.json();
    } catch (error) {
      console.error("Error");
      return [];
    }
  }

  async fetchDetails(gameId) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': this.apiKey,
        'x-rapidapi-host': this.apiHost,
      },
    };

    try {
      const response = await fetch(url, options);
      return await response.json();
    } catch (error) {
      console.error("Error");
      return null;
    }
  }
}

class UI {
  constructor(gameAPI) {
    this.gameAPI = gameAPI;
    this.gameList = document.getElementById("gameList");
    this.gameDetails = document.getElementById("gameDetails");
    this.header = document.getElementById("header");
    this.nav = document.getElementById("nav");
    this.list = document.getElementById("list");
    this.load = document.getElementById("load");
  }

  async showGames(genre) {
    this.loading();
    const games = await this.gameAPI.fetchByGenre(genre);

    this.gameList.innerHTML = games.map(game => `
      <div class="col-10 offset-1 offset-md-0 col-md-6 col-xl-4 col-xxl-3">
        <div onclick="ui.showDetails(${game.id})" class="card card1">
          <div class="cover">
            <img src="${game.thumbnail}" class="card-img-top mt-3" alt="Game Thumbnail">
            <div class="img-cover mt-3"></div>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between text-white">
              <h5 class="card-title name">${game.title}</h5>
              <h5 class="card-title price rounded-1 px-2 py-1">Free</h5>
            </div>
            <p class="card-text text-center text-secondary">${game.short_description.slice(0, 80)}</p>
          </div>
          <div class="card-footer footer1">
            <div class="d-flex justify-content-between text-white">
              <h5 class="card-title bg-black rounded-1 px-2 py-1">${game.genre}</h5>
              <h5 class="card-title bg-black rounded-1 px-2 py-1">${game.platform}</h5>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    
    this.showMainUI();
  }

  async showDetails(gameId) {
    this.loading();
    const game = await this.gameAPI.fetchDetails(gameId);

    if (game) {
      this.gameDetails.innerHTML = `
        <div class="d-flex justify-content-between">
          <h2 class="mb-4">Game Details</h2>
          <span><i onclick="ui.closeDetails()" class="fa-solid fa-x fs-5"></i></span>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between">
          <div><img src="${game.thumbnail}" alt="Game Thumbnail"></div>
          <div class="ms-4 pe-5">
            <h3>Title: <span>${game.title}</span></h3>
            <div class="mb-2">
              <span class="disc">Category:</span>
              <span class="rounded-2 bg-info px-2 py-1 text-black">${game.genre}</span>
            </div>
            <div class="mb-2">
              <span class="disc">Platform:</span>
              <span class="rounded-2 bg-info px-2 py-1 text-black">${game.platform}</span>
            </div>
            <div class="mb-2">
              <span class="disc">Status:</span>
              <span class="rounded-2 bg-info px-2 py-1 text-black">${game.status}</span>
            </div>
            <p>${game.description}</p>
            <a class="btn border border-warning fs-5 text-white" target="_blank" href="${game.game_url}" role="button">Show Game</a>
          </div>
        </div>
      `;
      this.showDetailsUI();
    } else {
      console.error("Failed to fetch game details.");
    }

    
  }

  closeDetails() {
    this.showMainUI();
  }

  loading() {
    this.load.classList.toggle("d-none");
    this.header.classList.toggle("d-none");
    this.nav.classList.toggle("d-none");
    this.list.classList.toggle("d-none");
  }

  showMainUI() {
    this.gameDetails.classList.add("d-none");
    this.header.classList.remove("d-none");
    this.nav.classList.remove("d-none");
    this.list.classList.remove("d-none");
    this.load.classList.add("d-none");
  }

  showDetailsUI() {
    this.gameDetails.classList.remove("d-none");
    this.header.classList.add("d-none");
    this.nav.classList.add("d-none");
    this.list.classList.add("d-none");
    this.load.classList.add("d-none");
  }
}


const gameAPI = new GameAPI(
  '2fa9290d04mshbcc0beba2ca168cp1dc36djsn8d6f3c460a7f',
  'free-to-play-games-database.p.rapidapi.com'
);
const ui = new UI(gameAPI);


ui.showGames("mmorpg");

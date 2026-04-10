// Elements
const wallpaper = document.querySelector("#wallpaper");
const randomBtn = document.querySelector("#btn-random");

// Wallpaper upload
const wallpaperInput = document.querySelector("#file-input-wallpaper");
const wallpaperBtn = document.querySelector("#upload-btn-wallpaper");

// Profile upload
const profileInput = document.querySelector("#file-input-profile");
const profileBtn = document.querySelector("#upload-btn-profile");


// Wallpapers list
const wallpapers = [
    "img/three.png",
    "img/img3.wallspic.com-tanjiro_kamado-demon_slayer_kimetsu_no_yaiba-zenitsu_agatsuma-anime-train-2732x1536.png",
    "img/inosuke-moon-silhouette-83bkvv5cgvw4cvoa.jpg",
    "img/one punch.png"
];

// Random wallpaper
randomBtn.addEventListener("click", () => {
    const index = Math.floor(Math.random() * wallpapers.length);
    wallpaper.src = wallpapers[index];
});

// Wallpaper upload
wallpaperBtn.addEventListener("click", () => {
    wallpaperInput.click();
});

wallpaperInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
        wallpaper.src = URL.createObjectURL(file);
        wallpaperBtn.textContent = file.name;
    }
});

// Profile upload
profileBtn.addEventListener("click", () => {
    profileInput.click();
});

profileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
        profileBtn.textContent = file.name;
    }
});

//Form 
const form = document.querySelector("#details-form form");
const cardContainer = document.querySelector("#card-container");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = document.querySelector("#form-name").value;
    const email = document.querySelector("#form-email").value;
    const mobile = document.querySelector("#form-mobile").value;
    const role = document.querySelector("#form-role").value;
    const info = document.querySelector("#form-info").value;

    //geting image
    const fileInput = document.querySelector("#file-input-profile");
    const file = fileInput.files[0];

    let imageURL ="";
    if(file){
        imageURL = URL.createObjectURL(file);
    }

    // Create a card 
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML =`
    <img src ="${imageURL}" alt="profile">
    <h3>${name}</h3>
    <h5>${role}</h5>
    <p>${info}</p>
    `;

    cardContainer.appendChild(card);

    form.reset();
});









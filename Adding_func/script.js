// TAB SWITCH
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
        tabs.forEach(t=>t.classList.remove("active"));
        contents.forEach(c=>c.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(tab.dataset.tab).classList.add("active");
    });
});

// WALLPAPER
const wallpapers = ["img/three.png","img/one punch.png"];
document.querySelector("#btn-random").onclick = ()=>{
    const i = Math.floor(Math.random()*wallpapers.length);
    document.querySelector("#wallpaper-img").src = wallpapers[i];
};

// PROFILE UPLOAD
const fileInput = document.querySelector("#file-input-profile");
const uploadBtn = document.querySelector("#upload-btn-profile");

uploadBtn.onclick = ()=> fileInput.click();

fileInput.addEventListener("change",(e)=>{
    const file = e.target.files[0];
    if(file){
        uploadBtn.textContent = file.name;
    }
});

// FORM SUBMIT
const form = document.querySelector("#profile-form");
const container = document.querySelector("#card-container");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const name = document.querySelector("#form-name").value;
    const role = document.querySelector("#form-role").value;
    const info = document.querySelector("#form-info").value;

    let img = "https://via.placeholder.com/70";
    if(fileInput.files[0]){
        img = URL.createObjectURL(fileInput.files[0]);
    }

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${img}">
        <h4>${name}</h4>
        <p>${role}</p>
        <p>${info}</p>
    `;

    container.appendChild(card);
    form.reset();
    uploadBtn.textContent = "Upload Profile";
});

// CHAR COUNT
const textarea = document.querySelector("#form-info");
const count = document.querySelector("#char-count span");

textarea.addEventListener("input",()=>{
    let left = 100 - textarea.value.length;
    count.textContent = left;

    count.style.color = left < 0 ? "red" : "white";
});







const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/sad-pikachu.gif")
            pokeEspe.innerHTML = 'Pókemon not found';
            pokeType.innerHTML = '';
            pokeImageS("");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            let pokeImgS = data.sprites.front_shiny;
            pokeImageS(pokeImgS);
            console.log(pokeImg);
            let pokeEspe = data.species.name;
            pokeEspecies(pokeEspe);
            console.log(pokeEspe);
            let pokeType = data.types;
            pokeTy(pokeType);
            //console.log(pokeType);
            let pokeStats = data.stats;
            pokeSt(pokeStats);
            let pokeAbili = data.abilities;
            pokeAbil(pokeAbili);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
};
const pokeImageS = (urlS) => {
    const pokePhotoS = document.getElementById("pokeImgS");
    pokePhotoS.src = urlS;
};
const pokeEspecies = (especies) => {
    const pokeEs = document.getElementById("pokeEspe");
    console.log(especies);
    pokeEs.innerHTML = especies;
};
const pokeTy = (typess) => {
    const pokeT = document.getElementById("pokeType");
    const pokeTp = typess.map((item) => item.type.name);
    pokeT.innerHTML = "Type(s): " + pokeTp;
    //console.log(pokeTp);
};
const pokeSt = (stats) => {
    const pokeStatsFull = document.getElementById("pokeStats");
    const pokeStatsFull1 = document.getElementById("pokeStats1");
    const pokeStatsFull2 = document.getElementById("pokeStats2");
    const pokeStatsFull3 = document.getElementById("pokeStats3");
    const pokeStatsFull4 = document.getElementById("pokeStats4");
    const pokeStatsFull5 = document.getElementById("pokeStats5");
    const pokeStatsName = stats.map((item) => item.base_stat);
    pokeStatsFull.innerHTML = "Hp: " + pokeStatsName[0]; 
    pokeStatsFull1.innerHTML = "Attack: " + pokeStatsName[1];
    pokeStatsFull2.innerHTML = "Defense: " + pokeStatsName[2];
    pokeStatsFull3.innerHTML = "Special attack: " + pokeStatsName[3]; 
    //pokeStatsFull4.innerHTML = "Special defense: " + pokeStatsName[4];
    pokeStatsFull5.innerHTML = "Speed: " + pokeStatsName[5];    
};

const pokeAbil = (abilitiess) => {
    const pokeAbilitiesFull = document.getElementById("pokeAbilities");
    const pokeAbility = abilitiess.map((item) => item.ability.name);
    pokeAbilitiesFull.innerHTML = pokeAbility;
};


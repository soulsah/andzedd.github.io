let theme = localStorage.getItem("theme");

if(theme == null){
    setTheme('light');
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for(var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode){
    if(mode == "light"){
        document.getElementById('theme-style').href = 'css/default.css';
    }

    if(mode == "nord"){
        document.getElementById('theme-style').href = 'css/nord.css';
    }

    localStorage.setItem('theme', mode);
}
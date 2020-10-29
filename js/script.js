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

let interval;

const shuffle = document.querySelectorAll(".shuffle");

const randomInt = max => Math.floor(Math.random() * max)
const randomFromArray = array => array[randomInt(array.length)]

const scrambleText = text => {
  const chars = '*?><[]&@#)(.%$-_:/;?!'.split('')
  return text
    .split('')
    .map(x => randomInt(3) > 1 ? randomFromArray(chars) : x)
    .join('')
}

shuffle.forEach(element => {
    const originalText = element.innerText;
    element.addEventListener('mouseover', () => {
        interval = setInterval(() =>
        element.innerText = scrambleText(originalText)
        , 100)
      })

    element.addEventListener('mouseout', () => {
        clearInterval(interval)
        element.innerText = originalText
    })
});

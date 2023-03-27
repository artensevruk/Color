
const cols =document.querySelectorAll('.colonka')
const Button =document.querySelector('.container_button')
Button.addEventListener('click' , Button_click);
function Button_click(){
    setRandomColons()
}
document.addEventListener('keydown' , (event) => {
    console.log(event.code)
    if(event.code.toLowerCase() ==   'space'){
        setRandomColons()
    }
})

function generatColor(){
   const hexcods ='134223dfwf';
   let color = '';
   for( let i=0; i < 6 ;i++){
   
 color += hexcods[Math.floor(Math.random() * hexcods.length)]
   }
   return "#" + color;
}

function setRandomColons(){
cols.forEach((colonka) => {
    const text = colonka.querySelector('h1')
    const color = generatColor()
    text.textContent = color
   colonka.style.background = color;
})
}
setRandomColons();
const btn =  document.getElementById("btn")
const colortex = document.getElementById("color")
const wrap=  document.getElementById("wrap")
const hex =[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

function random(){  //random num eduka
    let randoms= Math.floor(Math.random()*16)
   return hex[randoms]
 }

btn.addEventListener('click', backgroundCHN)
function backgroundCHN(){ // colour ku 6 dig la num vanum so 6 varanum athuku for use panromhuku for u
    let colours ='#'
    for(let i=0;i<6;i++){
       colours = colours +  random()
        // colours += random() -- fun ethu mari kuda call panalam
    }
//    console.log(colours) //mela text vara
   wrap.style.backgroundColor=colours
   colortex.innerHTML=colours
}
 



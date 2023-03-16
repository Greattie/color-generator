let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let hex_color = document.getElementById('color')
let btn = document.getElementById('btn')


btn.addEventListener('click', function(){
    let color = '#'
    for(let i=0; i<6; i++){
        //console.log(hex[i])
        color+= hex[randomNum()]
        console.log(color)
    }
    hex_color.textContent = color
    document.body.style.backgroundColor = color
})

function randomNum(){
    return Math.floor(Math.random() * hex.length)
}
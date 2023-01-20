const btn = document.querySelector('.btn')
// btn.onclick = func1
// btn.onclick = func2
// function func1(){
//     console.log('funk1');
// } 
// function func2(){
//     console.log('funk2');
// } 
// btn.addEventListener('click', func1)
// btn.addEventListener('click', func2)

// var block = document.querySelector('.block') 
// block.addEventListener('click' , (i => {alert('hellov')}))                 нажать мышкой
// block.addEventListener('mouseover' , (i => {alert('hellov')}))             наводиться мышкой
// block.addEventListener('mouseout' , (i => {alert('hellov')}))              убрать мышку
// block.addEventListener('mousedown' , (i => {alert('hellov')}))             продвинутое нажатье мышки 1
// block.addEventListener('mouseup' , (i => {alert('hellov')}))               продвинутое нажатье мышки 2
// block.addEventListener('dblclick' , (i => {alert('hellov')}))                 нажать мышкой 2 раза
// const inp = document.querySelectorAll('.inp')
// inp[0].addEventListener('change' , ()=>(console.log(inp[0].value)))
// inp[1].addEventListener('input' , ()=>(console.log(inp[1].value)))








// const block = document.querySelector('.block')
// const inp = document.querySelectorAll('.inp')
// inp[0].addEventListener('input',()=>{
//     block.style.width = inp[0].value
// })
// inp[1].addEventListener('input',()=>{
//     block.style.height = inp[1].value
// })
// inp[2].addEventListener('input',()=>{
//     block.style.marginTop = inp[2].value
// })
// inp[3].addEventListener('input',()=>{
//     block.style.marginLeft = inp[3].value
// })
// inp[4].addEventListener('input',()=>{
//     block.style.backgroundColor = inp[4].value
// })
// inp[5].addEventListener('input',()=>{
//     block.style.borderRadius = inp[5].value
// })
// inp[6].addEventListener('input',()=>{
// block.style.background = `url(${inp[6].value})center/cover`
// })






// const but = document.querySelector('.but')
// const inp = document.querySelector('.inp')
// const img = document.querySelector('.img')
// but.addEventListener('click', ()=>{
//     img.src = inp.value
// } )









const inf = document.querySelector('.inf')
const b = document.querySelector('.b')

inf.addEventListener('input',()=>{
    if(inf.value.length >= 5){
      b.innerHTML = 'сохранить пароль'
      b.style.color = 'green' 
    }else {
        b.innerHTML ='не достаточно символов'
        b.style.color = 'red'
    }})










const inp = document.querySelector('.inp')
const block = document.querySelectorAll('.block')
const p = document.querySelector('.p')
console.log(block);
inp.addEventListener('input',()=>{
    if(inp.value == 1){
        block[10].style.backgroundColor = 'red'
        p.innerHTML = '10$'
        p.style.color = 'green' 
    }else {
        block[10].style.backgroundColor = 'white'
        p.innerHTML = ''
    }
    if(inp.value == 2){
        block[9].style.backgroundColor = 'red'
        p.innerHTML = '20$'
        p.style.color = 'green' 
    }else {
        block[9].style.backgroundColor = 'white'
    }
    if(inp.value == 3){
        block[8].style.backgroundColor = 'red'
        p.innerHTML = '30$'
        p.style.color = 'green' 
    }else {
        block[8].style.backgroundColor = 'white'
    }
    if(inp.value == 4){
        block[7].style.backgroundColor = 'red'
        p.innerHTML = '35$'
        p.style.color = 'green' 
    }else {
        block[7].style.backgroundColor = 'white'
    }
    if(inp.value == 5){
        block[6].style.backgroundColor = 'red'
        p.innerHTML = '35$'
        p.style.color = 'green' 
    }else {
        block[6].style.backgroundColor = 'white'
    }
    if(inp.value == 6){
        block[5].style.backgroundColor = 'red'
        p.innerHTML = '35$'
        p.style.color = 'green' 
    }else {
        block[5].style.backgroundColor = 'white'
    }
     if(inp.value == 7){
        block[4].style.backgroundColor = 'red'
        p.innerHTML = '35$'
        p.style.color = 'green' 
    }else {
        block[4].style.backgroundColor = 'white'
    }if(inp.value == 8){
        block[3].style.backgroundColor = 'red'
        p.innerHTML = '35$'
        p.style.color = 'green' 
    }else {
        block[3].style.backgroundColor = 'white'
    }
    if(inp.value == 9){
        block[2].style.backgroundColor = 'red'
        p.innerHTML = '35$'
        p.style.color = 'green' 
    }else {
        block[2].style.backgroundColor = 'white'
    }
    if(inp.value == 10){
        block[1].style.backgroundColor = 'red'
        p.innerHTML = '35$'
        p.style.color = 'green' 
    }else {
        block[1].style.backgroundColor = 'white'
    }
    if(inp.value == 11){
        block[0].style.backgroundColor = 'red'
        p.innerHTML = '40$'
        p.style.color = 'green' 
    }else {
        block[0].style.backgroundColor = 'white'
    }
    
})

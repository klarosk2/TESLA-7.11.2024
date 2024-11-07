let header = document.getElementById('header')
let mS = document.getElementById('modelS')
let m3 = document.getElementById('model3')
let mX = document.getElementById('modelX')
let mY = document.getElementById('modelY')
let model = document.getElementById('model')
let seg = document.getElementById('seg')
let mi = document.getElementById('mi')
let mph = document.getElementById('mph')
let uwu = document.getElementById('silly')

mS.onclick = function(){
    header.style.backgroundImage="url(./assets/image-1.png)"
    model.innerHTML = "model S"
    seg.innerHTML = "1.9 S"
    mi.innerHTML = "200 MP/h"
    mph.innerHTML = "296 MI"
}
m3.onclick = function(){
    header.style.backgroundImage="url(./assets/image-2.png)"
    model.innerHTML = "model 3"
    seg.innerHTML = "2.5 S"
    mi.innerHTML = "180 MP/h"
    mph.innerHTML = "326 MI"
}
mX.onclick = function(){
    header.style.backgroundImage="url(./assets/image-3.png)"
    model.innerHTML = "model X"
    seg.innerHTML = "1.9 S"
    mi.innerHTML = "220 MP/h"
    mph.innerHTML = "396 MI"
}
mY.onclick = function(){
    header.style.backgroundImage="url(./assets/image-4.png)"
    model.innerHTML = "model Y"
    seg.innerHTML = "1.9 S"
    mi.innerHTML = "240 MP/h"
    mph.innerHTML = "453 MI"
}
uwu.onclick = function(){
    header.style.backgroundImage="url(./assets/image-5.png)"
    model.innerHTML = "silly"
    seg.innerHTML = "silly"
    mi.innerHTML = "silly"
    mph.innerHTML = "silly"
}
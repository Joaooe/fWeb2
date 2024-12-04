
const item1 =document.querySelector("#objeto1")
const item2 =document.querySelector("#objeto2")
const item3 =document.querySelector("#objeto3")
const item4 =document.querySelector("#objeto4")
const item5 =document.querySelector("#objeto5")

fetch("./index.json")
.then(response=>response.json())
.then(mochila=>{

item1.innerHTML= mochila.objeto1;
item2.innerHTML= mochila.objeto2;
item3.innerHTML= mochila.objeto3;
item4.innerHTML= mochila.objeto4;
item5.innerHTML= mochila.objeto5;
}
)



//id em css e javascript é # 
//class é .
let count11=count12=count13=count21=count22=count23=count31=count32=count33=0
let flag11=flag12=flag13=flag21=flag22=flag23=flag31=flag32=flag33=0
let temp=true
let beat = new Audio('decidemp3-14575.mp3');
let vic= new Audio('success.mp3');
let ent= new Audio('simple.mp3')

let col11= document.getElementById("c11")
let col12= document.getElementById("c12")
let col13= document.getElementById("c13")
let col21= document.getElementById("c21")
let col22= document.getElementById("c22")
let col23= document.getElementById("c23")
let col31= document.getElementById("c31")
let col32= document.getElementById("c32")
let col33= document.getElementById("c33")

const themeToggle = document.getElementById('theme-toggle');

// Function to toggle the dark theme
function toggleDarkTheme() {
  document.body.classList.toggle('dark-theme');
}
function playaudio(){
    ent.play();

}

// Event listener for the theme toggle button
themeToggle.addEventListener('click', toggleDarkTheme);


    col11.addEventListener("click",()=>{
    if(count11==0 && flag11==0){
    if(temp==true){
    col11.style.background="red"
    count11++;
    temp=!temp
    }
    else{
    col11.style.background="green"
    flag11++;
    temp=!temp

    }
    beat.load();
    beat.play();
    (temp==true)?document.getElementById("scn").textContent="Team Red's turn":document.getElementById("scn").textContent="Team Green's turn"
    if(count11+count12+count13+count21+count22+count23+count31+count32+count33+flag11+flag12+flag13+flag21+flag22+flag23+flag31+flag32+flag33==9)
    {
        document.getElementById("scn").textContent="Match Tied";

    }
    if((count11+count12+count13==3) || (count21+count22+count23==3 )|| (count31+count32+count33==3) || (count11+count21+count31==3)||(count12+count22+count32==3) ||(count13+count23+count33==3) || (count11+count22+count33==3)|| (count13+count22+count33==3)){
        document.getElementById("scn").textContent="Team Red Won";
        vic.play();
    }
    if(flag11+flag12+flag13==3 || flag21+flag22+flag23==3 || flag31+flag32+flag33==3 || flag11+flag21+flag31==3||flag12+flag22+flag32==3 ||flag13+flag23+flag33==3 || flag11+flag22+flag33==3|| flag13+flag22+flag33==3){
        document.getElementById("scn").textContent="Team Green Won";
        vic.play();
    }
}
})
col12.addEventListener("click",()=>{
    if(count12==0 && flag12==0){
        if(temp==true){
        col12.style.background="red"
        count12++;
        temp=!temp
        }
        else{
        col12.style.background="green"
        flag12++;
        temp=!temp
    
        }
        beat.load();
        beat.play();
        (temp==true)?document.getElementById("scn").textContent="Team Red's turn":document.getElementById("scn").textContent="Team Green's turn"
    if(count11+count12+count13+count21+count22+count23+count31+count32+count33+flag11+flag12+flag13+flag21+flag22+flag23+flag31+flag32+flag33==9)
    {
        document.getElementById("scn").textContent="Match Tied";

    }
    if((count11+count12+count13==3) || (count21+count22+count23==3 )|| (count31+count32+count33==3) || (count11+count21+count31==3)||(count12+count22+count32==3) ||(count13+count23+count33==3) || (count11+count22+count33==3)|| (count13+count22+count33==3)){
        document.getElementById("scn").textContent="Team Red Won";
        vic.play();
    }
    if(flag11+flag12+flag13==3 || flag21+flag22+flag23==3 || flag31+flag32+flag33==3 || flag11+flag21+flag31==3||flag12+flag22+flag32==3 ||flag13+flag23+flag33==3 || flag11+flag22+flag33==3|| flag13+flag22+flag33==3){
        document.getElementById("scn").textContent="Team Green Won";
        vic.play();
    }
    }
})
col13.addEventListener("click",()=>{
    if(count13==0 && flag13==0){
        if(temp==true){
        col13.style.background="red"
        count13++;
        temp=!temp
        }
        else{
        col13.style.background="green"
        flag13++;
        temp=!temp
    
        }
        beat.load();
        beat.play();
        (temp==true)?document.getElementById("scn").textContent="Team Red's turn":document.getElementById("scn").textContent="Team Green's turn"
    if(count11+count12+count13+count21+count22+count23+count31+count32+count33+flag11+flag12+flag13+flag21+flag22+flag23+flag31+flag32+flag33==9)
    {
        document.getElementById("scn").textContent="Match Tied";

    }
    if((count11+count12+count13==3) || (count21+count22+count23==3 )|| (count31+count32+count33==3) || (count11+count21+count31==3)||(count12+count22+count32==3) ||(count13+count23+count33==3) || (count11+count22+count33==3)|| (count13+count22+count33==3)){
        document.getElementById("scn").textContent="Team Red Won";
        vic.play();
    }
    if(flag11+flag12+flag13==3 || flag21+flag22+flag23==3 || flag31+flag32+flag33==3 || flag11+flag21+flag31==3||flag12+flag22+flag32==3 ||flag13+flag23+flag33==3 || flag11+flag22+flag33==3|| flag13+flag22+flag33==3){
        document.getElementById("scn").textContent="Team Green Won";
        vic.play();
    }
    }
})
col21.addEventListener("click",()=>{
    if(count21==0 && flag21==0){
        if(temp==true){
        col21.style.background="red"
        count21++;
        temp=!temp
        }
        else{
        col21.style.background="green"
        flag21++;
        temp=!temp
    
        }
        beat.load();
        beat.play();
        (temp==true)?document.getElementById("scn").textContent="Team Red's turn":document.getElementById("scn").textContent="Team Green's turn"
    if(count11+count12+count13+count21+count22+count23+count31+count32+count33+flag11+flag12+flag13+flag21+flag22+flag23+flag31+flag32+flag33==9)
    {
        document.getElementById("scn").textContent="Match Tied";

    }
    if((count11+count12+count13==3) || (count21+count22+count23==3 )|| (count31+count32+count33==3) || (count11+count21+count31==3)||(count12+count22+count32==3) ||(count13+count23+count33==3) || (count11+count22+count33==3)|| (count13+count22+count33==3)){
        document.getElementById("scn").textContent="Team Red Won";
        vic.play();
    }
    if(flag11+flag12+flag13==3 || flag21+flag22+flag23==3 || flag31+flag32+flag33==3 || flag11+flag21+flag31==3||flag12+flag22+flag32==3 ||flag13+flag23+flag33==3 || flag11+flag22+flag33==3|| flag13+flag22+flag33==3){
        document.getElementById("scn").textContent="Team Green Won";
        vic.play();
    }
    }
})
col22.addEventListener("click",()=>{
    if(count22==0 && flag22==0){
        if(temp==true){
        col22.style.background="red"
        count22++;
        temp=!temp
        }
        else{
        col22.style.background="green"
        flag22++;
        temp=!temp
    
        }
        beat.load();
        beat.play();
        (temp==true)?document.getElementById("scn").textContent="Team Red's turn":document.getElementById("scn").textContent="Team Green's turn"
    if(count11+count12+count13+count21+count22+count23+count31+count32+count33+flag11+flag12+flag13+flag21+flag22+flag23+flag31+flag32+flag33==9)
    {
        document.getElementById("scn").textContent="Match Tied";

    }
    if((count11+count12+count13==3) || (count21+count22+count23==3 )|| (count31+count32+count33==3) || (count11+count21+count31==3)||(count12+count22+count32==3) ||(count13+count23+count33==3) || (count11+count22+count33==3)|| (count13+count22+count33==3)){
        document.getElementById("scn").textContent="Team Red Won";
        vic.play();
    }
    if(flag11+flag12+flag13==3 || flag21+flag22+flag23==3 || flag31+flag32+flag33==3 || flag11+flag21+flag31==3||flag12+flag22+flag32==3 ||flag13+flag23+flag33==3 || flag11+flag22+flag33==3|| flag13+flag22+flag33==3){
        document.getElementById("scn").textContent="Team Green Won";
        vic.play();
    }
    }
})
col23.addEventListener("click",()=>{
    if(count23==0 && flag23==0){
        if(temp==true){
        col23.style.background="red"
        count23++;
        temp=!temp
        }
        else{
        col23.style.background="green"
        flag23++;
        temp=!temp
    
        }
        beat.load();
        beat.play();
        (temp==true)?document.getElementById("scn").textContent="Team Red's turn":document.getElementById("scn").textContent="Team Green's turn"
    if(count11+count12+count13+count21+count22+count23+count31+count32+count33+flag11+flag12+flag13+flag21+flag22+flag23+flag31+flag32+flag33==9)
    {
        document.getElementById("scn").textContent="Match Tied";

    }
    if((count11+count12+count13==3) || (count21+count22+count23==3 )|| (count31+count32+count33==3) || (count11+count21+count31==3)||(count12+count22+count32==3) ||(count13+count23+count33==3) || (count11+count22+count33==3)|| (count13+count22+count33==3)){
        document.getElementById("scn").textContent="Team Red Won";
        vic.play();
    }
    if(flag11+flag12+flag13==3 || flag21+flag22+flag23==3 || flag31+flag32+flag33==3 || flag11+flag21+flag31==3||flag12+flag22+flag32==3 ||flag13+flag23+flag33==3 || flag11+flag22+flag33==3|| flag13+flag22+flag33==3){
        document.getElementById("scn").textContent="Team Green Won";
        vic.play();
    }
    }
})
col31.addEventListener("click",()=>{
    if(count31==0 && flag31==0){
        if(temp==true){
        col31.style.background="red"
        count31++;
        temp=!temp
        }
        else{
        col31.style.background="green"
        flag31++;
        temp=!temp
    
        }
        beat.load();
        beat.play();
        (temp==true)?document.getElementById("scn").textContent="Team Red's turn":document.getElementById("scn").textContent="Team Green's turn"
    if(count11+count12+count13+count21+count22+count23+count31+count32+count33+flag11+flag12+flag13+flag21+flag22+flag23+flag31+flag32+flag33==9)
    {
        document.getElementById("scn").textContent="Match Tied";

    }
    if((count11+count12+count13==3) || (count21+count22+count23==3 )|| (count31+count32+count33==3) || (count11+count21+count31==3)||(count12+count22+count32==3) ||(count13+count23+count33==3) || (count11+count22+count33==3)|| (count13+count22+count33==3)){
        document.getElementById("scn").textContent="Team Red Won";
        vic.play();
    }
    if(flag11+flag12+flag13==3 || flag21+flag22+flag23==3 || flag31+flag32+flag33==3 || flag11+flag21+flag31==3||flag12+flag22+flag32==3 ||flag13+flag23+flag33==3 || flag11+flag22+flag33==3|| flag13+flag22+flag33==3){
        document.getElementById("scn").textContent="Team Green Won";
        vic.play();
    }
    }
})
col32.addEventListener("click",()=>{
    if(count32==0 && flag32==0){
        if(temp==true){
        col32.style.background="red"
        count32++;
        temp=!temp
        }
        else{
        col32.style.background="green"
        flag32++;
        temp=!temp
    
        }
        beat.load();
        beat.play();
        (temp==true)?document.getElementById("scn").textContent="Team Red's turn":document.getElementById("scn").textContent="Team Green's turn"
    if(count11+count12+count13+count21+count22+count23+count31+count32+count33+flag11+flag12+flag13+flag21+flag22+flag23+flag31+flag32+flag33==9)
    {
        document.getElementById("scn").textContent="Match Tied";

    }
    if((count11+count12+count13==3) || (count21+count22+count23==3 )|| (count31+count32+count33==3) || (count11+count21+count31==3)||(count12+count22+count32==3) ||(count13+count23+count33==3) || (count11+count22+count33==3)|| (count13+count22+count33==3)){
        document.getElementById("scn").textContent="Team Red Won";
        vic.play();
    }
    if(flag11+flag12+flag13==3 || flag21+flag22+flag23==3 || flag31+flag32+flag33==3 || flag11+flag21+flag31==3||flag12+flag22+flag32==3 ||flag13+flag23+flag33==3 || flag11+flag22+flag33==3|| flag13+flag22+flag33==3){
        document.getElementById("scn").textContent="Team Green Won";
        vic.play();
    }
    }
})
col33.addEventListener("click",()=>{
    if(count33==0 && flag33==0){
        if(temp==true){
        col33.style.background="red"
        count33++;
        temp=!temp
        }
        else{
        col33.style.background="green"
        flag33++;
        temp=!temp
    
        }
        beat.load();
        beat.play();
        (temp==true)?document.getElementById("scn").textContent="Team Red's turn":document.getElementById("scn").textContent="Team Green's turn"
    if(count11+count12+count13+count21+count22+count23+count31+count32+count33+flag11+flag12+flag13+flag21+flag22+flag23+flag31+flag32+flag33==9)
    {
        document.getElementById("scn").textContent="Match Tied";

    }
    if((count11+count12+count13==3) || (count21+count22+count23==3 )|| (count31+count32+count33==3) || (count11+count21+count31==3)||(count12+count22+count32==3) ||(count13+count23+count33==3) || (count11+count22+count33==3)|| (count13+count22+count31==3)){
        document.getElementById("scn").textContent="Team Red Won";
        vic.play();
        }
    if(flag11+flag12+flag13==3 || flag21+flag22+flag23==3 || flag31+flag32+flag33==3 || flag11+flag21+flag31==3||flag12+flag22+flag32==3 ||flag13+flag23+flag33==3 || flag11+flag22+flag33==3|| flag13+flag22+flag31==3){
        document.getElementById("scn").textContent="Team Green Won";
        vic.play();
    }
    }
})


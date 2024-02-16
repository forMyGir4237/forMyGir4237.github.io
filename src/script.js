document.body.style.cssText = "--slider: 10px"
let player = document.querySelector(".player")
let first_slide = document.querySelector(".first_slide")
let second_slide = document.querySelector(".second_slide")
let s3_slide = document.querySelector(".s3_slide")
let s4_slide = document.querySelector(".s4_slide")
let s5_slide = document.querySelector(".s5_slide")
let s6_slide = document.querySelector(".s6_slide")
let s7_slide = document.querySelector(".s7_slide")
let s8_slide = document.querySelector(".s8_slide")
let s9_slide = document.querySelector(".s9_slide")
let stick1 = document.querySelector(".stick1")
let stick2 = document.querySelector(".stick2")
let stick3 = document.querySelector(".stick3")
let img1 = document.querySelector(".img_1")
let img2 = document.querySelector(".img_2")
let img3 = document.querySelector(".img_3")
let img4 = document.querySelector(".img_4")
let we = document.querySelector(".we")
let bernard = document.querySelector(".bernard")
let freezer = document.querySelector(".freezer")
let freezer_inf = document.querySelector(".freezer_inf")
let hart = document.querySelector(".hart")
let is1onScreen = true 
let is2onScreen = true 
let is3onScreen = true
let is4onScreen = true
let is5onScreen = true
let is6onScreen = true
let is7onScreen = true
let is8onScreen = true
let is9onScreen = true
// import stick2 from "../photoes/sticks/2.png"
function over1(){
    first_slide.style.bottom="95%"
}
function out1(){
    first_slide.style.bottom="96%"
}

function nextSlide1(el){
    if(is1onScreen){
        setTimeout(()=>{
            el.style.bottom ="96%"
            setTimeout(()=>{
                el.style.transitionDuration = "0.3s"
                el.addEventListener("touchstart", over1)
                el.addEventListener("touchend", out1)
            }, 1000)
        }, 3100)
    }
    else{
        el.removeEventListener("mouseout", out1)
        el.removeEventListener("touchend", over1)
        el.style.bottom ="0"
        el.style.transitionDuration = "1s"
    }
    is1onScreen = !is1onScreen
}
first_slide.addEventListener('click', ()=>{nextSlide1(first_slide)})

function over2(){
    second_slide.style.bottom="93%"
}
function out2(){
    second_slide.style.bottom="94%"
}
second_slide.addEventListener('click', ()=>{
    let el = second_slide
    if(is2onScreen){
        
        el.style.bottom ="94%"   
        setTimeout(()=>{
            el.style.transitionDuration = "0.3s"
            el.addEventListener("touchstart", over2)
            el.addEventListener("touchend", out2)
        }, 1000)
    }
    else{
        el.removeEventListener("touchend", out2)
        el.removeEventListener("touchstart", over2)
        el.style.bottom ="0"
        el.style.transitionDuration = "1s"
    }
    is2onScreen = !is2onScreen
})



function over3(){
    s3_slide.style.bottom="91%"
}
function out3(){
    s3_slide.style.bottom="92%"
}
s3_slide.addEventListener('click', ()=>{
    let el = s3_slide
    if(is3onScreen){
        
        el.style.bottom ="92%"   
        setTimeout(()=>{
            el.style.transitionDuration = "0.3s"
            el.addEventListener("touchstart", over3)
            el.addEventListener("touchend", out3)
        }, 1000)
    }
    else{
        el.removeEventListener("touchend", out3)
        el.removeEventListener("touchstart", over3)
        el.style.bottom ="0"
        el.style.transitionDuration = "1s"
    }
    is3onScreen = !is3onScreen
})


function over4(){
    s4_slide.style.bottom="89%"
}
function out4(){
    s4_slide.style.bottom="90%"
}
s4_slide.addEventListener('click', ()=>{
    let el = s4_slide
    if(is4onScreen){
        
        el.style.bottom ="90%"   
        setTimeout(()=>{
            el.style.transitionDuration = "0.3s"
            el.addEventListener("touchstart", over4)
            el.addEventListener("touchend", out4)
            setTimeout(() => {
                console.log(2)
                stick2.style.backgroundImage="url(./photoes/sticks/2.png)"
                stick3.style.backgroundImage="url(./photoes/sticks/3.png)"
            }, 2000);
        }, 1000)
    }
    else{
        el.removeEventListener("touchend", out4)
        el.removeEventListener("touchstart", over4)
        el.style.bottom ="0"
        el.style.transitionDuration = "1s"
        setTimeout(() => {
            console.log(2)
           
        }, 2500);
    }
    is4onScreen = !is4onScreen
})


function over5(){
    s5_slide.style.bottom="87%"
}
function out5(){
    s5_slide.style.bottom="88%"
}
s5_slide.addEventListener('click', (event)=>{
    let el = s5_slide
    if (event.target.classList.contains('stick') || event.target.classList.contains('we') || event.target.classList.contains('freezer')) {
        // Игнорировать клик на родительском элементе, если клик произошел на дочернем элементе
        event.stopPropagation();
    }
    else{
    if(is5onScreen){
       
        el.style.bottom ="88%"   
        setTimeout(()=>{
            el.style.transitionDuration = "0.3s"
            el.addEventListener("touchstart", over5)
            el.addEventListener("touchend", out5)
        }, 1000)
    }
    else{
        el.removeEventListener("touchend", out5)
        el.removeEventListener("touchstart", over5)
        el.style.bottom ="0"
        el.style.transitionDuration = "1s"
    }
    is5onScreen = !is5onScreen}
})
stick1.addEventListener("touchstart", (ev)=>{
    let el=ev.target
    el.style.marginRignt="0"
    el.style.zIndex="8"
    el.style.rotate="0deg"
    el.style.transform="translate(0, 30%)"
    el.style.scale="1.3"
})
stick1.addEventListener("mouseenter", (ev)=>{
    let el=ev.target
    el.style.marginRignt="0"
    el.style.zIndex="8"
    el.style.rotate="0deg"
    el.style.transform="translate(0, 30%)"
    el.style.scale="1.3"
})
stick1.addEventListener("touchend", (ev)=>{
    let el=ev.target
    el.style.marginRignt="20%"
    el.style.zIndex="7"
    el.style.rotate="-7deg"
    el.style.transform="none"
    el.style.scale="1.0"
})
stick1.addEventListener("mouseleave", (ev)=>{
    let el=ev.target
    el.style.marginRignt="20%"
    el.style.zIndex="7"
    el.style.rotate="-7deg"
    el.style.transform="none"
    el.style.scale="1.0"
})
stick2.addEventListener("touchstart", (ev)=>{
    let el=ev.target
    el.style.marginLeft="0"
    el.style.zIndex="8"
    el.style.rotate="0deg"
    el.style.scale="1.3"
})
stick2.addEventListener("touchend", (ev)=>{
    let el=ev.target
    el.style.marginLeft="35%"
    el.style.zIndex="7"
    el.style.rotate="4deg"
    el.style.transform="none"
    el.style.scale="1.0"
})

stick2.addEventListener("mouseenter", (ev)=>{
    let el=ev.target
    el.style.marginLeft="0"
    el.style.zIndex="8"
    el.style.rotate="0deg"
    el.style.scale="1.3"
})
stick2.addEventListener("mouseleave", (ev)=>{
    let el=ev.target
    el.style.marginLeft="35%"
    el.style.zIndex="7"
    el.style.rotate="4deg"
    el.style.transform="none"
    el.style.scale="1.0"
})

stick3.addEventListener("touchstart", (ev)=>{
    let el=ev.target
    el.style.marginRight="0"
    el.style.zIndex="8"
    el.style.transform="translate(0, -30%)"
    el.style.rotate="0deg"
    el.style.scale="1.3"
})
stick3.addEventListener("touchend", (ev)=>{
    let el=ev.target
    el.style.marginRight="40%"
    el.style.zIndex="7"
    el.style.rotate="-3deg"
    el.style.transform="none"
    el.style.scale="1.0"
})

stick3.addEventListener("mouseenter", (ev)=>{
    let el=ev.target
    el.style.marginRight="0"
    el.style.zIndex="8"
    el.style.transform="translate(0, -30%)"
    el.style.rotate="0deg"
    el.style.scale="1.3"
})
stick3.addEventListener("mouseleave", (ev)=>{
    let el=ev.target
    el.style.marginRight="40%"
    el.style.zIndex="7"
    el.style.rotate="-3deg"
    el.style.transform="none"
    el.style.scale="1.0"
})
we.addEventListener("click", ()=>{
    stick2.style.backgroundImage="url(./photoes/sticks/4.png)"
    stick3.style.backgroundImage="url(./photoes/sticks/5.png)"
    setTimeout(() => {
        stick2.style.backgroundImage="url(./photoes/sticks/2.png)"
        stick3.style.backgroundImage="url(./photoes/sticks/3.png)"
    }, 2000);
})


function over6(){
    s6_slide.style.bottom="95%"
}
function out6(){
    s6_slide.style.bottom="96%"
}
s6_slide.addEventListener('click', ()=>{
    let el = s6_slide
    if(is6onScreen){
        first_slide.style.bottom="101%"
        second_slide.style.bottom="101%"
        s3_slide.style.bottom="101%"
        s4_slide.style.bottom="101%"
        s5_slide.style.bottom="101%"
        el.style.bottom ="96%"

        setTimeout(()=>{
            el.style.transitionDuration = "0.3s"
            el.addEventListener("touchstart", over6)
            el.addEventListener("touchend", out6)
        }, 1000)
    }
    else{
        el.removeEventListener("touchend", out6)
        el.removeEventListener("touchstart", over6)
        el.style.bottom ="0"
        el.style.transitionDuration = "1s"
        first_slide.style.bottom="96%"
        second_slide.style.bottom="94%"
        s3_slide.style.bottom="92%"
        s4_slide.style.bottom="90%"
        s5_slide.style.bottom="88%"
    }
    is6onScreen = !is6onScreen
})

function over7(){
    s7_slide.style.bottom="93%"
}
function out7(){
    s7_slide.style.bottom="94%"
}
s7_slide.addEventListener('click', ()=>{
    let el = s7_slide
    if(is7onScreen){
        
        el.style.bottom ="94%"   
        setTimeout(()=>{
            el.style.transitionDuration = "0.3s"
            el.addEventListener("touchstart", over7)
            el.addEventListener("touchend", out7)
        }, 1000)
    }
    else{
        el.removeEventListener("touchend", out7)
        el.removeEventListener("touchstart", over7)
        el.style.bottom ="0"
        el.style.transitionDuration = "1s"
    }
    is7onScreen = !is7onScreen
})
freezer.addEventListener("click", ()=>{
    freezer_inf.classList.add("freezer_inf_opened")
    setTimeout(() => {
        freezer_inf.classList.remove("freezer_inf_opened")
    }, 2900);
})


img1.addEventListener("touchstart", (ev)=>{
    let el=ev.target
    el.style.marginRignt="0"
    el.style.zIndex="4"
    el.style.rotate="0deg"
    el.style.scale="1.3"
    el.style.transform="translate(0, 30%)"
   
})
img1.addEventListener("mouseenter", (ev)=>{
    let el=ev.target
    el.style.marginRignt="0"
    el.style.zIndex="4"
    el.style.rotate="0deg"
    el.style.scale="1.3"
    el.style.transform="translate(0, 30%)"
})
img1.addEventListener("touchend", (ev)=>{
    let el=ev.target
    el.style.zIndex="3"
    el.style.rotate="4deg"
    el.style.scale="1.0"
    el.style.transform="none"
})
img1.addEventListener("mouseleave", (ev)=>{
    let el=ev.target
    el.style.zIndex="3"
    el.style.rotate="4deg"
    el.style.scale="1.0"
    el.style.transform="none"
})


img2.addEventListener("touchstart", (ev)=>{
    let el=ev.target
    el.style.marginRignt="0"
    el.style.zIndex="4"
    el.style.rotate="0deg"
    el.style.scale="1.3"
    el.style.transform="translate(0, -30%)"
   
})
img2.addEventListener("mouseenter", (ev)=>{
    let el=ev.target
    el.style.marginRignt="0"
    el.style.zIndex="4"
    el.style.rotate="0deg"
    el.style.scale="1.3"
    el.style.transform="translate(0, -30%)"
})
img2.addEventListener("touchend", (ev)=>{
    let el=ev.target
    el.style.zIndex="3"
    el.style.rotate="-2deg"
    el.style.scale="1.0"
    el.style.transform="none"
})
img2.addEventListener("mouseleave", (ev)=>{
    let el=ev.target
    el.style.zIndex="3"
    el.style.rotate="-2deg"
    el.style.scale="1.0"
    el.style.transform="none"
})


function over8(){
    s8_slide.style.bottom="91%"
}
function out8(){
    s8_slide.style.bottom="92%"
}
s8_slide.addEventListener('click', (event)=>{
    if (event.target.classList.contains('img_1') || event.target.classList.contains('img_2')){
        // Игнорировать клик на родительском элементе, если клик произошел на дочернем элементе
        event.stopPropagation();
    }
    else{
        let el = s8_slide
    if(is8onScreen){
        
        el.style.bottom ="92%"   
        setTimeout(()=>{
            el.style.transitionDuration = "0.3s"
            el.addEventListener("touchstart", over8)
            el.addEventListener("touchend", out8)
        }, 1000)
    }
    else{
        el.removeEventListener("touchend", out8)
        el.removeEventListener("touchstart", over8)
        el.style.bottom ="0"
        el.style.transitionDuration = "1s"
    }
    }
    
    is8onScreen = !is8onScreen
})



img3.addEventListener("touchstart", (ev)=>{
    let el=ev.target
    el.style.marginRignt="0"
    el.style.zIndex="3"
    el.style.rotate="0deg"
    el.style.scale="1.3"
    el.style.transform="translate(0, 30%)"
   
})
img3.addEventListener("mouseenter", (ev)=>{
    let el=ev.target
    el.style.marginRignt="0"
    el.style.zIndex="3"
    el.style.rotate="0deg"
    el.style.scale="1.3"
    el.style.transform="translate(0, 30%)"
})
img3.addEventListener("touchend", (ev)=>{
    let el=ev.target
    el.style.zIndex="2"
    el.style.rotate="4deg"
    el.style.scale="1.0"
    el.style.transform="none"
})
img3.addEventListener("mouseleave", (ev)=>{
    let el=ev.target
    el.style.zIndex="2"
    el.style.rotate="4deg"
    el.style.scale="1.0"
    el.style.transform="none"
})


img4.addEventListener("touchstart", (ev)=>{
    let el=ev.target
    el.style.marginRignt="0"
    el.style.zIndex="3"
    el.style.rotate="0deg"
    el.style.scale="1.0"
    el.style.transform="translate(0, -30%)"
   
})
img4.addEventListener("mouseenter", (ev)=>{
    let el=ev.target
    el.style.marginRignt="0"
    el.style.zIndex="3"
    el.style.rotate="0deg"
    el.style.scale="1.0"
    el.style.transform="translate(0, -30%)"
})
img4.addEventListener("touchend", (ev)=>{
    let el=ev.target
    el.style.zIndex="2"
    el.style.rotate="-7deg"
    el.style.scale="0.9"
    el.style.transform="none"
})
img4.addEventListener("mouseleave", (ev)=>{
    let el=ev.target
    el.style.zIndex="2"
    el.style.rotate="-7deg"
    el.style.scale="0.9"
    el.style.transform="none"
})

function over9(){
    s9_slide.style.bottom="89%"
}
function out9(){
    s9_slide.style.bottom="90%"
}
s9_slide.addEventListener('click', (event)=>{
    let el = s9_slide
    if (event.target.classList.contains('img_3') || event.target.classList.contains('img_4')){
        // Игнорировать клик на родительском элементе, если клик произошел на дочернем элементе
        event.stopPropagation();
    }
    else
    if(is9onScreen){
        
        el.style.bottom ="90%"   
        setTimeout(()=>{
            el.style.transitionDuration = "0.3s"
            el.addEventListener("touchstart", over9)
            el.addEventListener("touchend", out9)
        }, 1000)
    }
    else{
        el.removeEventListener("touchend", out9)
        el.removeEventListener("touchstart", over9)
        el.style.bottom ="0"
        el.style.transitionDuration = "1s"
    }
    is9onScreen = !is9onScreen
})
hart.addEventListener("click", ()=>{
    bernard.style.left="25%"
    setTimeout(() => {
        bernard.style.left="100%"
    }, 2700);
})
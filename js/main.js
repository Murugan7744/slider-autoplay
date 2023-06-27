
var img=document.querySelectorAll(".image-1");
var b=1;
Slide(b);

setInterval(
    function(){
        b++;
        Slide(b);
    },1000,b );

function Slide(element){
    if(element>img.length){
        b=1;
    }
    if(element<1){
        b=img.length;
    }
    for(let l=0; l<img.length; l++){
        img[l].style.display="none";
    }
    img[b-1].style.display="block";
}
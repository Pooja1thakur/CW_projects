const imgs=document.querySelectorAll('.header-slider ul img');
const prev_btn=document.querySelector('.control-prev');
const next_btn=document.querySelector('.control-next');
let n=0;
function chnageslide(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';
}
chnageslide();
prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length-1;
    }
    chnageslide();
})


next_btn.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }else{
        n=0;
    }
    chnageslide();
});





const scrollcontainer=document.querySelectorAll('.products');
for(const item of scrollcontainer){
    item.addEventListener('wheel', (e)=>{
        e.preventDefault();
        item.scrollLeft +=e.deltaY;
    })
}
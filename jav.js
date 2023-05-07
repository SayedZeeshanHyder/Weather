var wid=270;
function more(id){
    if(wid==270){
    id.style.height = '500px';
    wid=500;
    }
    else{
    id.style.height = '270px';
    wid=270;
    }
}
var mov=2
function move(id,hi){
    if(mov==2)
    {
        id.style.transition = '2s';
        id.style.left = '20%';
        hi.style.transition = '2s';
        hi.style.display = 'block';
        mov=3;
    }
    else{
        id.style.left = '0%';
        hi.style.display = 'none';
        mov=2;  
    }
}
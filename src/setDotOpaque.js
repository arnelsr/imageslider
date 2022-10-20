const setDotOpaque=(index)=>{
   //set opacity of all dots to .3
   const dots=document.getElementsByClassName('dot');
    
    
    for(let i=0;i<dots.length;i++){
        dots[i].style.opacity = '0.3';
 
    }
    //set opacity to 1
    const dot=document.getElementById('dot'+index);
    dot.style.opacity='1';
}
export default setDotOpaque;


const displayTargetPicture=(index)=>{
   
    
    const imageHolders=document.getElementsByClassName('image-holders');
    
    for(let i=0;i<imageHolders.length;i++){
        imageHolders[i].style.display='none';
    }
    imageHolders[index].style.display='block';
            

}
export default displayTargetPicture;
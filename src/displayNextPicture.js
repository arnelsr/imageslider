

const displayNextPicture=()=>{
    //get all image holders
    //get image holder with display not none
    //set that image holder's display to none
    //set next image holder to display not none
    
    const imageHolders=document.getElementsByClassName('image-holders');
    
    for(let i=0;i<imageHolders.length;i++){
        

        if (window.getComputedStyle(imageHolders[i]).display == 'block'){
            imageHolders[i].style.display='none';
        
            let j=i+1;
            if (j==imageHolders.length) {
                j=0;
            }
            imageHolders[j].style.display='block';
            return j;
           
           
        }
    }
    
}
export default displayNextPicture;

import './style.css';

import initialLoad from './initialLoad';
import displayNextPicture from './displayNextPicture';
import displayPreviousPicture from './displayPreviousPicture';
import displayTargetPicture from './displayTargetPicture';
import setDotOpaque from "./setDotOpaque";

//call initialLoad
initialLoad();

//display next picture
let intervalId=setInterval(displayNextPicture,5000);
//displayNextPicture();
let index;



//event delegation, main logic
document.addEventListener('click',function(e){
    clearInterval(intervalId);
    switch (e.target.id) {
        case 'left-arrow':
            //previous picture
            index=displayPreviousPicture();
            setDotOpaque(index);
            break;
        case 'right-arrow':
            //next picture
            index=displayNextPicture();
            
            break;
        case 'dot0':
        case 'dot1':
        case 'dot2':
        case 'dot3':
        case 'dot4':
            index=e.target.dataset.index;
            displayTargetPicture(index);
            setDotOpaque(index);

    }
    intervalId=setInterval(displayNextPicture,7000);
});

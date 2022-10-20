//intialLoad 
    //create header
    //create main
    //create footer


const initialLoad = ()=>{
    document.title=('Image Slider');
   
   
    // access content div
    let content = document.getElementById('content');
    if (!content){
        content=document.createElement('div');
        content.setAttribute('id','content');
        content.classList.add('wrapper');
        document.body.appendChild(content);
    }
    //create header
    const header = createHeader();
    //append header to id content
    content.appendChild(header);
    //create sidebar


    //create main body
    const main = createMain();
    //append main to div id content
    content.appendChild(main);
    
    //create footer
    const footer = createFooter();
    //append footer to div id content
    content.appendChild(footer);
    

}
export default initialLoad;

//create header
const createHeader = () =>{
    /*
   <header class="header">Image Slider</header>
    */
   
      const header = document.createElement('header');
      header.classList.add('header');
      header.textContent='Image Slider';
    
      return header;
      
}

const createMain=()=>{
/*
    <main class="main" id='main'>
      <images class="images" id="images">
        <div class="left-arrow"><img class="arrows" src="left-arrow.png" id="left-arrow"></div>
        <div class="image-holders" id="image-holder0"><img src="image0.jpg"></div>
        <div class="image-holders" id="image-holder1"><img src="image1.jpg"></div>
        <div class="image-holders" id="image-holder2"><img src="image2.jpg"></div>
        <div class="image-holders" id="image-holder3"><img src="image3.jpg"></div>
        <div class="image-holders" id="image-holder4"><img src="image4.jpg"></div>
        <div class="right-arrow"><img class="arrows" src="right-arrow.png" id="right-arrow"></div>
        <div class="dots">
            <span class="dot" id="dot0" data-index=0></span>
            <span class="dot" id="dot1" data-index=1></span>
            <span class="dot" id="dot2" data-index=2></span>
            <span class="dot" id="dot3" data-index=3></span>
            <span class="dot" id="dot4" data-index=4></span>
        </div>
      </images>

    </main>
*/
    //main
    const main=document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id','main');
    //images
    const images=document.createElement('images');
    images.classList.add('images');
    images.setAttribute('id','images');

    //left arrow div
    let arrowDiv=document.createElement('div');
    arrowDiv.classList.add('left-arrow');
    
    
    //left arrow image
    let arrowImage=document.createElement('img');
    arrowImage.classList.add('arrows');
    arrowImage.setAttribute('id','left-arrow');
    arrowImage.setAttribute('src','left-arrow.png');
    //append to div
    arrowDiv.appendChild(arrowImage);
    //append to images
    images.appendChild(arrowDiv);

    //image0 to 4
    for(let i=0;i<5;i++){
        //div
        const div=document.createElement('div');
        div.classList.add('image-holders');
        let imageHolder='image-holder'+i
        div.setAttribute('id',imageHolder);
        //image
        const image=document.createElement('img');
        image.setAttribute('src','image'+i+'.jpg');
        //append to div
        div.appendChild(image);
        //append to images
        images.appendChild(div);
    }

     //right arrow div
     arrowDiv=document.createElement('div');
     arrowDiv.classList.add('right-arrow');
     

    //right arrow image
    arrowImage=document.createElement('img');
    arrowImage.classList.add('arrows');
    arrowImage.setAttribute('src','right-arrow.png');
    arrowImage.setAttribute('id','right-arrow');
    //append to div
    arrowDiv.appendChild(arrowImage);
    //append to images
    images.appendChild(arrowDiv);
     //append to main
     main.appendChild(images);
    //dots 
    //dotdiv
    const dotDiv=document.createElement('div');
    dotDiv.classList.add('dots');
    //dots
    for(let i=0;i<5;i++){
        
        const span=document.createElement('span');
        span.classList.add('dot');
        let dotId='dot'+i
        span.setAttribute('id',dotId);
        span.setAttribute('data-index',i);
        //append to dotDiv
        dotDiv.appendChild(span);
   
    }
    //append to main
    main.appendChild(dotDiv);

   
    return main;
};

const createFooter=()=>{
/*<footer class="footer">&copy 2022 arnelsr</footer>*/
    const footer=document.createElement('footer');
    footer.classList.add('footer');
    footer.innerHTML='&copy; 2022 arnelsr';
    return footer;
};




 


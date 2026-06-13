document.getElementById("changeBtn").addEventListener("click", function(){
    //step 1: characters to coose from  
    let chars="0123456789abcdef";
    //step 2: start the hex code with #
    let hex="#";
    //step 3: loop 6 times to get 6 characters
    for(let i=0; i<6; i++){
        let randomPos= Math.floor(Math.random()*16);
        hex=hex +chars[randomPos];
    }
    //step 4: apply colour change to page
    document.body.style.backgroundColor=hex;

    //step 5: show hex code on screen
    document.getElementById("colourDisplay").textContent="Current Colour: "+hex;});



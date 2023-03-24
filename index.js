const backgrounds = ['./images/desert.jpg', './images/forest.jpg', './images/mountain.jpg', './images/mountain2.jpg', './images/road.jpg', './images/valley.jpg', './images/waterfall.jpg'];

let i = 0;

function addi(){
    if(i >= 6){
        i = 0;
    }else {
        i++;
    }
    
}

$(window).on("load", changeImage)

setInterval(addi, 10000)

function changeImage(){
    $('.bgImage').attr('src', backgrounds[i]).fadeIn(550).delay(10000).fadeOut(550, function(){
        changeImage()
    })
    if(i == 0 || i == 2 || i == 4 || i == 5){
        $('.bgImage').css("object-position", 'center top');
    }else if(i == 6){
        $('.bgImage').css("object-position", 'center center');
    }else {
        $('.bgImage').css("object-position", 'center bottom');
    }
}


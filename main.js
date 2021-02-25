let responseData;
let response;
let path = 'files/images/';

const images = document.querySelectorAll('.image>img');
const cards = document.querySelectorAll('.card');
const stack = document.getElementById('stack');
const scene = document.getElementById('wrapper');
const playButton = document.getElementById('playButton');

const intro = new Audio('files/mp3/gtst_seizoen_31_intro.mp3');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomDegree(min, max) {
    return (Math.random() * (max - min + 1) + min);
}

const updateScene = () => {    
}

const loadScene = () => {
    intro.play();
    cards.forEach((card) => {
        scale = getRandomInt(1.0, 1.4);
        deg = getRandomInt(-25, 25);
        x = getRandomInt(10, 90);
        y = getRandomInt(-50, 50);
        console.log('x: '+x+ ', y: '+y+', deg: '+deg+', scale: '+scale);
        card.style.transform = 'rotate(' + deg + 'deg) translate(' + x + '%, ' + y + '%) scale(' + scale + ')';
    });
};

playButton.onclick = function(){
    playButton.style.display = 'none';
    scene.style.animation = 'fadeIn 3s';
    scene.style.display = 'block';
    setTimeout(function(){
        loadScene();     
    }, 100);
    setTimeout(function(){
        updateScene();
    }, 2000);
    setTimeout(function(){
        playButton.style.display = 'block';
        scene.style.display = 'none';    
    }, 13000);
};



// stack.addEventListener('mouseleave', function() {
//     console.log('mouseleave');
//     cards.forEach((card) => {
//         deg = getRandomInt(-30, 30);
//         x = getRandomInt(-50, 50);
//         y = getRandomInt(-50, 50);
//         console.log('coordinates: x='+x +' y='+ y +' deg='+ deg);
//         // console.log('rotate(' + deg + 'deg) translate(' + x + 'px, ' + y + 'px) scale(1.3)');
//         card.style.transform = 'rotate(' + deg + 'deg) translate(' + x + 'px, ' + y + 'px) scale(1.3)';
//     });
// });


// const positions = [
//     {'left': -100, 'top': -50},
//     {'left': 0, 'top': -50},
//     {'left': 100, 'top': -50},
//     {'left': -100, 'top': 50},
//     {'left': 0, 'top': 50},
//     {'left': 100, 'top': 50},
//     {'left': -100, 'top': 100},
//     {'left': 0, 'top': 100},
//     {'left': 100, 'top': 100},
//     {'left': -100, 'top': 150},
//     {'left': 0, 'top': 150},
//     {'left': 100, 'top': 150},
//     {'left': -100, 'top': 200},
//     {'left': 0, 'top': 200},
//     {'left': 100, 'top': 200},
//     {'left': -100, 'top': 250},
//     {'left': 0, 'top': 250},
//     {'left': 100, 'top': 250}
// ];
// for (let i = 0; i <= positions.length; i++) {
//     x = positions[i]['left'];
//     y = positions[i]['top'];
//     console.log('coordinates: '+x, y);
// }


// let imageSources = '';
// fetch('image_array.php', {
// })
// .then((response) => response.json())
// .then((responseData) => {
//      if(responseData != null){
//         makeList(responseData);
//      }else{
//           alert("could not start intro");
//      }
// })

// makeList = (responseData) => {
//     for(let i = 0; i <= responseData.length-1; i++) {
//         let imagePath = path+responseData[i];
//         let imagePathString = "url('files/images/jojoilias.jpg')";
//         console.log(imagePathString);
//         // confirm(imagePath);
//         // image.style.backgroundImage = imagePathString;
//     }
//     // while (responseData.length != null) {
//     //     console.log(responseData);
//     // }
// }
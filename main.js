let responseData;
let response;
let path = 'files/images/';

let image = document.getElementsByClassName('image');
const card = document.querySelectorAll('.card');
const stack = document.getElementsByClassName('stack');

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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const rotateCard =  () => {
    return this.each(function() {
        deg = getRandomInt(-30, 30);
        x = getRandomInt(-50, 50);
        y = getRandomInt(-50, 50);
        this.style.transform = 'transform', 'rotate(' + deg + 'deg) translate(' + x + 'px, ' + y + 'px) scale(1.3)';
    });
}

spread = function () {
    var positions = [
      {left: -100, top: -50},
      {left: 0, top: -50},
      {left: 100, top: -50},
      {left: -100, top: 50},
      {left: 0, top: 50},
      {left: 100, top: 50},
      {left: -100, top: 100},
      {left: 0, top: 100},
      {left: 100, top: 100},
      {left: -100, top: 150},
      {left: 0, top: 150},
      {left: 100, top: 150},
      {left: -100, top: 200},
      {left: 0, top: 200},
      {left: 100, top: 200},
      {left: -100, top: 250},
      {left: 0, top: 250},
      {left: 100, top: 250}
    ];
    return this.each(function(i) {
        deg = getRandomInt(-5, 5);
        x = positions[i].left;
        y = positions[i].top;
        console.log(y)
        card.style.transform = 'transform', 'rotate(' + deg + 'deg) translate(' + x + '%, ' + y + '%) scale(0.9)';

    });
}

// card.rotateCard(); 
// setTimeout(
// function() {

// }, 1000);


stack.addEventListener('mouseenter', function() {
   card.spread();
});
stack.addEventListener('mouseleave', function() {
   card.rotateCard();
});




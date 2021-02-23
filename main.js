let responseData;
let response;
let path = 'files/images/';

let image = document.getElementsByClassName('image');

// let imageSources = '';
fetch('image_array.php', {
})
.then((response) => response.json())
.then((responseData) => {
     if(responseData != null){
        makeList(responseData);
     }else{
          alert("could not start intro");
     }
})

makeList = (responseData) => {
    for(let i = 0; i <= responseData.length-1; i++) {
        let imagePath = path+responseData[i];
        let imagePathString = "url('files/images/jojoilias.jpg')";
        console.log(imagePathString);
        // confirm(imagePath);
        image.style.backgroundImage = imagePathString;
    }

    // while (responseData.length != null) {
    //     console.log(responseData);
    // }
}





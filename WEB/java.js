let Jagdpanzer = {
    photo: 'Images/21.jpg',
    title : "Jagdpanzer 4",
    description : "Famous german tank destroyer from the 2ndWW area"
}
let pantherdata = {
    photo:'Images/55a211e5f0329db4a140141aa1391ff1.jpg',
    title : "Panther",
    description :"Famous german medium/heavy tank"
}
let mausdata = {
    photo:'Images/maus1.jpg',
    title:"MAUS",
    description:"the world's heaviest tank ever dreamed"


}
let panzer4data ={
    photo:'Images/Panzer-IV-Ausf-G-3.jpg',
    title:"Panzer IV G",
    description:"Most produced german medium tank",
}
let tigerdata ={
    photo:'Images/Tiger.jpg',
    title:"Tiger ",
    description:"World's most feared famous heavy tank",
}
let currentPhoto = 1 ;

let imagesData = [Jagdpanzer,pantherdata,mausdata,panzer4data,tigerdata];

let loadPhoto = (photoNumber) => {
    $('#kep').attr('src', imagesData[photoNumber].photo); 
}
   loadPhoto(currentPhoto)

 let loadtitle = (photoNumber) => {
        $('#photo-title').text(imagesData[photoNumber].title)
    }
    loadtitle(currentPhoto)

let loaddescription = (photoNumber) => {
        $('#photo-description').text(imagesData[photoNumber].description)
    }
loaddescription(currentPhoto)


$('#bal').click(() => {
    if(currentPhoto > 0) {
      currentPhoto--;  
    }
    loadPhoto(currentPhoto),
    loadtitle(currentPhoto),
    loaddescription(currentPhoto);
  });

  $('#jobb').click(() => {
    if(currentPhoto < 4) { 
      currentPhoto++; 
    }
    loadPhoto(currentPhoto),
    loadtitle(currentPhoto),
    loaddescription(currentPhoto);
  });
  
  let data = ["first", "second", "third"];/* ????*/

  imagesData.forEach((item, index) => {
  $('#container').append(`<div class="box" data-index="${index}">${item} (data-index="${index}")</div>`);
 
 
 
  $('.box').click((event) => {
    let indexClicked = $(event.target).attr(imagesData.photo);
    // indexClicked is now a string! if you need it as a number you have to change it
    // because for example "1" + 1 is going to be "11" and not 2
    let numberIndex = parseInt(indexClicked);
    // now numberIndex is a number
    $('#clicked').text(data[indexClicked]);
  });
});
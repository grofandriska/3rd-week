let data = {
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
    photo:'Images/TigerITunis.jpg',
    title:"Tiger ",
    description:"World's most feared famous heavy tank",
}

let currentPhoto = 1;
let imagesData = [data,pantherdata];
$('#kep').attr('src', imagesData[currentPhoto].photo);
$('#photo-title').text( imagesData[currentPhoto].title);
$('#photo-description').text(imagesData[currentPhoto].description);
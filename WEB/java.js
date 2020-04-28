let data = {
    photo: 'Images/21.jpg',
    title : "Jagdpanzer 4",
    description : "Famous german tank destroyer from the 2ndWW area"
}

$('#kep').attr('src', data.photo);

$('#photo-title').text( data.title);

$('#photo-description').text( data.description);
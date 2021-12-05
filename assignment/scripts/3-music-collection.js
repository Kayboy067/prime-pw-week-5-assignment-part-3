console.log('***** Music Collection *****')
let collection = []

function addToCollection(title, artist, yearPublished){
    let album = {
        title: title, 
        artist: artist, 
        yearPublished: yearPublished,
    }
    collection.push(album);
    return album;
}
console.log(addToCollection('Holla At Your Boy', 'Wizkid', 2011));
console.log(addToCollection('African Giant', 'Burna Boy', 2020));
console.log(addToCollection('Essence', 'Wizkid feat Tems', 2019));
console.log(addToCollection('Somebody Son', 'Tiwa Savage feat Brandy', 2021));
console.log(addToCollection('Fall', 'Davido', 2019));
console.log(addToCollection('No Guidance', 'Chris Brown feat Drake', 2020));
console.log(collection); //end test


var txt = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";

var dinosaur ='Triceratops';

var uppercaseDinosaur = dinosaur.toUpperCase();

console.log(uppercaseDinosaur);

var dino  = txt.replace('Velociraptor', dinosaur);
console.log(dino);

var halfTxt = dino.slice(0,dino.length/2);
console.log(halfTxt);


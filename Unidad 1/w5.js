var numChildren = 2;
var name = 'Manolo el del Bombo';
var location = 'Murcia';
var title = 'vendedor de tierra';

function tellFortune (numChildren, name, location, title) {
    document.write('You will be a '+ title +' in '+ location +', and married to '+ name +' with '+ numChildren +' kids.');
}

tellFortune(1,'Andres Montes', 'Sesame Street', 'charcutera');

tellFortune(3,'Pepa Flores', 'México', 'rata de dos patas');


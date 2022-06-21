// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.


// Creo un array con la lista della spesa
const list = ['carne', 'pollo', 'uva', 'fagioli', 'olio', 'cipolla'];

// Importo il conteniore della lista dall'HTML
const cart = document.getElementById('cart-item');

// Inizializzo la variabile
let i = 0;


// Ciclo while che stampa gli elementi dell'array
while (i < list.length) {
    const cartElement = document.createElement('li');
    cartElement.innerHTML = list[i];

    cartElement.classList.add('p-3');

    cart.append(cartElement);

    i++;
}
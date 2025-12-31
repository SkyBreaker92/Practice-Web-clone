document.getElementById("searchbtn").addEventListener('click', function() {
    if (document.getElementById("searchform").value === "") {
    alert('Por favor ingrese un término de búsqueda válido.');
}
   else alert('Usted acaba de buscar:\n' + '"' + document.getElementById("searchform").value + '"');    
})

// script for the login interface>>
var modal = document.getElementById('myLogin');
var userIn = document.getElementById('userInput');
var passIn = document.getElementById('passInput');
var btn = document.getElementById('btnConfirm');

function openModalLogin() {
    modal.showModal();
}
btn.addEventListener('click', (c) => {
    if(userIn.value === 'admin' && passIn.value === '1234') 
        { alert('You signed in succesfully!'); }
    else
        { alert('Invalid credentials'); }
    //Evita que envíe el formulario real
    c.preventDefault(); 
    console.log(userIn.value, passIn.value);
    modal.close();
    userIn.value = '';
    passIn.value = '';
});

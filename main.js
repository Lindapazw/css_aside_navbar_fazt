const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('active');
});

// toggle agregar una clase si no la tiene o la quita
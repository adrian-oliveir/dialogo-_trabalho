document.getElementById("theme-icon").addEventListener("click", toggleTheme);

function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById("theme-icon");

    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        icon.innerHTML = "&#11088;"; 
    } else {
        icon.innerHTML = "&#9728;"; 
    }
}

function maskCPF(event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, '');
    if (value.length <= 11) {
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
    input.value = value;
}

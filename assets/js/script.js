const form = document.getElementById('formularioIDHtml')
const title = document.getElementById('flex-one')

const formOporOf = () => {
    if (form.className === "formulario") {
        form.className = "formularioID"
    } else {
        form.className = "formulario"
    }
    if (form.className === 'formularioID') {
        title.style.display = "none"
    } else {
        title.style.display = "flex"
    }
}
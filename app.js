const input = document.getElementById('textarea')
console.log(input);
const button = document.getElementById('save')
console.log(button);
const liste = document.getElementById('favoris_list')
console.log(liste);

button.addEventListener("click" , () => {
    const valeur = input.value.trim();
    console.log(valeur);
    if (valeur === '') {
        alert("Veuillez entrer une valeur")
        return;
    }

    const li = document.createElement('li')

    li.textContent = valeur;

    const buttonSupprimer = document.createElement('button')
    buttonSupprimer.textContent = 'x'
    buttonSupprimer.classList.add('supprimer')
    buttonSupprimer.addEventListener("click", () => {
        liste.removeChild(li);
    })
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.addEventListener("change", () => {
        if (checkbox.checked === true) {
            li.classList.add('done')
        } else {
            li.classList.remove('done')
        }
    })

    li.appendChild(buttonSupprimer);
    li.prepend(checkbox)
    liste.appendChild(li)

    input.value = ''
    input.focus();
    
})
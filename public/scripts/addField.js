document.querySelector("#add-time")

.addEventListener("click", cloneField)



function cloneField() {
    //duplica campo
    const newtimefield = document.querySelector('.schedule-item').cloneNode(true)
    //limpa os campos
    const timefield = newtimefield.querySelectorAll('input')

   timefield.forEach(function(timefield){
    timefield.value = ""
   });
    document.querySelector('#schedule-items').appendChild(newtimefield)


}
const person = {
    first: 'Ion',
    last: 'Creanga',
    company: 'Amintiri din copilarie SRL'
}

function displayName(person) {
    return console.log(`${person.first} ${person.last}, Company: ${person.company}`)

}

displayName(person)
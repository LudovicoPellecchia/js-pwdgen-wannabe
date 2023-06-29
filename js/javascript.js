const firstname = prompt("inserisci il tuo nome")
const lastname = prompt("inserisci il tuo cognome")
const favouritecolor = prompt("inserisci il tuo colore preferito")
const age = prompt("quanti anni hai? scusa se sono indiscreto")
const magicnumber = 21
const pswnumber = parseInt(age) + (magicnumber)

document.getElementById("welcome-title").innerHTML = `Benvenuto ${firstname},`
document.getElementById("password").innerHTML = `${firstname}${lastname}${favouritecolor}${pswnumber}`

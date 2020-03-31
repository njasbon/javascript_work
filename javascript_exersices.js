class Carta {
	constructor (valor, pinta){
		this.valor = valor
		this.pinta = pinta
	}
}

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
//one line function

let arr = []
let pintas = ["corazon", "trebol", "diamante", "pica"]

for(let i = 1; i <14 ; i ++){
	for (let p = 0; p < 4; p ++){
		arr.push(new Carta(i, pintas[p]))
		//pintas.forEach(pinta => arr.push (new Carta(i, pinta)));
	}
}
mano = shuffle(arr).slice(0,5)

//.slice corta, copia y selcciona en el rango que es le indica. 

function findPair {
	for(let n = 1; n = 5; n ++ ){
// find the pairs in the hand
		let first = Carta[0] 
		let second = Carta[1]
		let third = Carta[2]
		let fourth = Carta[3]
		let fifth = Carta[4] 
	if valor.first === valor.second
		console.log(Carta[0], Carta[1])
	else valor.first === valor.third
		
	}
}

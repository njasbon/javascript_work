//cinco cartas del mismo pinta
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

findFlush(mano)

function findFlush(mano) {

	for(let n = 0; n > 5; n ++ ){
		for(let f = 1; f > 5; f++){
			if ()
		}
	}
		}

let precioTotal = () => {
	let pcBasica = 50000;
	let eligeMarca = prompt("elige la marca de tu pc, amd o intel?");
	let placaMadre = prompt("elige un mother, asus, asrock,gigabyte o msi");
	let microProcesador = prompt(
		"elige tu procesador, i3,i5,i7,ryzen3,ryzen5,ryzen7"
	);

	if (eligeMarca === "intel" || eligeMarca === "amd") {
		eligeMarca === "intel"
			? (pcBasica = pcBasica += 15000)
			: (pcBasica = pcBasica += 10000);
	}

	switch (placaMadre) {
		case "asus":
			pcBasica += 35000;
			break;
		case "asrock":
			pcBasica += 40000;
			break;
		case "gigabyte":
			pcBasica += 45000;
			break;
		case "msi":
			pcBasica += 50000;
			break;
		default:
			alert("el mother que eligió no existe");
	}
	switch (microProcesador) {
		case "i3":
			pcBasica += 35000;
			break;
		case "i5":
			pcBasica += 40000;
			break;
		case "i7":
			pcBasica += 45000;
			break;
		case "ryzen3":
			pcBasica += 32000;
			break;
		case "ryzen5":
			pcBasica += 38000;
			break;
		case "ryzen7":
			pcBasica += 43000;
			break;
		default:
			alert("el microprocesador que eligió no existe");
	}

	return pcBasica;
};

let precioFinal = precioTotal();
console.log(`el precio de su computadora es de ${precioFinal}`);

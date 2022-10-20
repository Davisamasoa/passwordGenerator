const btn = document.querySelector("button");
const input = document.querySelector(".password");
const checkLetraMi = document.querySelector("#letraMi");
const checkLetraMa = document.querySelector("#letraMa");
const checkNum = document.querySelector("#numero");
const checkCespeciais = document.querySelector("#cEspeciais");

let random = (num) => Math.floor(Math.random() * num);

const lyrics = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["!", "?", "*", "&", "#"];

btn.addEventListener("click", () => {
	let password = "";
	const createPassword = (limite, array) => {
		let result = "";
		for (let i = 0; i < limite; i++) {
			let randomLyricIndex = random(array.length - 1);
			result += array[randomLyricIndex];
		}

		if (checkLetraMa.checked) {
			if (checkLetraMi.checked) {
				result = result.replace(
					result[random(limite)],
					result[random(limite)].toUpperCase()
				);
			} else if (limite > 5) {
				result = result.replace(
					result[random(limite)],
					lyrics[random(lyrics.length)].toUpperCase()
				);
			}
		}

		console.log(result);
		return result;
	};

	if (checkLetraMi.checked && checkNum.checked && checkCespeciais.checked) {
		password +=
			createPassword(1, symbols) + random(10) + createPassword(8, lyrics);
	} else if (checkLetraMi.checked && checkNum.checked) {
		password += random(10) + createPassword(9, lyrics);
	} else if (checkLetraMi.checked && checkCespeciais.checked) {
		password += createPassword(1, symbols) + createPassword(9, lyrics);
	} else if (checkLetraMi.checked) {
		password += createPassword(10, lyrics);
	} else if (checkNum.checked && checkCespeciais.checked) {
		password += createPassword(3, symbols) + createPassword(7, nums);
	} else if (checkNum.checked) {
		password += createPassword(10, nums);
	} else if (checkCespeciais.checked) {
		password += createPassword(10, symbols);
	} else if (checkLetraMa.checked) {
		password += createPassword(10, lyrics).toUpperCase();
	} else {
		alert("Marque uma opção para gerar uma senha!");
	}

	input.value = password;
});

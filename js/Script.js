var Ugu = prompt("Введите строку","").toLowerCase(); 
function ShowCount(a) {
	let count = 0;
	for (let i = 0; i<Ugu.length; i++){
		(a == Ugu[i]) ? count+=1 :" ";
	}
	return console.log(count)
}
ShowCount(prompt("kакую букву щитаем?","").toLowerCase())
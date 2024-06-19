let a = [];
let b = [];

console.log("Digite 2 numeros pra calcular mmc");

process.stdin.on("data", function(data) {
    let entrada = Number(data.toString().trim());

    if (isNaN(entrada)) {
        console.log("Por favor, insira um número válido.");
        return;
    }

    if (a.length === 0) {
        a.push(entrada);
        console.log("Digite o segundo número:");
    } else {
        b.push(entrada);

        let num1 = a[0];
        let num2 = b[0];

        let max = (num1 > num2) ? num1 : num2;

        while (true) {
            if (max % num1 === 0 && max % num2 === 0) {
                console.log(`O MMC de ${num1} e ${num2} é: ${max}`);
                break;
            }
            max++;
        }

        process.exit();
    }
});

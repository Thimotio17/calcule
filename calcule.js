let a = [];
let b = [];

console.log("Digite 2 números para calcular MMC e MDC:");

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

        // Função para calcular o MDC
        function calcularMDC(a, b) {
            while (b !== 0) {
                let temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        }

        const calcularMMC = (a, b) => (a * b) / calcularMDC(a, b);

        let mdc = calcularMDC(num1, num2);
        let mmc = calcularMMC(num1, num2);

        console.log(`O MDC de ${num1} e ${num2} é: ${mdc}`);
        console.log(`O MMC de ${num1} e ${num2} é: ${mmc}`);

        process.exit();
    }
      
    
});

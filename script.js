function calcularIR(sal) {
    let imp = 0;

    if (sal <= 2259.20) {
        imp = 0;
    } else if (sal <= 2826.65) {
        imp = sal * 0.075 - 169.44;
    } else if (sal <= 3751.05) {
        imp = sal * 0.15 - 381.44;
    } else if (sal <= 4664.68) {
        imp = sal * 0.225 - 662.77;
    } else {
        imp = sal * 0.275 - 896;
    }

    return imp;
}

function efetiva(sal, imp) {
    return (imp / sal) * 100;
}

function calcular() {

    let sal = parseFloat(document.getElementById("salario").value);

    if (isNaNNumber.parseFloat(sal) || sal <= 0) {
        alert("Digite um salário válido!");
        return;
    }

    let imposto = calcularIR(sal);
    let aliq = efetiva(sal, imposto);

    document.getElementById("resultado").innerHTML = `
        <div class="resultado-box">
            <h2>Resultado</h2>

            <p>
                <span>Imposto devido:</span>
                R$ ${imposto.toFixed(2)}
            </p>

            <p>
                <span>Alíquota efetiva:</span>
                ${aliq.toFixed(2)}%
            </p>
        </div>
    `;
}

function limpar() {
    document.getElementById("salario").value = "";
    document.getElementById("resultado").innerHTML = "";
}

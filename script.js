function calcularIR(sal) {
    if (sal <= 2259.2) {
        return 0;
    } else if (sal <= 2826.65) {
        return sal * 0.075 - 169.44;
    } else if (sal <= 3751.05) {
        return sal * 0.15 - 381.44;
    } else if (sal <= 4664.68) {
        return sal * 0.225 - 662.77;
    }

    return sal * 0.275 - 896;
}

function efetiva(sal, imp) {
    return (imp / sal) * 100;
}

function calcular() {

    let sal = Number.parseFloat(document.getElementById("salario").value);

    if (isNaN(sal) || sal <= 0) {
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

function cosLaw (a,b, angleC) {
    return Math.sqrt(a ** 2 + b ** 2 - 2*a*b*Math.cos(angleC * (Math.PI / 180)))

}

document.getElementById("calculateCosine").addEventListener("click",() =>{
    const a = Number(document.getElementById("sideA").value);
    const b = Number(document.getElementById("sideB").value);
    const angleC = Number(document.getElementById("angleC").value);
    const result = cosLaw(a,b,angleC);
    document.getElementById("cosineResult").textContent = result

})

function findAsymptote(m,n) {
    if (m === n) return "The asymptote is horizontal";
    if (n > m) return "The asymptote is the x-axis";
    
    const degreeDifference = m - n;
    const names = ["Linear", "Quadratic", "Cubic", "Quartic","Quintic", "Sextic", "Septic", "Octic", "Nonic", "Decic"];
    return names[degreeDifference - 1] || "Higher-degree asymptote";

}

function findLeibniz(n) {
    let a = 0
    for (let i = 0; i < n; i++) {
        a += ((i % 2 === 0 ? 1: -1) / (2 *i + 1));
    }
    return (a * 4)
}

document.getElementById("approximatePi").addEventListener("click", () => {
    const n = parseInt(document.getElementById("iterations").value);
    const result = findLeibniz(n);
    document.getElementById("piResult").textContent = result
})
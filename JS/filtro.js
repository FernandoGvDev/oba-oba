document.addEventListener("DOMContentLoaded", function(){
    const precoRange = document.getElementById("precoRange");
    const valorPreco = document.getElementById("valorPreco")
})
precoRange.addEventListener("input", () => {
    valorPreco.textContent = precoRange.value;
})
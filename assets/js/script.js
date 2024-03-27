document.querySelector("#albuns").addEventListener("change", calcular)
document.querySelector("#tipo").addEventListener("change", calcular)
document.querySelector("#card_sim").addEventListener("change", calcular)
document.querySelector("#card_nao").addEventListener("change", calcular)
document.querySelector("#gift").addEventListener("change", calcular)


document.querySelector("#quant").addEventListener("input", function(){
    const quant = document.querySelector("#quant").value

    document.querySelector("label[for=quant]").innerText = `Quantidade: ${quant}`

    calcular()

})



function calcular(){

    // 100 por página

    const qtde = document.querySelector("#albuns").value
    let preco = qtde * 100

    const tipo = document.querySelector("#tipo").value
    if(tipo == 2) preco = preco += 1000

    const precisa_card = document.querySelector("#card_sim").checked 
    if (precisa_card) preco += qtde * 50

    const gift = document.querySelector("#gift").checked
    if (gift) preco*1.5

   const quant = document.querySelector("#quant").value
   const precoQuant = 1 - quant * 0.05
   preco *= 1 + precoQuant

   document.querySelector("#preco").innerText = "R$ " + preco.toFixed(2)

}

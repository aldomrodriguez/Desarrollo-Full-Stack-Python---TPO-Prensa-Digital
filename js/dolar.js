const apiUr3 = `https://dolarapi.com/v1/dolares/blue`;

async function obtenerDolar() 
{
    const response = await fetch(apiUr3);
    var dataDolar = await response.json()
    
    console.log(dataDolar);
    
    
  compra = document.querySelector("#blueCompra").innerHTML = dataDolar.compra;
  venta = document.querySelector("#blueVenta").innerHTML = dataDolar.venta; 
}    
obtenerDolar();

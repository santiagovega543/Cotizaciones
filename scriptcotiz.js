const INFO_COTIZ = "https://api.exchangeratesapi.io/latest";
var listaDeMonedas = [];

function getJsonData(url) {
    return    fetch(url)
    .then(response => response.json())
};

boton = document.getElementById("boton");
botonlibre = document.getElementById("botonlibre");
botonvuelta = document.getElementById("botonvuelta");
botonmostrar = document.getElementById("btnmostrarcont");

getJsonData(INFO_COTIZ).then(function(resultObj) {
    botonmostrar.addEventListener("click", function() {
        divmostrar = document.getElementById("gen");
        if (divmostrar.className == "general" ) { 
        return (divmostrar.setAttribute("class", "mostrar"));
        } else {
        return (divmostrar.setAttribute("class", "general"));
        };
    });
    boton.addEventListener("click", function() {
        cantidad = document.getElementById(`cantidad`).value;
        console.log(cantidad);
        eleccion = document.getElementById(`selmoneda`).value;
        console.log(eleccion);
        if (!eleccion) {
            return   alert("¡Elige una moneda!");
        };
        listaDeMonedas = resultObj.rates;
        console.log(listaDeMonedas);
        console.log(listaDeMonedas[eleccion]);
        cuenta = cantidad / listaDeMonedas[eleccion];
        console.log(cuenta);
        numero = cuenta.toFixed(4);
        console.log(numero);
        resultado = document.getElementById(`resultado`);
        resultado.value = numero;
        cuentaUSD = cantidad / (listaDeMonedas[eleccion] / listaDeMonedas.USD);
        numeroUSD = cuentaUSD.toFixed(4);
        resultadoUSD = document.getElementById(`resultadoUSD`);
        resultadoUSD.value = numeroUSD;
        cuentaGBP = cantidad / (listaDeMonedas[eleccion] / listaDeMonedas.GBP);
        numeroGBP = cuentaGBP.toFixed(4);
        resultadoGBP = document.getElementById(`resultadoGBP`);
        resultadoGBP.value = numeroGBP;
        infoauto = document.getElementById(`infoauto`);
        ctaauto = 13500 - numeroUSD;
        if (numeroUSD >= 13500) {
            return infoauto.innerHTML = `<h3>` + "¿Sabías que..." + `</h3>` + "con ese monto ya podrías comprarte un Chevrolet Onix?";
        } else {
            return infoauto.innerHTML = `<h3>` + "¿Sabías que..." + `</h3>` + "para ese monto te faltan " + ctaauto + " USD para poder comprarte un Chevrolet Onix?";
        };
    });
    botonlibre.addEventListener("click", function() {
    cantidadlibre = document.getElementById(`cantidadlibre`).value;
    console.log(cantidadlibre);
    eleccionlibre = document.getElementById(`selmonedalibre`).value;
    console.log(eleccionlibre);
    eleccionlibredestino = document.getElementById(`selmonedalibredestino`).value;
    console.log(eleccionlibredestino);
    listaDeMonedas = resultObj.rates;
    console.log(listaDeMonedas);
    console.log(listaDeMonedas[eleccionlibredestino]);
    if (!eleccionlibre || !eleccionlibredestino) {
        return alert("¡Tienes que elegir una moneda de origen y una de destino!");
    } else if (eleccionlibre == "CAD") {
        if (eleccionlibre == "CAD" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.CAD / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };
    } else if (eleccionlibre == "HKD") {
        if (eleccionlibre == "HKD" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.HKD / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "ISK") {
        if (eleccionlibre == "ISK" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.ISK / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };
    } else if (eleccionlibre == "PHP") {
        if (eleccionlibre == "PHP" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.PHP / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };
    } else if (eleccionlibre == "DKK") {
        if (eleccionlibre == "DKK" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.DKK / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero; 
    };
    } else if (eleccionlibre == "HUF") {
        if (eleccionlibre == "HUF" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.HUF / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero; 
    };    
    } else if (eleccionlibre == "CZK") {
        if (eleccionlibre == "CZK" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.CZK / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "AUD") {
        if (eleccionlibre == "AUD" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.AUD / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "RON") {
        if (eleccionlibre == "RON" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.RON / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "SEK") {
        if (eleccionlibre == "SEK" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.SEK / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "IDR") {
        if (eleccionlibre == "IDR" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.IDR / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "INR") {
        if (eleccionlibre == "INR" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.INR / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "BRL") {
        if (eleccionlibre == "BRL" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.BRL / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "RUB") {
        if (eleccionlibre == "RUB" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.RUB / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "HRK") {
        if (eleccionlibre == "HRK" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.HRK / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "JPY") {
        if (eleccionlibre == "JPY" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.JPY / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "THB") {
        if (eleccionlibre == "THB" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.THB / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "CHF") {
        if (eleccionlibre == "CHF" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.CHF / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "SGD") {
        if (eleccionlibre == "SGD" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.SGD / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "PLN") {
        if (eleccionlibre == "PLN" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.PLN / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "BGN") {
        if (eleccionlibre == "BGN" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.BGN / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "TRY") {
        if (eleccionlibre == "TRY" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.TRY / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "CNY") {
        if (eleccionlibre == "CNY" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.CNY / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "NOK") {
        if (eleccionlibre == "NOK" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.NOK / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "NZD") {
        if (eleccionlibre == "NZD" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.NZD / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "ZAR") {
        if (eleccionlibre == "ZAR" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.ZAR / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "USD") {
        if (eleccionlibre == "USD" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.USD / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "MXN") {
        if (eleccionlibre == "MXN" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.MXN / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "ILS") {
        if (eleccionlibre == "ILS" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.ILS / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "GBP") {
        if (eleccionlibre == "GBP" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.GBP / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "KRW") {
        if (eleccionlibre == "KRW" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.KRW / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    } else if (eleccionlibre == "MYR") {
        if (eleccionlibre == "MYR" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre / listaDeMonedas[eleccionlibre];
            console.log(cuenta);
            numero = cuenta.toFixed(4);
            result = document.getElementById(`resultadolibre`);
            return result.value = numero;
        } else {
        cuenta = cantidadlibre / (listaDeMonedas.MYR / listaDeMonedas[eleccionlibredestino]);
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero; 
    };    
    } else if (eleccionlibre == "EUR") {
        if (eleccionlibre == "EUR" && eleccionlibredestino == "EUR") {
            cuenta = cantidadlibre;
            result = document.getElementById(`resultadolibre`);
            divisa = document.getElementById(`divisa`);
            return (result.value = cuenta) && (divisa.innerHTML = eleccionlibredestino);
        } else {
        cuenta = cantidadlibre * listaDeMonedas[eleccionlibredestino];
        numero = cuenta.toFixed(4);
        result = document.getElementById(`resultadolibre`);
        return result.value = numero;
    };    
    };
    });
    botonvuelta.addEventListener("click", function() {
        monorigen = document.getElementById(`selmonedalibre`);
        mondestino = document.getElementById(`selmonedalibredestino`);
        m1 = document.getElementById(`selmonedalibre`).value;
        m2 = document.getElementById(`selmonedalibredestino`).value;
        monorigen.setAttribute("value", m2);
        mondestino.setAttribute("value", m1);
        console.log(monorigen.value);        
    });
});









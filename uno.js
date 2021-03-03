
function mostrar()
{
	let producto;
	let precio;
	let unidades;
	let tipo;
	let marca;
	let contAlc = 0;
	let acumAlc = 0;
	let contIac = 0;
	let acumIac = 0;
	let contQuat = 0;
	let acumQuat = 0;
	let promCantAlc;
	let promCantIac;
	let promCantQuat;
	let flag = 1;
	let tipoMax;
	let acumIacBarato = 0;
	let precioMax = 0;
	let marcaCaro;
	let tipoCaro;
	let productoCaro;
	let acumExpl =0;
	let acumCom = 0;
	let acumIgn =0;
	


	for(let i=0;i<5; i++)
	{
		producto = prompt("Ingrese el producto: ALCOHOL/IAC/QUAT").toUpperCase();
		while(producto != "ALCOHOL" && producto != "IAC" && producto != "QUAT")
		{
			producto = prompt("No es valido. Ingrese el producto: ALCOHOL/IAC/QUAT").toUpperCase();
		}
		precio = parseFloat(prompt("Ingrese precio del producto: "));
		while(isNaN(precio) || precio < 100 || precio >300)
		{
			precio = parseFloat(prompt("Valor incorrecto Ingrese precio del producto entre 100 y 300: "));
		}
		unidades = parseInt(prompt("Ingrese cantidad de unidades: "));
		while(isNaN(unidades) || unidades <= 0 || unidades > 1000)
		{
			unidades = parseInt(prompt("No es valido. Ingrese cantidad de unidades: "));
		}
		tipo = prompt("Ingrese el tipo de inflamable: ignifugo/combustible/explosivo").toLowerCase();
		while(tipo != "ignifugo" && tipo != "combustible" && tipo != "explosivo")
		{
			tipo = prompt("Error. Ingrese el tipo de inflamable: ignifugo/combustible/explosivo").toLowerCase();
		}
		marca = prompt("Ingrese marca del producto: ");
		
		switch(producto)
		{
			case "ALCOHOL":
				contAlc++;
				acumAlc += unidades;
				break;
			case "IAC":
				contIac++
				acumIac += unidades;
				break;
			case "QUAT":
				contQuat++
				acumQuat += unidades;
				break;
		}
		switch(tipo)
		{
			case "ignifugo":
				acumIgn += unidades;
				break;
			case "combustible":
				acumCom += unidades;
				break;
			case "explosivo":
				acumExpl += unidades;
				break;
		}
		if(acumIgn > acumCom && acumIgn > acumExpl)
		{
			tipoMax = "ignifugo";
		}
		else if(acumCom >= acumIgn && acumCom > acumExpl)
		{
			tipoMax = "combustible";
		}
		else
		{
			tipoMax = "explosivo";
		}
		if(producto == "IAC" && precio <=200)
		{
			acumIacBarato += unidades;
		}
		if(flag || precio > precioMax)
		{
			precioMax = precio;
			marcaCaro = marca;
			tipoCaro = tipo;
			productoCaro = producto;
			flag = 0;
		}
		
	}
	
	if(contAlc != 0)
	{
		promCantAlc = acumAlc / contAlc;
		document.write("a- El promedio de cantidad de ALCOHOL es: " + promCantAlc + "<br>");
	}
	else
	{
		document.write("a- No se compraron unidades de ALCOHOL <br>");
	}
	if(contIac != 0)
	{
		promCantIac = acumIac/contIac;
		document.write("a- El promedio de cantidad de IAC es: " + promCantIac + "<br>");
	}
	else
	{
		document.write("a- No se compraron unidades de IAC <br>");
	}
	if(contQuat != 0)
	{
		promCantQuat = acumQuat/contQuat;
		document.write("a- El promedio de cantidad de QUAT es: " + promCantQuat + "<br>");
	}
	else 
	{
		document.write("a- No se compraron unidades de QUAT");
	}
	document.write("b- El tipo de inflamable con mayor unidades compradas es: " + tipoMax + "<br>");
	document.write("c- Se compraron en total " + acumIacBarato + " unidades de IAC con precio menor a 200 <br>");
	document.write("d- El producto mas caro es " + productoCaro + ", la marca es " + marcaCaro + " y el tipo de inflamable es " + tipoCaro + "<br>");
	

}

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    //id del cupón
  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;
    //id del precio original
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
    // objeto con nombre del cupón y su valor
  const coupons = [
    {
      name: "JuanDC_es_Batman",
      discount: 15,
    },
    {
      name: "pero_no_le_digas_a_nadie",
      discount: 30,
    },
    {
      name: "es_un_secreto",
      discount: 25,
    },
  ];

  let descuento;

  // ??
  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  };

    //almacena el si la encontró o no
  const userCoupon = coupons.find(isCouponValueValid);

    //valida si no es valido el nombre del cupón
  if (!userCoupon) {
    alert("El cupón " + userCouponValue + "no es válido");
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(
      priceValue,
      descuento
    );

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
}


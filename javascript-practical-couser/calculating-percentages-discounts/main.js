var initialPrice;
var discountPercentage

var loadValues = () => {
  initialPrice = document.getElementById("price").value;
  discountPercentage = document.getElementById("discountPercentage").value;
}

var clearInputs = () => {
  document.getElementById("price").value = "";
  document.getElementById("discountPercentage").value = "";
}

var calDiscount = () => {
  return initialPrice*(discountPercentage/100);
}

var calTotalPrice = () => {
  return initialPrice-calDiscount();
}

var calculate = () => {
  loadValues();
  if(initialPrice === "" || discountPercentage === ""){
    alert("Debe especificar los campos de precio y porcentaje descuento.");
  } else {
    alert(`Price: ${initialPrice}\nDiscount: ${calDiscount()}\nTotal Price: ${calTotalPrice()}`);
    clearInputs();
  }
}

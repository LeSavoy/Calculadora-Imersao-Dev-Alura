function media() {
  var tn1 = document.getElementById('txtn1')
  var tn2 = document.querySelector('input#txtn2')
  var res = document.getElementById('res')
  var n1 = Number(tn1.value)
  var n2 = Number(tn2.value)
  var s = n1 + n2 
  var r = s / 2

  res.innerHTML = `A média entre ${n1} e ${n2} é igual a ${r}`
}
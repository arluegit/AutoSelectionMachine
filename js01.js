
function getRandomBreakfast() {
  var totalBf = ['美芝城', '麥味登', '晨間', '永和豆漿'];
  var random = Math.floor(Math.random() * totalBf.length);
  result = totalBf[random];  
  document.getElementById('sp1').innerHTML = result;
}

function getRandomLunch() {
  var totalLc = ['麥當勞', '肯德基', '漢堡王', '摩斯', '7-11', '全家', 'IKEA','鹹水雞','燒肉','壽喜燒','六扇門','藏壽司'];
  var random = Math.floor(Math.random() * totalLc.length);
  result = totalLc[random];  
  document.getElementById('sp2').innerHTML = result;
}

function getRandomDinner() {
  var totalDn = ['麥當勞', '肯德基', '漢堡王', '摩斯', '7-11', '全家', 'IKEA','鹹水雞','燒肉','壽喜燒','六扇門','藏壽司','全聯'];
  var random = Math.floor(Math.random() * totalDn.length);
  result = totalDn[random];  
  document.getElementById('sp3').innerHTML = result;
}

function getRandomDrink() {
  var totalDk = ['麻古','李記','7-11','全家','可不可','全聯'];
  var random = Math.floor(Math.random() * totalDk.length);
  result = totalDk[random];  
  document.getElementById('sp4').innerHTML = result;
}

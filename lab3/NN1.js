var array = arrayuusgeh(4, 4);
function arrayuusgeh(height, width)
{
    console.log('array iin 0 bolon 5aar tugssun toonuudiin niilberiig oloh')
  var array = [];
  for (var y = 0 ; y < height; y++)
  {
    array[y] = [];
    for (var x = 0; x < width; x++)
    {
        array[y][x] = my();
    }
  }
  return array;
  function my()
  {
    return (Math.random() * 100 | 0);
  }
}
console.log(array)

var arrToConvert = array;
var newArr = [];


for(var i = 0; i < arrToConvert.length; i++)
{
    newArr = newArr.concat(arrToConvert[i]);
}

let arr1 = newArr
var sum = 0
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 10 === 0 || arr1[i] % 10 === 5 ) {
        sum += arr1[i];
    }
}
console.log(newArr)
console.log(sum);

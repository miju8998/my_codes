var array = arrayuusgeh(4, 4);
function arrayuusgeh(height, width)
{
    console.log('array iin tegsh toonuudiin niilberiig oloh')
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

const sumEvens = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
    sum = sum + i;
    }
  }
  return sum;
}
 
console.log(sumEvens(array));
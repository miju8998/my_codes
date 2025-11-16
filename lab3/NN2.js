var array = arrayuusgeh(4, 4);
function arrayuusgeh(height, width)
{
    console.log('array iin ⟍ diagonaliin utguudiig 0 bolgon uurchluh')
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
console.log('random toogoor duurgesen array:',array)

for (let i = 0; i < array.length; i++) {
  array[i][i] = 0;
}

console.log('shinechlegdsen array:',array)
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
console.log('uussen array:',array)
array [0][0] = 0
array [1][1] = 0
array [2][2] = 0
array [3][3] = 0
console.log('uurchlugdsun array:',array)
var array = arrayuusgeh(4, 4);
function arrayuusgeh(height, width)
{
    console.log('random toogoor duurgesen 2d array uusgeh')
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
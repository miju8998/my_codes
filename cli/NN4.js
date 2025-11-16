var array = arrayuusgeh(4, 4);
function arrayuusgeh(height, width)
{
    console.log('array iin zahiin elementuudiin urjveriig oloh')
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
a = array [0][0] * 
array [0][1] * 
array [0][2] * 
array [0][3] * 
array [1][0] * 
array [1][3] * 
array [2][3] * 
array [2][0] * 
array [3][0] * 
array [3][3] * 
array [3][2] * 
array [3][1]
    console.log('urjver ni:',a)
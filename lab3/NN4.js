var array = arrayuusgeh(6, 6);
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
console.log('anhnii array:',array)

let mur = array.length;
let bagana = array[0].length;

// ehnii bolon suuliin muriig 0 bolgoh
for (let i = 0; i < bagana; i++) {
    array[0][i] = 0++  // ehnii mur
    array[mur - 1][i] = 0;  // suuliin mur
}

// ehnii bolon suuliin baganiig o bolgoh
for (let i = 0; i < mur; i++) {
    array[i][0] = 0;  // ehnii bagana
    array[i][bagana - 1] = 0;  // suuliin bagana
}

console.log('shinechlegdsen:',array);


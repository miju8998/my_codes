function hidavtagdsan(arr) {
    const countMap = new Map();
    let hidavtagdsan = arr[0];
    let maxCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      const count = (countMap.get(num) || 0) + 1;
      countMap.set(num, count);
  
      if (count > maxCount) {
        hidavtagdsan = num;
        maxCount = count;
      }
    }
  
    return hidavtagdsan;
  }
  
  const arr = [12, 24, 30, 33, 43, 12, 12, 45, 234, 0, 134, 452];
  console.log(hidavtagdsan(arr));
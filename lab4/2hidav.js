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
  
  const arr = ["The first computer virus was a computer worm. It was a selfreplicating virus and displays the message like 'I am the creeper catch me if you can' in  earky 1970's"];
  console.log(hidavtagdsan(arr));
const arr = [
   
  {
    product_code: 'special-cotton-shirt-for-men',
    price: 100
   
  },
  {
    product_code: 'cotton-o-neck-mens-clothing-t-shirts',
    price: 0

  },
  {
    product_code: 'running-sneaker',
    price: 3500
   
  },
  {
    product_code: 'heart-rate-monitor-gps-fitness-smartwatch',
    price: 0
 
  },
  {
    product_code: 'men-shoes-tmasw',
    price: 0

  
  },
  {
    product_code: 'men-shoes',
    price: 0
  
  },
  {
    product_code: 'iphone-13-pro-black-color-512gb-storage',
    price: 0
  
  },
  {
    product_code: 'sceptre-led-curved-2xhdmi-display-port-monitor',
    price: 0
  
  },
  {
    product_code: 'premium-leather-matt-black-casual-boot',
    price: 0
  
  }
  ];
  
  arr.forEach(object => {
    delete object['price'];
  });
  
  // 👇️ [{id: 1, name: 'Tom'}, {id: 2, name: 'Bob'}]
  console.log(arr);
  
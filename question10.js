function filterByCategory(products, category) {
    return function () {
      return products.filter(product => product.category === category);
    };
  }

  const products = [
    { name: 'Product 1', category: 'Electronics' },
    { name: 'Product 2', category: 'Clothing' },
    { name: 'Product 3', category: 'Electronics' },
    { name: 'Product 4', category: 'Books' },
    { name: 'Product 5', category: 'Electronics' },
  ];
  
  const filterElectronics = filterByCategory(products, 'Electronics');
  const electronicsProducts = filterElectronics();
  
  console.log(electronicsProducts); // This will log an array of products in the 'Electronics' category
  
let shopGoods = [
    {
      "store_name": "Moda Dünyası",
      "store_address": "Bakı şəhəri, Nizami kuçəsi 5",
      "products": [
        {"product_name": "Kişi köynəyi", "product_description": "Mavi rəngdə, 100% pamuk", "product_price": 50},
        {"product_name": "Qadın bluzası", "product_description": "Dəri detallı, qara rəngdə", "product_price": 60},
        {"product_name": "Kişi pantolonu", "product_description": "Qəhvəyi rəng, kənar cebi", "product_price": 75},
        {"product_name": "Qadın eteyi", "product_description": "Qırmızı rəng, mini", "product_price": 40},
        {"product_name": "Kişi dəsmalı", "product_description": "Nəqşdar dizayn", "product_price": 20},
        {"product_name": "Qadın çantası", "product_description": "Əlgötürən, dəri", "product_price": 90},
        {"product_name": "Kişi botları", "product_description": "Qış üçün, suya davamlı", "product_price": 120},
        {"product_name": "Qadın ayaqqabıları", "product_description": "Yüksək tapan, lacivərt", "product_price": 85},
        {"product_name": "Kişi papağı", "product_description": "Qara rəngdə, dəri", "product_price": 45},
        {"product_name": "Qadın şalvarı", "product_description": "Göy rəngdə, kaşmir", "product_price": 70}
      ]
    },
    {
      "store_name": "Zərif Moda",
      "store_address": "Bakı şəhəri, 28 May kuçəsi 12",
      "products": [
        {"product_name": "Kişi palto", "product_description": "Süət dəri, qara rəngdə", "product_price": 250},
        {"product_name": "Qadın jaketi", "product_description": "Uzun, qaşqır", "product_price": 200},
        {"product_name": "Kişi kəməri", "product_description": "Dəri, metal tokalı", "product_price": 40},
        {"product_name": "Qadın badlonu", "product_description": "Retro stil, qızıl rəngdə", "product_price": 180},
        {"product_name": "Kişi şortu", "product_description": "Spor stil, elastik", "product_price": 60},
        {"product_name": "Qadın maykası", "product_description": "Boyalı nəqş, pamuklu", "product_price": 45},
        {"product_name": "Kişi saatı", "product_description": "Qara rəngdə, analog", "product_price": 150},
        {"product_name": "Qadın bəzək", "product_description": "Qızıl, komplekt", "product_price": 220},
        {"product_name": "Kişi atkısı", "product_description": "Xəzəl rəng, uzun", "product_price": 35},
        {"product_name": "Qadın bantı", "product_description": "Metal detallı, elastik", "product_price": 50}
      ]
    },
    {
      "store_name": "Əliyev Moda Mərkəzi",
      "store_address": "Bakı şəhəri, Azadlıq prospekti 89",
      "products": [
        {"product_name": "Kişi kostyumu", "product_description": "İki parçalı, qara rəngdə", "product_price": 320},
        {"product_name": "Qadın kombinezonu", "product_description": "Yaz üçün, açıq rəng", "product_price": 150},
        {"product_name": "Kişi sviteri", "product_description": "Düz rəng, yüngül", "product_price": 70},
        {"product_name": "Qadın ziyafət geyimi", "product_description": "Düzənşən, yaz üçün", "product_price": 95},
        {"product_name": "Kişi sport formaları", "product_description": "Spandex, idman üçün", "product_price": 55},
        {"product_name": "Qadın bikini", "product_description": "Tropik nəqş, elastik", "product_price": 45},
        {"product_name": "Kişi çantası", "product_description": "Dizayner, əsas bölməsi", "product_price": 100},
        {"product_name": "Qadın ətri", "product_description": "Gül ətri, uzunömürlü", "product_price": 80},
        {"product_name": "Kişi şalı", "product_description": "Səliqəli, çoxrəngli", "product_price": 25},
        {"product_name": "Qadın sutyeni", "product_description": "Destəklənmiş, rahat", "product_price": 65}
      ]
    }
  ]
 
 while (true) {
    let action = prompt("Hansı əməliyyatı yerinə yetirmək istəyirsiniz? (Admin/Alıcı/END)");
    
    if (action === "Admin") {
      let adminAction = prompt("Nə etmək istəyirsiniz? (showAllProducts/searchProduct/deleteProduct/changeProductPrice/addProductToStore/sortProductsByPrice)");
  
    
      if (adminAction === "showAllProducts") {
        showAllProducts();
      } else if (adminAction === "searchProduct") {
        let productName = prompt("Axtarmaq istədiyiniz məhsulun adını daxil edin:");
        searchProduct(productName);
      } else if (adminAction === "deleteProduct") {
        let productName = prompt("Silmək istədiyiniz məhsulun adını daxil edin:");
        deleteProduct(productName);
      } else if (adminAction === "changeProductPrice") {
        let productName = prompt("Qiymətini dəyişmək istədiyiniz məhsulun adını daxil edin:");
        let newPrice = prompt("Yeni qiyməti daxil edin:");
        changeProductPrice(productName, parseFloat(newPrice));
      } else if (adminAction === "addProductToStore") {
        let storeIndex = prompt("Məhsulu hansı mağazaya əlavə etmək istəyirsiniz? (1, 2, 3)");
        let productName = prompt("Məhsulun adını daxil edin:");
        let productDescription = prompt("Məhsulun təsvirini daxil edin:");
        let productPrice = prompt("Məhsulun qiymətini daxil edin:");
        let product = { product_name: productName, product_description: productDescription, product_price: parseFloat(productPrice) };
        addProductToStore(parseInt(storeIndex) - 1, product);
      } else if (adminAction === "sortProductsByPrice") {
        let order = prompt("Qiymət sıralamasını necə etmək istəyirsiniz? (artan/azalan)");
        sortProductsByPrice(order);
      } else {
        alert("Düzgün əməliyyat seçilməyib!");
      }
  
    } else if (action === "Alici") {
        let buyerAction = prompt("Nə etmək istəyirsiniz? (showAllProducts/searchProduct/addProductToCart/showCart/sortProductsByPrice)");
    
       
        if (buyerAction === "showAllProducts") {
          showAllProductsForBuyer();
        } else if (buyerAction === "searchProduct") {
          let productName = prompt("Axtarmaq istədiyiniz məhsulun adını daxil edin:");
          searchProductForBuyer(productName);
        } else if (buyerAction === "addProductToCart") {
          let productName = prompt("Səbətə əlavə etmək istədiyiniz məhsulun adını daxil edin:");
          let product = searchProductForBuyer(productName);
          if (product) {
            addProductToCart(product);
          }
        } else if (buyerAction === "showCart") {
          showCart();
        } else if (buyerAction === "sortProductsByPrice") {
          let order = prompt("Qiymət sıralamasını necə etmək istəyirsiniz? (artan/azalan)");
          sortProductsByPriceForBuyer(order);
        } else {
          alert("Düzgün əməliyyat seçilməyib!");
        }
    
      } else if (action === "END") {
        break; 
      } else {
        alert("Düzgün əməliyyat seçilməyib!"); 
      }
    }
function showAllProducts() {
  shopGoods.forEach(shop => {
      console.log(`Mağaza: ${shop.store_name}, Ünvan: ${shop.store_address}`);
      shop.products.forEach(product => {
          console.log(`Məhsul adi: ${product.product_name}, Təsvir: ${product.product_description}, Qiymət: ${product.product_price}`);
      });
      console.log("\n");
  });
}
  function searchProduct(productName) {
    for (let i = 0; i < shopGoods.length; i++) {
      for (let j = 0; j < shopGoods[i].products.length; j++) {
        const product = shopGoods[i].products[j];
        if (product.product_name === productName) {
          console.log(`Məhsul adı: ${product.product_name}, Təsvir: ${product.product_description}, Qiymət: ${product.product_price}, Mağaza: ${shopGoods[i].store_name}`);
          return;
        }
      }
    }
    console.log("Məhsul tapılmadı.");
  }
  
  function deleteProduct(productName) {
    for (let i = 0; i < shopGoods.length; i++) {
      for (let j = 0; j < shopGoods[i].products.length; j++) {
        if (shopGoods[i].products[j].product_name === productName) {
          shopGoods[i].products.splice(j, 1);
          console.log(`${productName} məhsulu silindi.`);
          return;
        }
      }
    }
    console.log("Məhsul tapılmadı.");
  }

  function changeProductPrice(productName, newPrice) {
    for (let i = 0; i < shopGoods.length; i++) {
      for (let j = 0; j < shopGoods[i].products.length; j++) {
        if (shopGoods[i].products[j].product_name === productName) {
          shopGoods[i].products[j].product_price = newPrice;
          console.log(`${productName} məhsulunun yeni qiyməti ${newPrice} AZN oldu.`);
          return;
        }
      }
    }
    console.log("Məhsul tapilmadi.");
  }
  function addProductToStore(storeIndex, product) {
    shopGoods[storeIndex].products.push(product);
    console.log(`${product.product_name} məhsulu ${shopGoods[storeIndex].store_name} mağazasına əlavə edildi.`);
  }

  function sortProductsByPrice(order) {
    for (let i = 0; i < shopGoods.length; i++) {
      shopGoods[i].products.sort((a, b) => {
        if (order === "artan") {
          return a.product_price - b.product_price;
        } else if (order === "azalan") {
          return b.product_price - a.product_price;
        }
      });
    }
  }

  function showAllProductsForBuyer() {
    for (let i = 0; i < shopGoods.length; i++) {
      console.log(`Mağaza adi: ${shopGoods[i].store_name}`);
      for (let j = 0; j < shopGoods[i].products.length; j++) {
        const product = shopGoods[i].products[j];
        console.log(`Məhsul adı: ${product.product_name}, Təsvir: ${product.product_description}, Qiymət: ${product.product_price}`);
      }
    }
  }
  
  
  function searchProductForBuyer(productName) {
    for (let i = 0; i < shopGoods.length; i++) {
      for (let j = 0; j < shopGoods[i].products.length; j++) {
        const product = shopGoods[i].products[j];
        if (product.product_name === productName) {
          console.log(`Məhsul adı: ${product.product_name}, Təsvir: ${product.product_description}, Qiymət: ${product.product_price}, Mağaza: ${shopGoods[i].store_name}`);
          return;
        }
      }
    }
    console.log("Məhsul tapilmadi.");
  }
  
  function sortProductsByPriceForBuyer(order) {
    for (let i = 0; i < shopGoods.length; i++) {
      shopGoods[i].products.sort((a, b) => {
        if (order === "artan") {
          return a.product_price - b.product_price;
        } else if (order === "azalan") {
          return b.product_price - a.product_price;
        }
      });
    }
  }
  
  let shoppingCart = [];
  function addProductToCart(product) {
    shoppingCart.push(product);
    console.log(`${product.product_name} məhsulu səbətə əlavə edildi.`);
  }
  
  function showCart() {
    let total = 0;
    console.log("Alış-veriş səbəti:");
    for (let i = 0; i < shoppingCart.length; i++) {
      const product = shoppingCart[i];
      console.log(`${product.product_name} - ${product.product_price} AZN`);
      total += product.product_price;
    }
    console.log(`Cəm: ${total} AZN`);
  }

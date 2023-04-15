chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'get_product_info') {
    const productInfo = getProductInfo();
    sendResponse(productInfo);
  }
});

function getProductInfo() {
  const productInfo = [];
  const products = document.querySelectorAll('.goods-list-item');

  products.forEach((product) => {
    const titleElement = product.querySelector('.goods-item-title');
    const title = titleElement ? titleElement.textContent.trim() : '无标题';
    const priceElement = product.querySelector('.goods-price');
    const price = priceElement ? priceElement.textContent.trim() : '无价格';
    const imgElement = product.querySelector('.goods-item-image img');
    const imgUrl = imgElement ? imgElement.src : '无图片链接';

    productInfo.push({
      title: title,
      price: price,
      imgUrl: imgUrl,
    });
  });

  return productInfo;
}

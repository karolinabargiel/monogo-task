import CartPage from "../pages/cartPage";
import HeaderPage from "../pages/headerPage";
import ProductDetailPage from "../pages/productDetailPage";
import SearchResultPage from "../pages/searchResultPage";

export const initializePages = (page: any) => {
    const headerPage = new HeaderPage(page);
    const searchResultPage = new SearchResultPage(page);
    const productDetailPage = new ProductDetailPage(page);
    const cartPage = new CartPage(page);
  
    return { headerPage, searchResultPage, productDetailPage, cartPage };
  };
import CartPage from "../pages/cartPage";
import HomePage from "../pages/homepage";
import ProductDetailPage from "../pages/productDetailPage";
import SearchResultPage from "../pages/searchResultPage";

export const initializePages = (page: any) => {
    const homePage = new HomePage(page);
    const searchResultPage = new SearchResultPage(page);
    const productDetailPage = new ProductDetailPage(page);
    const cartPage = new CartPage(page);
  
    return { homePage, searchResultPage, productDetailPage, cartPage };
  };
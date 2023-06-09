import { inventoryAPI, dmgProductAPI } from "../../api/api";

const SET_PRODUCTS = "SET_PRODUCTS";
const SET_PRODUCTS_TOTAL = "SET_PRODUCTS_TOTAL";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_STATUS = "SET_STATUS";

let initialState = {
  products: [],
  total: 0,
  currentPage: 1,
  totalPages: 0,
  isFetching: true,
  status: true,
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };
    case SET_PRODUCTS_TOTAL:
      return {
        ...state,
        total: action.total,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.totalPages,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    default:
      return state;
  }
};

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};

export const setProductsTotal = (total) => {
  return {
    type: SET_PRODUCTS_TOTAL,
    total,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setTotalPages = (totalPages) => {
  return {
    type: SET_TOTAL_PAGES,
    totalPages,
  };
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const setToggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    dispatch(setToggleIsFetching(true));

    const inventoryPromise = inventoryAPI.deleteProduct(id);
    const dmgProductPromise = dmgProductAPI.deleteProduct(id);

    Promise.all([inventoryPromise, dmgProductPromise])
      .then(() => {
        dispatch(setToggleIsFetching(false));
        dispatch(getProducts());
      })
      .catch((error) => {
        console.error("Error:", error);
        dispatch(setToggleIsFetching(false));
      });
  };
};

export const getProducts = (name, page, status, search) => {
  return (dispatch) => {
    dispatch(setToggleIsFetching(true));
    inventoryAPI.getProducts(name, page, status, search).then((data) => {
      dispatch(setProducts(data.products));
      dispatch(setProductsTotal(data.total));
      dispatch(setTotalPages(data.totalPages));
      dispatch(setCurrentPage(data.currentPage));
      dispatch(setToggleIsFetching(false));
    });
  };
};

export const getStatus = () => {
  return (dispatch) => {
    inventoryAPI.updateProductsStatus().then((data) => {
      dispatch(setStatus(data.status));
    });
  };
};

export const updateProducts = (vendor_id, name, status) => {
  return (dispatch) => {
    dispatch(setStatus(true));
    inventoryAPI.updateProducts(vendor_id, name, status).then((data) => {
      dispatch(getProducts(vendor_id, name, status));
      dispatch(setStatus(false));
    });
  };
};

export default inventoryReducer;

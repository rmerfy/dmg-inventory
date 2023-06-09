import { wpsProductsAPI } from "../../api/api";

const SET_PRODUCTS = "SET_PRODUCTS";
const SET_SEARCH_KEYWORD = "SET_SEARCH_KEYWORD";
const SET_CURSOR = "SET_CURSOR";
const SET_ITEMS = "SET_ITEMS";
const SET_ITEMS_CURSOR = "SET_ITEMS_CURSOR";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
let initialState = {
  products: [],
  totalCount: 0,
  cursor: {
    current: "",
    next: "",
    prev: "",
  },
  items: [],
  itemsCursor: {
    current: "",
    next: "",
    prev: "",
  },
  searchKeyword: "",
  isFetching: true,
};

const wpsProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };
    case SET_CURSOR:
      return {
        ...state,
        cursor: action.cursor,
      };

    case SET_SEARCH_KEYWORD:
      return {
        ...state,
        searchKeyword: action.searchKeyword,
      };

    case SET_ITEMS:
      return {
        ...state,
        items: [...action.items],
      };
    case SET_ITEMS_CURSOR:
      return {
        ...state,
        itemsCursor: action.cursor,
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

export const setCursor = (cursor) => {
  return {
    type: SET_CURSOR,
    cursor,
  };
};

export const setSearchKeyword = (searchKeyword) => {
  return {
    type: SET_SEARCH_KEYWORD,
    searchKeyword,
  };
};

export const setItems = (items) => {
  return {
    type: SET_ITEMS,
    items,
  };
};

export const setItemsCursor = (cursor) => {
  return {
    type: SET_ITEMS_CURSOR,
    cursor,
  };
};

export const setToggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const getProducts = (name, cursor) => {
  return (dispatch) => {
    dispatch(setToggleIsFetching(true));
    wpsProductsAPI.getProducts(name, cursor).then((data) => {
      dispatch(setProducts(data.data));
      dispatch(setCursor(data.meta.cursor));
      dispatch(setToggleIsFetching(false));
    });
  };
};

export const getItems = (searchby, keyword, cursor) => {
  return (dispatch) => {
    dispatch(setToggleIsFetching(true));
    wpsProductsAPI.getItems(searchby, keyword, cursor).then((data) => {
      dispatch(setItems(data.data));
      dispatch(setItemsCursor(data.meta.cursor));
      dispatch(setToggleIsFetching(false));
    });
  };
};

export default wpsProductsReducer;

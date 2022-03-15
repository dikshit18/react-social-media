import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from "../constants/cartConstants";

// get the product id and the quantity of the item to add to the cart
export const addItem = (id, qty) => async (dispatch, getState) => {
  try {
    // const { data } = await axios.get(`/api/products/${id}`);
    const data = {
      rating: 4,
      numReviews: 2,
      price: 14999,
      countInStock: 10,
      _id: "615963e225a7193804bfd654",
      name: "Airpods Wireless Bluetooth Headphones",
      image: "/images/airpods.jpg",
      description:
        "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
      brand: "Apple",
      category: "Electronics",
      user: "615963e225a7193804bfd64f",
      reviews: [
        {
          rating: 4,
          _id: "6179572a983f6630d097b656",
          name: "Rajat M",
          user: "615970a5cc0fcf00041007cc",
          avatar:
            "https://kosellsbucket.s3.amazonaws.com/1633346589168__PROFILE.jpg",
          review: "Excellent quality!",
          createdAt: "2021-10-27T13:42:02.059Z",
          updatedAt: "2021-10-27T13:42:02.059Z",
        },
        {
          rating: 4,
          _id: "61c18f5e56cfa20004f59281",
          name: "Karan Sharma",
          user: "61c18ea756cfa20004f5920f",
          avatar:
            "https://s.gravatar.com/avatar/3ab48b046c641caf9987e62a0839c514?s=200&r=PG&d=identicon",
          review: "nice one",
          createdAt: "2021-12-21T08:25:02.238Z",
          updatedAt: "2021-12-21T08:25:02.238Z",
        },
      ],
      __v: 2,
      createdAt: "2021-10-03T08:03:46.954Z",
      updatedAt: "2021-12-21T08:25:02.238Z",
    };
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });

    // update the local storage with the new cart
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.error(error);
  }
};

// get the product id to be removed from the cart
export const removeItem = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    });
    // update the local storage with the updated cart
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.log(error);
  }
};

// get the shipping address data and dispatch corresponding action
export const saveShippingAddress = (data) => async (dispatch) => {
  try {
    dispatch({
      type: CART_SAVE_SHIPPING_ADDRESS,
      payload: data,
    });
    localStorage.setItem("shippingAddress", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

// get the option for payment and update the local storage as well
export const savePaymentMethod = (data) => async (dispatch) => {
  try {
    dispatch({
      type: CART_SAVE_PAYMENT_METHOD,
      payload: data,
    });
    localStorage.setItem("paymentMethod", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

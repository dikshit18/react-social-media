import {
  PRODUCT_DETAILS_FAILURE,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DELETE_FAILURE,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAILURE,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAILURE,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAILURE,
  PRODUCT_TOP_RATED_REQUEST,
  PRODUCT_TOP_RATED_SUCCESS,
  PRODUCT_TOP_RATED_FAILURE,
} from "../constants/productConstants";
import axios from "axios";

// list orders based on keyword and page number when paginated
export const listProducts =
  (keyword = "", pageNumber = "", pageSize = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });

      //   const { data } = await axios.get(
      //     `/api/products?keyword=${keyword}&pageNumber=${pageNumber}&pageSize=${pageSize}`
      //   );
      const data = {
        products: [
          {
            rating: 3.3333333333333335,
            numReviews: 3,
            price: 1949,
            countInStock: 4,
            _id: "615963e225a7193804bfd659",
            name: "Amazon Echo Dot 3rd Generation",
            image: "/images/alexa.jpg",
            description:
              "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
            brand: "Amazon",
            category: "Electronics",
            user: "615963e225a7193804bfd64f",
            reviews: [
              {
                rating: 4,
                _id: "61c58661c4943236846c9716",
                name: "Kevin",
                user: "6159afbde534d80004164c72",
                avatar:
                  "https://s.gravatar.com/avatar/e774ca40bf5de338d61ae725eec8ab54?s=200&r=PG&d=identicon",
                review: "Perfect holiday gift!",
                createdAt: "2021-12-24T08:35:45.898Z",
                updatedAt: "2021-12-24T08:35:45.898Z",
              },
              {
                rating: 3,
                _id: "61c586fac4943236846c9768",
                name: "Fred",
                user: "6159b2d6f9a1fb0004006974",
                avatar:
                  "https://s.gravatar.com/avatar/8334b4690c0cd26b87dd49867e8e4341?s=200&r=PG&d=identicon",
                review: "Could have other colors",
                createdAt: "2021-12-24T08:38:18.417Z",
                updatedAt: "2021-12-24T08:38:18.417Z",
              },
              {
                rating: 3,
                _id: "620fe15d757b7b0004ca9edc",
                name: "Umer",
                user: "620fdf35757b7b0004ca9e65",
                avatar:
                  "https://s.gravatar.com/avatar/cdaa050d4807eda3e316d4a082c8b5f8?s=200&r=PG&d=identicon",
                review: "Very bad",
                createdAt: "2022-02-18T18:11:41.543Z",
                updatedAt: "2022-02-18T18:11:41.543Z",
              },
            ],
            __v: 3,
            createdAt: "2021-10-03T08:03:46.957Z",
            updatedAt: "2022-02-18T18:11:41.543Z",
          },
          {
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
          },
          {
            rating: 4.5,
            numReviews: 2,
            price: 49990,
            countInStock: 7,
            _id: "615963e225a7193804bfd655",
            name: "iPhone 11 Pro 256GB Memory",
            image: "/images/phone.jpg",
            description:
              "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
            brand: "Apple",
            category: "Electronics",
            user: "615963e225a7193804bfd64f",
            reviews: [
              {
                rating: 5,
                avatar:
                  "https://kosellsbucket.s3.ap-south-1.amazonaws.com/1639232018018__rajatm_profile.jpeg",
                _id: "617951c1af3a2b245c1ee40a",
                name: "Rajat M",
                user: "615970a5cc0fcf00041007cc",
                review: "Worth every rupee!",
                createdAt: "2021-10-27T13:18:57.725Z",
                updatedAt: "2021-10-27T13:18:57.725Z",
              },
              {
                rating: 4,
                _id: "61c59dd159e0a50004c7e678",
                name: "Kevin",
                user: "6159afbde534d80004164c72",
                avatar:
                  "https://s.gravatar.com/avatar/e774ca40bf5de338d61ae725eec8ab54?s=200&r=PG&d=identicon",
                review: "Great price",
                createdAt: "2021-12-24T10:15:45.942Z",
                updatedAt: "2021-12-24T10:15:45.942Z",
              },
            ],
            __v: 2,
            createdAt: "2021-10-03T08:03:46.955Z",
            updatedAt: "2021-12-24T10:15:45.942Z",
          },
          {
            rating: 5,
            numReviews: 1,
            price: 2495,
            countInStock: 7,
            _id: "615963e225a7193804bfd658",
            name: "Logitech G-Series Gaming Mouse",
            image: "/images/mouse.jpg",
            description:
              "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
            brand: "Logitech",
            category: "Electronics",
            user: "615963e225a7193804bfd64f",
            reviews: [
              {
                rating: 5,
                _id: "618d29cba3ad3e000485f7d7",
                name: "Rajat M",
                user: "615970a5cc0fcf00041007cc",
                avatar:
                  "https://kosellsbucket.s3.amazonaws.com/1633346589168__PROFILE.jpg",
                review: "Great mouse!",
                createdAt: "2021-11-11T14:33:47.150Z",
                updatedAt: "2021-11-11T14:33:47.150Z",
              },
            ],
            __v: 1,
            createdAt: "2021-10-03T08:03:46.957Z",
            updatedAt: "2021-11-11T14:33:47.151Z",
          },
          {
            rating: 5,
            numReviews: 2,
            price: 92500,
            countInStock: 5,
            _id: "615963e225a7193804bfd656",
            name: "Cannon EOS 80D DSLR Camera",
            image: "/images/camera.jpg",
            description:
              "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
            brand: "Cannon",
            category: "Electronics",
            user: "615963e225a7193804bfd64f",
            reviews: [
              {
                rating: 5,
                avatar:
                  "https://kosellsbucket.s3.ap-south-1.amazonaws.com/1639232018018__rajatm_profile.jpeg",
                _id: "617955f51698f82600c68539",
                name: "Rajat M",
                user: "615970a5cc0fcf00041007cc",
                review: "Worth it!",
                createdAt: "2021-10-27T13:36:53.438Z",
                updatedAt: "2021-10-27T13:36:53.438Z",
              },
              {
                rating: 5,
                _id: "61e0095b35a7d80004120139",
                name: "Suresh Kumar",
                user: "61e0088135a7d800041200d1",
                avatar:
                  "https://s.gravatar.com/avatar/8e3fbe4a821e2bdf41aec26722a29a4e?s=200&r=PG&d=identicon",
                review: "TEST",
                createdAt: "2022-01-13T11:13:31.663Z",
                updatedAt: "2022-01-13T11:13:31.663Z",
              },
            ],
            __v: 2,
            createdAt: "2021-10-03T08:03:46.956Z",
            updatedAt: "2022-01-13T11:13:31.664Z",
          },
          {
            rating: 4,
            numReviews: 2,
            price: 24500,
            countInStock: 11,
            _id: "615963e225a7193804bfd657",
            name: "Sony Playstation 4 Pro White Version",
            image: "/images/playstation.jpg",
            description:
              "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
            brand: "Sony",
            category: "Electronics",
            user: "615963e225a7193804bfd64f",
            reviews: [
              {
                rating: 5,
                avatar:
                  "https://kosellsbucket.s3.ap-south-1.amazonaws.com/1633271385454__hsite.jpeg",
                _id: "6159be30f9a1fb0004006b41",
                name: "s mam",
                user: "6159bcb8f9a1fb0004006aa4",
                review: "amazing product\n",
                createdAt: "2021-10-03T14:29:04.624Z",
                updatedAt: "2021-10-03T14:29:04.624Z",
              },
              {
                rating: 3,
                _id: "6179700d74a78f00041cb5a2",
                name: "Rajat M",
                user: "615970a5cc0fcf00041007cc",
                review: "Decent quality",
                avatar:
                  "https://kosellsbucket.s3.ap-south-1.amazonaws.com/1639232018018__rajatm_profile.jpeg",
                createdAt: "2021-10-27T15:28:13.091Z",
                updatedAt: "2021-10-27T15:28:13.091Z",
              },
            ],
            __v: 2,
            createdAt: "2021-10-03T08:03:46.956Z",
            updatedAt: "2021-10-27T15:28:13.091Z",
          },
        ],
        page: 1,
        pages: 1,
      };
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// fetch details of a particular product
export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    //const { data } = await axios.get(`/api/products/${id}`);
    //console.log("Here", JSON.stringify(data));
    const data = {
      rating: 3.3333333333333335,
      numReviews: 3,
      price: 1949,
      countInStock: 4,
      _id: id,
      name: "Amazon Echo Dot 3rd Generation",
      image: "/images/alexa.jpg",
      description:
        "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
      brand: "Amazon",
      category: "Electronics",
      user: "615963e225a7193804bfd64f",
      reviews: [
        {
          rating: 4,
          _id: "61c58661c4943236846c9716",
          name: "Kevin",
          user: "6159afbde534d80004164c72",
          avatar:
            "https://s.gravatar.com/avatar/e774ca40bf5de338d61ae725eec8ab54?s=200&r=PG&d=identicon",
          review: "Perfect holiday gift!",
          createdAt: "2021-12-24T08:35:45.898Z",
          updatedAt: "2021-12-24T08:35:45.898Z",
        },
        {
          rating: 3,
          _id: "61c586fac4943236846c9768",
          name: "Fred",
          user: "6159b2d6f9a1fb0004006974",
          avatar:
            "https://s.gravatar.com/avatar/8334b4690c0cd26b87dd49867e8e4341?s=200&r=PG&d=identicon",
          review: "Could have other colors",
          createdAt: "2021-12-24T08:38:18.417Z",
          updatedAt: "2021-12-24T08:38:18.417Z",
        },
        {
          rating: 3,
          _id: "620fe15d757b7b0004ca9edc",
          name: "Umer",
          user: "620fdf35757b7b0004ca9e65",
          avatar:
            "https://s.gravatar.com/avatar/cdaa050d4807eda3e316d4a082c8b5f8?s=200&r=PG&d=identicon",
          review: "Very bad",
          createdAt: "2022-02-18T18:11:41.543Z",
          updatedAt: "2022-02-18T18:11:41.543Z",
        },
      ],
      __v: 3,
      createdAt: "2021-10-03T08:03:46.957Z",
      updatedAt: "2022-02-18T18:11:41.543Z",
    };
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// delete a particular product by taking an id
export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    // different headers are used when it is a social login, and when it is a std email login
    const config = userInfo.isSocialLogin
      ? {
          headers: {
            Authorization: `SocialLogin ${userInfo.id}`,
          },
        }
      : {
          headers: {
            Authorization: `Bearer ${userInfo.accessToken}`,
          },
        };

    const { data } = await axios.delete(`/api/products/${id}`, config);

    data && dispatch({ type: PRODUCT_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// create a product, when the user is an admin
export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    // different headers are used when it is a social login, and when it is a std email login
    const config = userInfo.isSocialLogin
      ? {
          headers: {
            "Content-Type": "application/json",
            Authorization: `SocialLogin ${userInfo.id}`,
          },
        }
      : {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.accessToken}`,
          },
        };

    const { data } = await axios.post(`/api/products/`, {}, config);

    dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// update the product details from the admin panel view
export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    // different headers are used when it is a social login, and when it is a std email login
    const config = userInfo.isSocialLogin
      ? {
          headers: {
            "Content-Type": "application/json",
            Authorization: `SocialLogin ${userInfo.id}`,
          },
        }
      : {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.accessToken}`,
          },
        };

    const { data } = await axios.put(
      `/api/products/${product._id}`,
      product,
      config
    );

    dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_UPDATE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// create a new product review for particular product
export const createProductReview =
  (productID, review) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      // different headers are used when it is a social login, and when it is a std email login
      const config = userInfo.isSocialLogin
        ? {
            headers: {
              "Content-Type": "application/json",
              Authorization: `SocialLogin ${userInfo.id}`,
            },
          }
        : {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userInfo.accessToken}`,
            },
          };

      await axios.post(`/api/products/${productID}/reviews`, review, config);

      dispatch({ type: PRODUCT_CREATE_REVIEW_SUCCESS });
    } catch (error) {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// fetch the top rated products for the carousel
export const getTopRatedProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TOP_RATED_REQUEST });

    //const { data } = await axios.get("/api/products/top");
    const data = [
      {
        rating: 5,
        numReviews: 2,
        price: 92500,
        countInStock: 5,
        _id: "615963e225a7193804bfd656",
        name: "Cannon EOS 80D DSLR Camera",
        image: "/images/camera.jpg",
        description:
          "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
        brand: "Cannon",
        category: "Electronics",
        user: "615963e225a7193804bfd64f",
        reviews: [
          {
            rating: 5,
            avatar:
              "https://kosellsbucket.s3.ap-south-1.amazonaws.com/1639232018018__rajatm_profile.jpeg",
            _id: "617955f51698f82600c68539",
            name: "Rajat M",
            user: "615970a5cc0fcf00041007cc",
            review: "Worth it!",
            createdAt: "2021-10-27T13:36:53.438Z",
            updatedAt: "2021-10-27T13:36:53.438Z",
          },
          {
            rating: 5,
            _id: "61e0095b35a7d80004120139",
            name: "Suresh Kumar",
            user: "61e0088135a7d800041200d1",
            avatar:
              "https://s.gravatar.com/avatar/8e3fbe4a821e2bdf41aec26722a29a4e?s=200&r=PG&d=identicon",
            review: "TEST",
            createdAt: "2022-01-13T11:13:31.663Z",
            updatedAt: "2022-01-13T11:13:31.663Z",
          },
        ],
        __v: 2,
        createdAt: "2021-10-03T08:03:46.956Z",
        updatedAt: "2022-01-13T11:13:31.664Z",
      },
      {
        rating: 5,
        numReviews: 1,
        price: 2495,
        countInStock: 7,
        _id: "615963e225a7193804bfd658",
        name: "Logitech G-Series Gaming Mouse",
        image: "/images/mouse.jpg",
        description:
          "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
        brand: "Logitech",
        category: "Electronics",
        user: "615963e225a7193804bfd64f",
        reviews: [
          {
            rating: 5,
            _id: "618d29cba3ad3e000485f7d7",
            name: "Rajat M",
            user: "615970a5cc0fcf00041007cc",
            avatar:
              "https://kosellsbucket.s3.amazonaws.com/1633346589168__PROFILE.jpg",
            review: "Great mouse!",
            createdAt: "2021-11-11T14:33:47.150Z",
            updatedAt: "2021-11-11T14:33:47.150Z",
          },
        ],
        __v: 1,
        createdAt: "2021-10-03T08:03:46.957Z",
        updatedAt: "2021-11-11T14:33:47.151Z",
      },
      {
        rating: 4.5,
        numReviews: 2,
        price: 49990,
        countInStock: 7,
        _id: "615963e225a7193804bfd655",
        name: "iPhone 11 Pro 256GB Memory",
        image: "/images/phone.jpg",
        description:
          "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
        brand: "Apple",
        category: "Electronics",
        user: "615963e225a7193804bfd64f",
        reviews: [
          {
            rating: 5,
            avatar:
              "https://kosellsbucket.s3.ap-south-1.amazonaws.com/1639232018018__rajatm_profile.jpeg",
            _id: "617951c1af3a2b245c1ee40a",
            name: "Rajat M",
            user: "615970a5cc0fcf00041007cc",
            review: "Worth every rupee!",
            createdAt: "2021-10-27T13:18:57.725Z",
            updatedAt: "2021-10-27T13:18:57.725Z",
          },
          {
            rating: 4,
            _id: "61c59dd159e0a50004c7e678",
            name: "Kevin",
            user: "6159afbde534d80004164c72",
            avatar:
              "https://s.gravatar.com/avatar/e774ca40bf5de338d61ae725eec8ab54?s=200&r=PG&d=identicon",
            review: "Great price",
            createdAt: "2021-12-24T10:15:45.942Z",
            updatedAt: "2021-12-24T10:15:45.942Z",
          },
        ],
        __v: 2,
        createdAt: "2021-10-03T08:03:46.955Z",
        updatedAt: "2021-12-24T10:15:45.942Z",
      },
      {
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
      },
    ];

    dispatch({ type: PRODUCT_TOP_RATED_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_TOP_RATED_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

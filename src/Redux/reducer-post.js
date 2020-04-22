const ADD_POST = "ADD_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const SET_POSTS = "SET_POSTS";
const DELETE_POST = "DELETE_POST";

let initialState = {
  postData: [],
  newPost: [],
  newPostDate: {
    name: "portfolio",
    price: "June 13, 2020",
    productImage: "",
    _id: ""
  }
};
const reducerPost = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostDate: {
          name: "",
          price: "",
          newPostFile: ""
        },
        ...state.postData[
          {
            _id: state.postData._id,
            name: state.postData.name,
            price: state.postData.price,
            productImage: state.postData.productImage,
            destination: state.postData.destination,
            Image: {
              type: state.postData.type,
              url: state.postData.url
            },
            request: {
              type: state.postData.type,
              utl: state.postData.url
            }
          }
        ],
        ...state.newPost[
          {
            _id: state.newPost._id,
            name: state.newPost.name,
            price: state.newPost.price,
            productImage: state.newPost.productImage,
            destination: state.newPost.destination,
            Image: {
              type: state.newPost.type,
              url: state.newPost.url
            },
            request: {
              type: state.newPost.type,
              utl: state.newPost.url
            }
          }
        ]
      };
    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostDate: {
          name: action.name,
          price: action.price,
          newPostFile: action.newPostFile
        }
      };
    case SET_POSTS: {
      return {
        ...state,
        postData: [...state.postData, ...action.postData]
      };
    }
    case DELETE_POST: {
      return {
       ...state,
        postData: [...action.postData]
      };
    }
    default:
      return state;
  }
};
export const addPostAC = () => ({ type: ADD_POST });
export const updatePostTextAC = (name, price, productImage, _id, url) => ({
  type: UPDATE_POST_TEXT,
  name: name,
  price: price,
  productImage: productImage,
  url: url,
  _id: _id
});
export const setPostAC = postData => ({ type: SET_POSTS, postData });
export const deletePost = postData => ({ type: DELETE_POST, postData });
export default reducerPost;



const ADD_BLOG = "ADD-BLOG";
const UPDATE_TEXT_BLOG = "UPDATE-TEXT-BLOG";
const SET_BLOG = "SET_BLOG";

let initialState = {
  blogData: [],
  newBlogData: {
    blogTitleItems: "",
    blogItemsIcons: "",
    textDesc: "",
    id: ""
  }
};

const reducerBlog = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG: {
      return {
        ...state,
        blogData: [
          ...state.blogData,
          {
            blogTitleItems: state.newBlogData.blogTitleItems,
            textDesc: state.newBlogData.textDesc,
            blogItemsIcons: state.newBlogData.blogItemsIcons
          }
        ],
        newBlogData: {
          blogTitleItems: "",
          textDesc: "",
          blogItemsIcons: ""
        }
      };
    }
    case UPDATE_TEXT_BLOG: {
      return {
        ...state,
        newBlogData: {
          blogTitleItems: action.blogTitleItems,
          textDesc: action.textDesc,
          blogItemsIcons: action.blogItemsIcons
        }
      };
    }
    case SET_BLOG: {
      return {
        ...state,
        blogData: [...state.blogData, ...action.blogData]
      };
    }
    default:
      return state;
  }
};
export const addBlogAC = () => ({ type: ADD_BLOG });
export const updateTextBlogAC = (title, text) => ({
  type: UPDATE_TEXT_BLOG,
  blogTitleItems: title,
  textDesc: text
});
export const setBlogCA = blogData => ({ type: SET_BLOG, blogData });
export default reducerBlog;

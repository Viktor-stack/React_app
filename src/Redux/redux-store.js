import { combineReducers, createStore } from "redux";
import reducerPost from "./reducer-post";
import reducerBlog from "./reducer-blob";
import {} from "redux-form";

const { devToolsEnhancer } = require("redux-devtools-extension");

let reducers = combineReducers({
  postsPage: reducerPost,
  blogPage: reducerBlog
});
const store = createStore(reducers, devToolsEnhancer());
export default store;

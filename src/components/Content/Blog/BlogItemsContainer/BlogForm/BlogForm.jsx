import React, { createRef } from "react";
import s from "./Form.module.scss";
import icon3 from "../../../../../Redux/Images/icon3.svg";
import icon2 from "../../../../../Redux/Images/icon2.svg";
import icon1 from "../../../../../Redux/Images/icon1.svg";

const BlogForm = props => {
  if (props.state.blogData.length === 0) {
    props.setBlogAC([
      {
        id: "1",
        blogItemsIcons: `${icon1}`,
        blogTitleItems: "Check out my latest portfolio items",
        textDesc:
          "Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies."
      },
      {
        id: "2",
        blogItemsIcons: `${icon2}`,
        blogTitleItems: "Offer Top Notch Quality Work & Services",
        textDesc:
          "Действие фантастического фильма «Алита: Боевой ангел» разворачивается спустя ровно триста лет после трагического конфликта, названного «Великой войной». Под утопическим городом располагается город-свалка, куда сбрасывают мусор и ненужных людей. Большую часть населения составляют Смотреть подробнее:"
      },
      {
        id: "3",
        blogItemsIcons: `${icon3}`,
        blogTitleItems: "Follow Me on Twitter, Facebook & Pinterest",
        textDesc:
          "Maecenas issue metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies."
      }
    ]);
  }
  let newBlogTitle = createRef();
  let newBlogText = createRef();
  let addBlog = () => {
    props.addBlogActionCreator();
  };
  let onBlogChange = () => {
    let title = newBlogTitle.current.value;
    let text = newBlogText.current.value;
    props.updateTextBlogActionCreator(title, text);
  };
  return (
    <div className="container">
      <div className={s.form}>
        <div className={s.line}>
          <input
            type="text"
            ref={newBlogTitle}
            value={props.state.newBlogData.blogTitleItems}
            onChange={onBlogChange}
          />
        </div>
        <div className={s.line}>
          <textarea
            ref={newBlogText}
            onChange={onBlogChange}
            value={props.state.newBlogData.textDesc}
          />
        </div>
        <div className={s.line}>
          <button onClick={addBlog}>Загркузить</button>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;

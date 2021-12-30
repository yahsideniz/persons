import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="Kemal" job="Graphic Designer" />
      <Person img="22" name="Deniz" job="Developer">
        <p>
          About Me Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Odio fuga sint, qui quaerat quod culpa. Exercitationem nulla debitis
          voluptates tenetur, aperiam nobis et veniam consequatur repudiandae.
          Veniam impedit neque deleniti.
        </p>
      </Person>
      <Person img="56" name="Ahmet" job="The Boss" />
    </section>
  );
};

ReactDom.render(<PersonList />, document.getElementById("root"));

import React from "react";
import "./Style-Article3-Main.css"

const Article3Main = ({name,text,imgSrc,title}) => {

  return (
    <>
      <article className="container-Article3-Main">
          <p className="text-Article3-Main">{text}</p>
          <div className="BIO">
          <img src={imgSrc} alt="imgBIO"  className="imgBIO"/>
            <div className="person">
              <p className="name-Article3-Main">{name}</p>
              <p className="title-Article3-Main">{title}</p>
            </div>
          </div>
      </article>  
    </>
  )
};

export default Article3Main;
import React from "react";
import "./Style-Article2-Main.css"
import productive from "./../../../assets/images/illustration-stay-productive.png"
import arrow from "./../../../assets/svg/icon-arrow.svg"

const Article2Main = () => {

  return (
    <>
      <article className="container-Article2-Main">
        <img src={productive} className="img-Article2-Main" alt="" />
        <div className="div-TEXT-Article2-Main">
          <h1 className="h1-Article2-Main">Stay productive, wherever you are</h1>
          <p className="p-Article2-Main">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
          <p className="p-Article2-Main">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
          <a className="a-Article2-Main" href="">See how Fylo works <img src={arrow} alt="" /></a>
        </div>
      </article>  
    </> 
  )
};

export default Article2Main;

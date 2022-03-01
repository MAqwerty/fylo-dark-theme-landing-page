import React from "react";
import "./Style-Article1-Main.css"
import collaboration from "./../../../assets/svg/icon-collaboration.svg"
import file from "./../../../assets/svg/icon-any-file.svg"
import security from "./../../../assets/svg/icon-security.svg"
import anywhere from "./../../../assets/svg/icon-access-anywhere.svg"

const Article1Main = () => {

  return (
    <>
      <article className="container-Article1-Main">
        <div className="Parts-Article1-Main">
          <img src={collaboration} className="SVG-Article1-Main" alt="" />
          <h3 className="h3-Article1-Main">Access your files, anywhere</h3>
          <p className="p-Article1-Main">The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
        </div>
        <div className="Parts-Article1-Main">
          <img src={file} className="SVG-Article1-Main" alt="" />
          <h3 className="h3-Article1-Main">Security you can trust</h3>
          <p className="p-Article1-Main">2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
        </div>
        <div className="Parts-Article1-Main">
          <img src={security} className="SVG-Article1-Main" alt="" />
          <h3 className="h3-Article1-Main">Real-time collaboration</h3>
          <p className="p-Article1-Main">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        </div>
        <div className="Parts-Article1-Main">
          <img src={anywhere} className="SVG-Article1-Main" alt="" />
          <h3 className="h3-Article1-Main">Store any type of file</h3>
          <p className="p-Article1-Main">Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
        </div>
      </article>  
    </>
  )
};

export default Article1Main;

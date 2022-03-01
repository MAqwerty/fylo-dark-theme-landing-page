import React from "react";
import "./Style-Article4-Main.css"
import { useState , useEffect } from "react";

const Article4Main = () => {

  const[value,Setvalue]=useState("")

  useEffect(() => {
    function validateEmail (emailAdress){

      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (emailAdress.match(regexEmail)) {
        document.getElementById("Message").style.display = "none";
      } 
      else {
        document.getElementById("Message").style.display = "block";
      }
    }
    function TESTEmail (emailAdress){
      emailAdress=value
      validateEmail(emailAdress)
    }
    document.getElementById("BTNsubmit").addEventListener("click",TESTEmail);
  });

  return (
    <>
      <article className="container-Article4-Main">
        <h1 className="h1-Article4-Main">Get early access today</h1>
        <p className="p-Article4-Main">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>  
          <form action="" method="post" className="form-Article4-Main">
            <input type="email" name="" id="" onChange={(e) => Setvalue(e.target.value)} value={value} className="input-Article4-Main" placeholder="email@example.com" />
            <p className="p-valid-email" id="Message">please enter a valid email address</p>
            <button type="submit" className="BTN-Article4-Main" id="BTNsubmit">Get Started For Free</button>
          </form>
      </article>  
    </>
    
  )
};

export default Article4Main;

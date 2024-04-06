import React from 'react';
import svg from "../../assets/404.svg";

const ErrorPage = () => {
  return (
    <div className="container-404">
      <img src={svg} alt='svg' />
      <button>Back to Home</button>
    </div>
  )
}

export default ErrorPage

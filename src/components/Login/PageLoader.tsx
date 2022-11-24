import React from 'react'
import loading from "../image/loading.webp";


const PageLoader = () => {
  return (
    <div className='PageLoader'><img src={loading} alt="..loading" /></div>
  );
}

export default PageLoader
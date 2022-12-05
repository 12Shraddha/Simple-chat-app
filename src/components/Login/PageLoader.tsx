import React from 'react'
import loading from "../image/loading.webp";


const PageLoader = () => {
  return (
    <div className="PageLoader">
      <img
        src={loading}
        alt="..loading"
        width="50"
        height="auto"
      />
    </div>
  );
}

export default PageLoader
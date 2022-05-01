import React from "react";
import ContentLoader from "react-content-loader";
import '../styles/Loader.css';

const Loader = (props) => {
  return (
    <div className="Loader">
      <ContentLoader
        width="100%"
        height={750}
        viewBox="0 0 1200 750"
        backgroundColor="#11072f"
        foregroundColor="#2a1b57"
        {...props}
      >
        <rect x="1%" y="50" rx="2" ry="2" width="24%" height="200" />
        <rect x="26%" y="50" rx="2" ry="2" width="24%" height="200" />
        <rect x="51%" y="50" rx="2" ry="2" width="24%" height="200" />
        <rect x="76%" y="50" rx="2" ry="2" width="24%" height="200" />

        <rect x="1%" y="260" rx="2" ry="2" width="24%" height="200" />
        <rect x="26%" y="260" rx="2" ry="2" width="24%" height="200" />
        <rect x="51%" y="260" rx="2" ry="2" width="24%" height="200" />
        <rect x="76%" y="260" rx="2" ry="2" width="24%" height="200" />


        <rect x="1%" y="470" rx="2" ry="2" width="24%" height="200" />
        <rect x="26%" y="470" rx="2" ry="2" width="24%" height="200" />
        <rect x="51%" y="470" rx="2" ry="2" width="24%" height="200" />
        <rect x="76%" y="470" rx="2" ry="2" width="24%" height="200" />

      </ContentLoader>
    </div>
  );
};

export default Loader;

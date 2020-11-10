import React from 'react';
import ContentLoader from 'react-content-loader';


const Loading = ({}) => {
    return (
    <ContentLoader 
        speed={2}
        width={670}
        height={200}
        viewBox="0 0 670 200"
        backgroundColor="#c2c2c2"
        foregroundColor="#ecebeb"
      >
        <rect x="12" y="18" rx="0" ry="0" width="216" height="150" /> 
        <rect x="247" y="20" rx="0" ry="0" width="320" height="25" /> 
        <rect x="248" y="58" rx="0" ry="0" width="47" height="23" /> 
        <rect x="248" y="88" rx="0" ry="0" width="147" height="25" /> 
        <rect x="245" y="119" rx="0" ry="0" width="328" height="46" /> 
        <rect x="304" y="58" rx="0" ry="0" width="47" height="23" />
    </ContentLoader>
    )
}

export default Loading;
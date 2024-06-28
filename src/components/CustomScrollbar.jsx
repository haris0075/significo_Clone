import React from 'react';
// import { Scrollbars } from 'react-custom-scrollbars';

const CustomScrollbar = ({ children }) => {
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      renderTrackVertical={({ style, ...props }) => (
        <div
          {...props}
          className="absolute right-0 top-0 bottom-0 bg-gray-200 rounded-full"
          style={{ ...style, width: '6px' }}
        />
      )}
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          className="absolute bg-gray-500 rounded-full"
          style={{ ...style, width: '6px' }}
        />
      )}
    >
      {children}
    </Scrollbars>
  );
};

export default CustomScrollbar;

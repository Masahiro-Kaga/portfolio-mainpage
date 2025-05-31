import React from 'react';

const LoadingScreen = ({ isFadingOut }) => {
  return (
    <div className={`fixed inset-0 bg-white z-50 flex items-center justify-center ${isFadingOut ? 'loading-fadeout' : ''}`}>
      <div className="text-center">
        {/* メインローディングアニメーション */}
        <div className="relative">
          <div className="loading-circle"></div>
          <div className="loading-circle-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

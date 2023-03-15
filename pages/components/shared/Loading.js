import React from 'react';

const Loading = () => {
    return (
        <div className="w-fit left-[42%] absolute">
            <div className="w-16 h-16 lg:w-40 lg:h-40 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;
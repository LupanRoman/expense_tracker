import React from 'react';
import { BsFillMoonFill } from 'react-icons/bs';

const TopBar = () => {
  return (
    <>
      <div>
        <h1>E-Track</h1>
        <div>
          <button>
            <BsFillMoonFill />
          </button>
        </div>
      </div>
    </>
  );
};

export default TopBar;

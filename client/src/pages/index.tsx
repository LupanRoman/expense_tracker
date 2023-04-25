import React from 'react';
import Link from 'next/link';

const index = () => {
  // !! Landing page
  return (
    <>
      <div>
        <Link href={'/Dashboard'}>Sign Up</Link>
      </div>
    </>
  );
};

export default index;

import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-primary h-[60px]">
      <div className="container flex justify-between">
        <h3 className="text-xl pt-4 cursor-pointer text-white font-bold">
          Movie Media
        </h3>
        <div className="mt-[17px] cursor-pointer">
          <p className="font-medium text-white -ml-3">Jhon D.</p>
          <div className="w-[40px] h-[40px] overflow-hidden rounded-full">
            <Image
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="User"
              width={40}
              height={40}
              className="overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

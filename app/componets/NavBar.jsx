import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

const NavBar = () => {
  return (
    <div className="absolute z-[980] inset-x-0">
      <div className="fixed w-[1920px] mt-0 top-0 box-border invisible">
        <div className="ease-linear transition bg-black backdrop-blur-2xl relative z-[990]">
          <div className="max-w-none pl-[40] pr-[40] flow-root box-content mx-auto">
            <nav className="flex relative mb-0 gap-[25] items-center">
              <div className="flex gap-[25] items-center">1</div>
              <div className="flex gap-[25] items-center absolute top-[50%] left-[50%] max-w-max transform translate-y-2/4 translate-x-2/4 border-box z-[990]">
                <Link href="/">
                  <Image
                    src="/logo.bmp"
                    width={200}
                    height={54}
                    alt="roadhouse"
                  />
                </Link>
              </div>
              <div className="flex gap-[25] items-center ml-auto">3</div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar
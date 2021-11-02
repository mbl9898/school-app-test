import React from 'react';

interface Props {
  name: string;
  src: string;
}

const NavLink = ({ name, src }: Props) => {
  return (
    <>
      <div className="flex py-5 px-3">
        <img className="h-full" src={src} alt="icon" height="60" width="60" />
        <a className="flex items-center py-2.5 px-4 font-semibold" href="/">
          {name}
        </a>
      </div>
    </>
  );
};

export default NavLink;

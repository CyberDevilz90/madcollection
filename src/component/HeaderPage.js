import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      Mad Collection
      <div>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/produk"}>Produk</Link>
          </li>
          <li>
            <Link href={"/maps"}>Offline Store</Link>
          </li>
          <li>
            <Link href={"/about"}>Tentang Kami</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

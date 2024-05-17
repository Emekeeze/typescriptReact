import {type ReactNode } from "react";

type HeaderProps = {
  image: string;
  alt: string;
  children: ReactNode;
};

export default function Header({ image, alt, children }: HeaderProps) {
  return (
    <header>
      <img src={image} alt={alt} />
      {children}
    </header>
  );
}

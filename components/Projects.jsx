import React from "react";
import Image from "next/image";
import { Button } from "./Button";

export function ProjectList() {
  return (
    <section className="p-3 w-full">
      <h1 className="text-5xl text-center my-3">PROJECT LIST</h1>
      <section name="projectList" className="container grid gap-5 items-center justify-center ">
        <div name="card-1" className="grid prose grid-cols-1 place-center bg-gray-700 p-5 rounded">
          <h2> Personal Website </h2>   
          <Image src="/Website1.png" layout="responsive" width="300" height={"200"} />
          <p> my personal website with minimalist design and simple. this website use React,NextJs and Tailwindcss</p>
        </div>
        <div name="card-2" className="grid prose grid-cols-1 place-center bg-gray-700 p-5 rounded">
          <h2>NASA Media Library Searcher</h2>   

          <Image src="/web2.png" layout="intrinsic" width="300" height={"300"} />
          <p>this consume NASA OPEN API,you can search a beautiful image and videos here.this project used react and tailwindcss to make things a lot faster and easiear</p>
        </div>
        <div name="card-2" className="grid my-5 prose grid-cols-1 place-center bg-gray-700 p-5 rounded">
          <h2>WikiSearcher</h2>   
          <p>this project used HTML CSS AND JAVASCRIPT. you can search wikipedia with more simpler interface with this website</p>
        </div>
      </section>
    </section>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsCalendar2Fill } from "react-icons/bs";

const Page = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("/postdata.json")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div className="mt-[120px]">
      {/* Author container */}
      <div className="flex flex-col justify-centerm-16 text-center gap-3 items-center">
        <div className="flex p-1 border rounded-lg justify-center w-[200px] h-[200px] aspect-square">
          {" "}
          <img
            className="w-[100%] object-fill rounded-lg"
            src="/images/author-image.jpg"
            alt=""
          />
        </div>
        <h1 className="text-4xl text-[#BA0060] font-bold">Talha Ubaidullah</h1>
        <h2 className="text-gray-500 font-bold">Writer and Researcher</h2>
        <h3 className="md:w-[800px] w-full px-4">
          Talha Ubaidullah is an award-winning author known for her compelling
          storytelling and vivid imagination. Her works explore themes of
          resilience, identity, and the human condition, captivating readers
          worldwide.
        </h3>
        <div className="flex flex-row justify-center items-center gap-6">
          <Link href={"#"}>
            <Image
              src="/images/facebook-logo.png"
              alt="instagram-logo"
              width={40}
              height={34}
            />
          </Link>
          <Link href={"#"}>
            <Image
              className="rounded-full"
              src="/images/instagram-logo.png"
              alt="instagram-logo"
              width={29}
              height={32}
            />
          </Link>
          <Link href={"#"}>
            <Image
              src="/images/twitter-logo.webp"
              alt="tweeter-logo"
              width={32}
              height={32}
            />
          </Link>
          <Link href={"#"}>
            <Image
              src="/images/linkdin-logo.png"
              alt="linkdin-logo"
              width={32}
              height={32}
            />
          </Link>
          <Link href={"#"}>
            <Image
              src="/images/redit-logo.png"
              alt="redit-logo"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>

<div className="m-9">
<div className="flex mb-4 flex-row justify-between items-center">
          <p className="text-2xl text-[#310048] font-bold">Talha's Posts</p>
          <div className="border bg-white p-2 rounded-lg">
            <p>Most Recnt</p>
          </div>
        </div>
<div className=" grid md:grid-cols-3 lg:grid-cols-4 gap-8">
       
       {posts.slice(0, 12).map((post) => (
<Link key={post.post_id} href={`/post/${post.post_title}`}>
<div
           className="flex flex-col p-4 h-full bg-white border rounded-xl"
           key={post.post_id}
         >
           <div className="flex flex-col justify-center items-center gap-3">
             <div className="flex justify-center aspect-square w-full max-h-[200px]">
               <img
                 className="w-[100%] object-cover rounded-xl"
                 src={post.feature_image}
                 alt=""
               ></img>
             </div>
             <div className="flex gap-4 items-center justify-center text-xs rounded-xl border w-36 h-6 ">
               <BsCalendar2Fill />
               <p>{post.post_date}</p>
             </div>
           </div>
           <div className="flex flex-col gap-2 mt-3">
             <p className="text-2xl h-[64px] font-bold line-clamp-2">{post.post_title}</p>
             <p className="line-clamp-3">{post.article}</p>
           </div>
         </div>
</Link>
       ))}
     </div>
</div>
    </div>
  );
};

export default Page;

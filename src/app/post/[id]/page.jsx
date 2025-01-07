"use client";
import React, { useEffect, useState } from "react";
import { BsCalendar2Fill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

import { FaFacebook } from "react-icons/fa6";

const Post = () => {
  const [posts, setPost] = useState([]);

  console.log("jjjjjjjjjj", posts);
  useEffect(() => {
    fetch("/postdata.json")
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Thik hoy nai", err));
  }, []);

  const trendingTopics = new Set();
  posts.forEach((post) => {
    if (post.trending_topic) {
      post.trending_topic
        .split(", ")
        .forEach((topic) => trendingTopics.add(topic));
    }
  });
  return (
    <div className="mt-[130px]">
      {posts.length}
      <div>
        {posts.slice(0, 1).map((post) => (
          <div key={post.post_id} className="">
            {/* parent div */}
            <div className="">
              {/*Article header */}
              <div className="flex flex-col gap-3 justify-center items-center mx-16">
                <h1 className="font-bold text-4xl ">{post.post_title}</h1>
                <div className="flex flex-row gap-8">
                  <h2 className="text-[#BA0060] font-bold">
                    {post.author_name}
                  </h2>
                  <div className="flex gap-4 items-center justify-center rounded-xl border w-44 h-7 ">
                    <BsCalendar2Fill />
                    <p>{post.post_date}</p>
                  </div>
                </div>
                <div className="flex flex-wrap p-2 gap-2 rounded-xl">
                  {[...trendingTopics].slice(0, 1).map((topic, index) => (
                    <div
                      key={index}
                      className="flex bg-[#EAE6ED] text-center w-max text-xs  text-black rounded-lg p-1"
                    >
                      <p>
                        <span>{topic}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Article Body */}
              <div className="flex mx-8 mt-11">
                <div className="flex flex-col justify-center items-center w-[100px] gap-6">
                  <Link href={"#"}>
                    <FaFacebook className="text-blue-600 bg-white rounded-full" />
                  </Link>
                  <Link href={"#"}>
                    <Image
                      className="rounded-full"
                      src="/images/instagram-logo.png"
                      alt="instagram-logo"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href={"#"}>
                    <Image
                      src="/images/whatsapp-logo.png"
                      alt="whatsapp-logo"
                      width={32}
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
                      src="/images/youtube-logo.jpg"
                      alt="youtube-logo"
                      width={34}
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
                      className="bg-white rounded-full"
                      src="/images/tumbler-logo.png"
                      alt="tumbler-logo"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href={"#"}>
                    <Image
                      className="bg-white rounded-full"
                      src="/images/pinterest-logo.webp"
                      alt="pinterest-logo"
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
                <div className="w-3/4 ">
herrrr
                </div>
                <div className="w-1/4">
jjjjjj
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;

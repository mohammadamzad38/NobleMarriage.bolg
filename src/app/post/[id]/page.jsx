"use client";
import React, { useEffect, useState } from "react";
import { BsCalendar2Fill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/components/buttons/primary-button";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

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
      <div>
        {posts.slice(0, 1).map((post) => (
          <div key={post.post_id} className="">
            {/* parent div */}
            <div className="">
              {/*Article header */}
              <div className="flex flex-col gap-4 justify-center items-center mx-16">
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
              <div className="flex mx-9 gap-8 mt-11">
                <div className="flex flex-col justify-center items-center w-[50px] gap-6">
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
                {/* Article */}
                <div className="w-3/4 ">
                  <div>{post.article}</div>
                  <div className="flex justify-between mt-8">
                    <Link href={"#"}>
                      <PrimaryButton
                        icon={<FaArrowLeft />}
                        text={"Previous Post"}
                      />
                    </Link>
                    <Link href={"#"}>
                      <PrimaryButton
                        text={"Next Post "}
                        icon={<FaArrowRight />}
                      />
                    </Link>
                  </div>
                  {/* Comment Form */}
                  <div className="mt-11">
                    <p className="font-bold text-3xl text-[#BA0060]">Comment Form</p>
                    <div className="flex justify-center items-center">
                      <div className="flex flex-col gap-3 w-1/6">
                        <p>Your name <span className="text-red-600">*</span></p>
                        <div className="">
                          <p>Your email <span className="text-red-600">*</span></p>
                          <p className="text-xs text-gray-400">(Will not be published)</p>
                        </div>
                        
                      </div>
                      <div className="flex flex-col gap-3 w-3/4">
                      <input className="text-xs p-3 rounded-md pl-5" type="text" placeholder="Enter your name" />
                      <input className="text-xs p-3 rounded-md pl-5" type="text" placeholder="Enter your name" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Side adges */}
                <div className="flex flex-col w-1/4 gap-8">
                  <div className="border bg-gradient-to-r from-[#E7E5FB] to-[#E2E3FC] ... p-5 rounded-xl">
                    <p className="text-xl font-bold text-[#BA0060]">
                      Table of Contents
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-[#310048] mb-3">
                      Featured
                    </p>
                    <img
                      className="border w-[100%] rounded-xl"
                      src="/./images/dammy/Screenshot_1.png"
                    ></img>
                  </div>
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

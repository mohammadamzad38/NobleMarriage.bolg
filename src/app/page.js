"use client";
import { useEffect, useState } from "react";
import { BsCalendar2Fill } from "react-icons/bs";
import PrimaryButton from "@/components/buttons/primary-button";
import { FaArrowRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Pagination } from "antd";
import { Carousel } from "antd";
import Link from "next/link";

export default function Home() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const [posts, setPost] = useState([]);

  console.log("hhhhhhhhhhhh", posts);
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

  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div>
      <Carousel className="mt-32 mx-8 rounded-xl" afterChange={onChange}>
        <div>
          {posts.slice(0, 1).map((latestPost) => (
            <div key={latestPost.post_id}>
              <div className="">
                <div className="flex justify-center aspect-square h-[600px] w-full">
                  <img
                    className="w-[100%] object-fill rounded-3xl"
                    src={latestPost.feature_image}
                  ></img>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Carousel>
      <p className="mx-8 mt-8 font-bold text-2xl text-[#310048]">
        Latest Contents
      </p>
      <div className="flex gap-8 text-black  m-8">
        <div className="flex flex-col gap-10 w-3/4">
          {posts.slice(0, 8).map((post) => (
            <div key={post.post_id}>
              <div className="flex items-center gap-4 bg-white p-5 rounded-xl">
                <div className="flex justify-center w-1/6 h-[192px] aspect-square">
                  <img
                    className="w-[100%] object-fill rounded-3xl"
                    src={post.feature_image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col w-5/6 ">
                  <div className="flex justify-between mb-4">
                    <p className="text-[#BA0060] font-bold">
                      {post.author_name}
                    </p>
                    <div className="flex gap-4 items-center justify-center rounded-xl border w-44 h-7 ">
                      <BsCalendar2Fill />
                      <p>{post.post_date}</p>
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold mb-2">{post.post_title}</h1>
                  <article className="text-sm text-gray-500 overflow-hidden">
                    {post.article}
                  </article>

                  <div className="flex justify-end mt-9">
                    <Link href={`/post/${post.post_id}`}>
                    <PrimaryButton text={"Read"} icon={<FaArrowRight />} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/4">
          <div className="relative">
            <FaSearch className="absolute top-3 left-5 text-gray-500" />
            <input
              className="border bg-img px-14 py-2 rounded-2xl"
              type="text"
              placeholder="Search"
            ></input>
          </div>
          <div className="bg-gradient-to-r from-[#3F429D] to-[#310048] p-4 my-8 rounded-xl">
            <div className="flex justify-between">
              <p className="text-xl font-bold text-white">Trending Topics</p>
              <p className="border text-xs rounded-3xl text-[#BA0060] bg-[#F8E6EF] p-2">
                View all Topics
              </p>
            </div>
            <div className="flex flex-wrap mt-5 p-2 gap-2 rounded-xl">
              {[...trendingTopics].map((topic, index) => (
                <div
                  key={index}
                  className="flex bg-white text-center w-max text-xs  text-black rounded-lg p-1"
                >
                  <p>
                    <span>{topic}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-lg font-bold text-[#310048] mb-3">Featured</p>
            <img
              className="border w-[100%] rounded-xl"
              src="./images/dammy/Screenshot_1.png"
            ></img>
          </div>
          <div className="my-8">
            <p className="text-lg font-bold text-[#310048] mb-3">
              Most Popular
            </p>
            <div className="flex flex-col gap-2">
              {posts.slice(0, 8).map((post) => (
                <div
                  key={post.post_id}
                  className="flex gap-2 p-2 bg-white rounded-xl"
                >
                  <div className="flex justify-center aspect-square w-1/5 h-[87px]">
                    <img
                      className="w-[100%] object-fit rounded-xl"
                      src={post.feature_image}
                      alt=""
                    ></img>
                  </div>
                  <div className="w-4/5 pr-2">
                    <p className="font-bold truncate mb-2">{post.post_title}</p>
                    <article className="truncate">{post.article}</article>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Pagination className="ml-[570px] my-8" defaultCurrent={1} total={50} />
    </div>
  );
}

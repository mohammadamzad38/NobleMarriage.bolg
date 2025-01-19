"use client";
import { useEffect, useState } from "react";
import { BsCalendar2Fill } from "react-icons/bs";
import PrimaryButton from "@/components/buttons/primary-button";
import { FaArrowRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


import { Carousel } from "antd";
import Link from "next/link";
import Search from "@/components/searchModal/Search";

export default function Home({onClose}) {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const [posts, setPost] = useState([]);
  const [tabs, setTab] = useState('latest');
  const [searchModal, setSearchModal] = useState(false);

  const tabItems = [{label : 'Latest Contents', value : 'latest'} , {label : 'Most Popular', value : 'mostPopular'}, {label : 'Trending Topics', value : 'trending'}]

  useEffect(() => {
    fetch("/postdata.json")
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Check this error", err));
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
    <div>
      <Carousel
        className="md:mt-32 mt-24  md:mx-8 mx-4 rounded-xl"
        afterChange={onChange}
      >
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

      {/* Mobile Design */}
      
      <div className="flex lg:hidden m-4 justify-between bg-white p-2 rounded-xl border ">
        {
          tabItems.map((tab) => <div className={`${tabs === tab.value ? 'bg-[#310048] text-white' : ''} cursor-pointer p-2 rounded-xl`} onClick={()=> {setTab(tab.value)}} key={tab.value}>
            {tab.label}
          </div>)
        }
      </div>
      <div className="flex lg:hidden gap-8 text-black m-8 ">
          <div className="flex flex-col gap-10 w-full">
            {posts.slice(0, 7).map((post) => (
              <div key={post.post_id}>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-white p-5 rounded-xl">
                  <div className="flex justify-center w-full md:w-2/6 h-[192px] aspect-square">
                    <img
                      className="w-[100%] object-cover rounded-3xl"
                      src={post.feature_image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col w-5/6 ">
                    <div className="flex justify-between mb-4">
                      <Link href={`/author/${post.author_name}`}>
                        <p className="text-[#BA0060] font-bold">
                          {post.author_name}
                        </p>
                      </Link>
                      <div className="flex gap-4 items-center justify-center rounded-xl border w-44 h-7 ">
                        <BsCalendar2Fill />
                        <p>{post.post_date}</p>
                      </div>
                    </div>
                    <h1 className="text-2xl font-bold mb-2">
                      {post.post_title}
                    </h1>
                    <article className="text-sm text-gray-500 line-clamp-3 ">
                      {post.article}
                    </article>

                    <div className="flex justify-end mt-9">
                      <Link href={`/post/${post.post_title}`}>
                        <PrimaryButton text={"Read"} icon={<FaArrowRight />} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      {/* End mobile Design */}
      <div className="hidden lg:block">
        <p className="mx-8 mt-8  font-bold text-2xl text-[#310048]">
          Latest Contents
        </p>
        <div className="flex gap-8 text-black m-8 ">
          <div className="flex flex-col gap-10 w-3/4">
            {posts.slice(0, 7).map((post) => (
              <div key={post.post_id}>
                <div className="flex items-center gap-4 bg-white p-5 rounded-xl">
                  <div className="flex justify-center w-1/6 h-[192px] aspect-square">
                    <img
                      className="w-[100%] object-cover rounded-3xl"
                      src={post.feature_image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col w-5/6 ">
                    <div className="flex justify-between mb-4">
                      <Link href={`/author/${post.author_name}`}>
                        <p className="text-[#BA0060] font-bold">
                          {post.author_name}
                        </p>
                      </Link>
                      <div className="flex gap-4 items-center justify-center rounded-xl border w-44 h-7 ">
                        <BsCalendar2Fill />
                        <p>{post.post_date}</p>
                      </div>
                    </div>
                    <h1 className="text-2xl font-bold mb-2">
                      {post.post_title}
                    </h1>
                    <article className="text-sm text-gray-500 line-clamp-3 ">
                      {post.article}
                    </article>

                    <div className="flex justify-end mt-9">
                      <Link href={`/post/${post.post_title}`}>
                        <PrimaryButton text={"Read"} icon={<FaArrowRight />} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:block hidden w-1/4">
            <div onClick={() => setSearchModal(true)} className="relative">
              <FaSearch className="absolute top-[15px] left-5 text-gray-500" />
              <input
                className="border bg-img w-full py-2 pl-16 rounded-2xl"
                type="text"
                placeholder="Search"
              ></input>
            </div>
            {searchModal && <Search onClose={() => setSearchModal(false)} />}
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
                      <p className="font-bold truncate mb-2">
                        {post.post_title}
                      </p>
                      <article className="line-clamp-2">{post.article}</article>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

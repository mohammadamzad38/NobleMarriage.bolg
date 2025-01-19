"use client";
import React, { useEffect, useState } from "react";
import { BsCalendar2Fill } from "react-icons/bs";
import { Select, Space } from "antd";


const Category = () => {
  const [posts, setPost] = useState([]);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

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
    <div className="mt-[120px]">
      <div className="flex flex-col justify-center items-center text-center m-16">
        <div className="flex flex-col gap-3">
          <p className="text-gray-400 font-bold">Category</p>
          <h1 className="text-4xl text-[#310048] font-bold">
            Explore All categories
          </h1>
          <h2>
            You can ignore the pixel density and the actual screen resolution
            when designing. Instead, design for the effective resolution (the
            resolution in effective pixels) for a size class.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center md:w-[688px] w-full items-center mt-8 gap-2 rounded-xl">
          {[...trendingTopics].map((topic, index) => (
            <div
              key={index}
              className="flex bg-[#EAE6ED] text-center w-max text-xs  text-[#310048] rounded-lg p-1"
            >
              <p>
                <span>{topic}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="m-9">
        <div className="flex mb-4 flex-row justify-end">
        <div>
            <Space>
              <Select
                defaultValue="recent"
                style={{
                  width: 120,
                  font: 600,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "recent",
                    label: "Most Recent",
                  },
                  {
                    value: "popular",
                    label: "Most Popular",
                  },
                  {
                    value: "oldest",
                    label: "Oldest",
                  },
                ]}
              />
            </Space>
          </div>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {posts.slice(0, 12).map((post) => (
            <div
              className="flex flex-col p-4 h-full bg-white border rounded-xl"
              key={post.post_id}
            >
              <div className="flex flex-col justify-center items-center gap-3">
                <div className="flex justify-center aspect-square w-full max-h-[192px]">
                  <img
                    className="w-[100%] object-fit rounded-xl"
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
                <p className="text-2xl h-[64px] font-bold line-clamp-2">
                  {post.post_title}
                </p>
                <p className="line-clamp-3">{post.article}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

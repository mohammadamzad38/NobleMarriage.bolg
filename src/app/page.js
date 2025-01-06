"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { BsCalendar2Fill } from "react-icons/bs";
import PrimaryButton from "@/components/buttons/primary-button";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  const [posts, setPost] = useState([]);

  console.log("hhhhhhhhhhhh", posts);
  useEffect(() => {
    fetch("/postdata.json")
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Thik hoy nai", err));
  }, []);
  return (
    <div className="flex text-black mt-32 m-8">

      <div className="flex flex-col gap-10 max-w-[66%]">
        {posts.map((post) => (
          <div key={post.post_title}>
            <div className="flex flex-wrap items-center gap-4 bg-white p-5 rounded-xl">
              <div className="flex justify-center w-[260px] h-[192px] aspect-square"><img className="w-[100%] object-fit rounded-3xl" src={post.feature_image} alt="" /></div>
              <div className="flex flex-col max-w-[70%] ">
                <div className="flex justify-between mb-4">
                  <p className="text-[#BA0060] font-bold">{post.author_name}</p>
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
                  <PrimaryButton text={"Read"} icon={<FaArrowRight />} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      

      <div>
        <div className="border max-w-[370px] max-h-[44px]">

          <input  type="text"  placeholder="Search" ></input>
        </div>
        <div className="bg-gradient-to-r from-[#3F429D] to-[#310048] p-4">
          <div className="flex justify-between">
            <p className="text-xl font-bold text-white">Trending Topics</p>
            <p className="border rounded-xl text-[#BA0060] bg-[#F8E6EF] p-2">View all Topics</p>
          </div>

        </div>
      </div>
    </div>
  );
}

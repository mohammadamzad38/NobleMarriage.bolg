"use client";
import React, { useEffect, useState } from "react";
import { BsCalendar2Fill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import PrimaryButton from "@/components/buttons/primary-button";
import { FaFacebook } from "react-icons/fa6";
import RedButton from "@/components/buttons/red-button";

const Post = () => {
  const [posts, setPost] = useState([]);
  const [inputData, setInputData] = useState({ name: "", email: "" });
  const [isSubmited, setIsSubmited] = useState();

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmited(true);

    if (inputData.name.trim() === "" || inputData.email.trim() === "") {
      alert("Name & Email field are mandatory");
      return;
    }
    alert("Comment Submited");
  };

  const isFormValid =
    inputData.name.trim() !== "" && inputData.email.trim() !== "";

  return (
    <div className="mt-[130px]">
      <div>
        {posts.slice(0, 1).map((post) => (
          <div key={post.post_id} className="">
            {/* parent div */}
            <div>
              {/*Article header */}
              <div className="flex flex-col gap-4 justify-center items-center mx-16">
                <h1 className="font-bold text-4xl ">{post.post_title}</h1>
                <div className="flex flex-row gap-8">
                  <Link
                    className="text-[#BA0060] font-bold"
                    href={`/author/${post.author_name}`}
                  >
                    {post.author_name}
                  </Link>
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
              {/* Body social Link*/}
              <div className="flex mx-9 gap-8 mt-11">
                <div className="flex flex-col justify-start items-center w-[50px] gap-6">
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
                    <div>
                      <Link href={"#"}>
                        <RedButton
                          text={"Previous Post"}
                          icon={<FaArrowLeft />}
                        />
                      </Link>
                    </div>
                    <div>
                      <Link href={"#"}>
                        <RedButton
                          text={"Next Post "}
                          icon={<FaArrowRight />}
                        />
                      </Link>
                    </div>
                  </div>
                  {/* Comment Form */}
                  <form onSubmit={handleSubmit} className="mt-11">
                    <p className="font-bold mb-4 text-3xl text-[#BA0060]">
                      Comment Form
                    </p>
                    <div className="flex items-center">
                      <div className="flex flex-col gap-3 w-1/6">
                        <p>
                          Your name <span className="text-red-600">*</span>
                        </p>
                        <div className="">
                          <p>
                            Your email <span className="text-red-600">*</span>
                          </p>
                          <p className="text-xs text-gray-400">
                            (Will not be published)
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 w-full">
                        <input
                          className="text-xs p-3 rounded-md pl-5"
                          name="name"
                          onChange={handleChange}
                          type="text"
                          value={inputData.name}
                          placeholder="Enter your name"
                        />
                        <input
                          className="text-xs p-3 rounded-md pl-5"
                          name="email"
                          onChange={handleChange}
                          type="email"
                          value={inputData.email}
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                    <input
                      className="w-full mr-14 mt-4 p-4 h-[200px] place-items-start border rounded-xl "
                      type="text"
                      placeholder="Type your comment here"
                    />
                    <button
                      disabled={!isFormValid}
                      className="w-1/5 bg-[#BA0060] p-3 rounded-xl text-white mt-4"
                    >
                      Post Comment
                    </button>
                  </form>
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
      {/* Related post */}

      <div className="m-8">
        <div className="flex justify-between items-center w-full">
          <p className="text-2xl font-bold">Related post</p>
          <PrimaryButton text={"All post"} icon={<FaArrowRight />} />
        </div>
        <div className="flex gap-8 mt-4 mb-28">
          {posts.slice(0, 4).map((relatedPost) => (
            <div
              className="flex flex-col p-4 bg-white border rounded-xl"
              key={relatedPost.post_id}
            >
              <div className="flex flex-col justify-center items-center gap-3">
                <div className="flex justify-center aspect-square w-full h-[192px]">
                  <img
                    className="w-[100%] object-fit rounded-xl"
                    src={relatedPost.feature_image}
                    alt=""
                  ></img>
                </div>
                <div className="flex gap-4 items-center justify-center text-xs rounded-xl border w-36 h-6 ">
                  <BsCalendar2Fill />
                  <p>{relatedPost.post_date}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <p className="text-2xl font-bold line-clamp-2">{relatedPost.post_title}</p>
                <p className="line-clamp-3">{relatedPost.article}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;

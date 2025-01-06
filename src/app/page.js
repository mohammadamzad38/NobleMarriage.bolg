'use client'
import { useEffect, useState } from "react";


export default function Home() {
  const [post, setPost] = useState([]);

  console.log('hhhhhhhhhhhh', post)
  useEffect(() => {
    fetch('/postdata.json')
    .then((res) => res.json())
    .then((data) => setPost(data))
    .catch((err) => console.error("Thik hoy nai", err))
  },[])
  return (
    <div className=" text-black">
      <p>{post.length}</p>
    </div>
  );
}

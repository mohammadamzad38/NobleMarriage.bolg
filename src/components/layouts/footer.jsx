import Link from "next/link";
import React from "react";
import Image from "next/image";

import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#310048] text-white">
      <div className="flex flex-row justify-between mx-9 py-16">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-lg">Company</p>
          <Link href={"#"}>Member Login</Link>
          <Link href={"#"}>Free Register</Link>
          <Link href={"#"}>How to Use NobleMarriage</Link>
          <Link href={"#"}>Search Your Match</Link>
          <Link href={"#"}>About Us</Link>
          <Link href={"#"}>Membership Plans</Link>
          <Link href={"#"}>Sitemap</Link>
        </div>
        <div className="flex flex-col gap-4 text-lg">
          <p className="font-bold">Information</p>
          <Link href={"#"}>Marriage Blog</Link>
          <Link href={"#"}>FAQs</Link>
          <Link href={"#"}>Contact Us</Link>
          <Link href={"#"}>Affiliate & Referral</Link>
          <Link href={"#"}>Help & Customer Support</Link>
          <Link href={"#"}>Send Your Feedback</Link>
          <Link href={"#"}>Submit Your Success Story</Link>
        </div>
        <div className="flex flex-col gap-4 text-lg">
          <p className="font-bold">Privacy & Legal</p>
          <Link href={"#"}>Terms of Use</Link>
          <Link href={"#"}>Privacy Statement</Link>
          <Link href={"#"}>Cookie Policy</Link>
          <Link href={"#"}>Report Issues</Link>
          <Link href={"#"}>Refund Policy</Link>
          <Link href={"#"}>Security Policy</Link>
        </div>
        <div className="items-start">
          <p className="font-bold mb-4 text-lg">Download Our APP</p>
          <div className="flex flex-col gap-4 items-center justify-center">
            <div>
              <Link href={"#"}>
                <Image
                  src="/images/app-store-link-image.png"
                  alt="app-store-link-image"
                  width={200}
                  height={52}
                />
              </Link>
            </div>
            <div>
              <Link href={"#"}>
                <Image
                  src="/images/play-store-link-image.png"
                  alt="play-store-link-image"
                  width={180}
                  height={52}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-gray-400 mx-8"></div>
      <div className="flex flex-row justify-between mt-8 mx-8 pb-16">
        <div className="space-y-2">
          <p>Powered by Noble Technologies Ltd</p>
          <div className="flex text-center justify-center gap-1 items-center">
            <p className="rounded-full text-sm text-center border w-5 h-5">C</p>
            <p>2024 NobleMarriage. All rights reserved.</p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-6">
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
      </div>
    </footer>
  );
};

export default Footer;

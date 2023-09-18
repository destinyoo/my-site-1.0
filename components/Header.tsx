import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.facebook.com/Smaaliweyn"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.instagram.com/ina_aw_ismail_xaaji/"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.tiktok.com/@sudoaptupdatte?lang=en"
          fgColor="gray"
          bgColor="transparent"
        />

       
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          url="https://www.youtube.com/channel/UCaKMPw_kjhJyCQ9T2kcc7CA"
          fgColor="gray"
          bgColor="transparent"
        />
         <SocialIcon
          url="https://github.com/destinyoo/destinyoo"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/abdelkader-ismail/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
    </header>
  );
}

import React from 'react'
import { motion } from 'framer-motion'
import Skill from './skill/Skill'
import Skill1 from './skill/Skill1'
import Skill2 from './skill/Skill2'
import Skill3 from './skill/Skill3'
import Skill4 from './skill/Skill4'
import Skill5 from './skill/Skill5'
import Skill6 from './skill/Skill6'
import Skill7 from './skill/Skill7'
import { useMediaQuery } from 'react-responsive'

type Props = {}

const Skills = (props: Props) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5}}
    className={`flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center ${isSmallScreen ? 'space-y-5' : ''}`}>
      <h3 className='absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <div className={`grid ${isSmallScreen ? 'grid-cols-2' : 'grid-cols-4'} gap-5`}>
        <Skill />
        <Skill1 />
        <Skill2 />
        <Skill3 />
        <Skill7 />
        <Skill5 />
        <Skill4 />
        <Skill6 />
      </div>
    </motion.div>
  )
}

export default Skills

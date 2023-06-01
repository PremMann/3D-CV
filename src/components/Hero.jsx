import { motion } from "framer-motion";
import Select from 'react-select'

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0
      top-[120px] max-w-7xl mx-auto flex flex-row items-start grap-5`}>
        <div className=" flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi I am <span className="text-[#915eff]">GG</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Hi there, my name is Prem MANN and I'm a software developer with 
            experience in web application development and database management. 
            I'm currently working as a React Developer at Krawma & Associates, 
            where I specialize in billing systems development and optimizing 
            applications for maximum speed and scalability. My expertise in 
            front-end development includes proficiency in technologies such as 
            JavaScript, React.js, Tailwind CSS, and SASS. In addition, 
            I have experience working with PHP and React Native.
          </p>


          <Select options={options} />




        </div>
      </div>

      <ComputersCanvas />
    </section>
  )
}

export default Hero
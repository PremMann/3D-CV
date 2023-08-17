import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Select from 'react-select'

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import { ComputersCanvas } from "./canvas";
import axios from "axios";

const  ChattyApp = () => {
  const [input, setInput] = useState("");
  const [completedSentence, setCompletedSentence] = useState("");
  
  async function handleClick() {
    try {
      const completedSentence = await fetchData(input);
      setCompletedSentence(completedSentence);
    } catch (error) {
      console.error(error);
    }
  }

  const API_KEY = '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';
  const MODEL_NAME = 'text-davinci-003';

  const fetchData = async (input) => {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: input,
        model: MODEL_NAME,
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.choices[0].text;
  };

  return (
    <div className="container flex flex-col">
      <h2>Testing Chat</h2>
      <textarea
        value={input}
        onChange={(event) => setInput(event.target.value)}
        rows={5}
        placeholder="Type in some words and I'll finish the rest..."
      />
      <button className="button" onClick={handleClick}>Send</button>
      {completedSentence && <p> {completedSentence}</p>}
    </div>
  );
}





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
            Hi there, 
            I'm a React Developer at Krawma & Associates
          </p>


          {/* <Select options={options} />

          <ChattyApp /> */}

        </div>
      </div>

      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p2">
              <motion.dev 
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                duration: 1.5,
                repeat: Infinity, 
                repeatType: 'loop'
              }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
          </div>
        </a>

      </div>

    </section>
  )
}

export default Hero



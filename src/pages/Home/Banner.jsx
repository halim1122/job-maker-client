import React from 'react';
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'
import { motion } from "motion/react"


const Banner = () => {
     return (
          <div className="hero bg-base-200 min-h-96">
               <div className="hero-content flex-col gap-4 lg:flex-row-reverse">
                    <div className='flex-1'>
                         <motion.img
                              animate={{ y: [150,100,150]}}
                              transition={{duration: 5, repeat: Infinity}}
                              src={team1}
                              className="max-w-sm rounded-t-4xl rounded-br-4xl border-s-8 border-b-8 border-blue-600 shadow-2xl "
                         />
                         <motion.img
                              animate={{ x: [150,100,150]}}
                              transition={{duration: 10, repeat: Infinity}}
                              src={team2}
                              className="max-w-sm rounded-t-4xl rounded-br-4xl border-s-8 border-b-8 border-blue-600 shadow-2xl "
                         />
                    </div>
                    <div className='flex-1'>
                         <h1 className="text-5xl font-bold">Job Office News <motion.span animate={{
                              color: ['#FF0606','#E706FF','#0606FF','#1FFF06','#FFEF06','#06FFFF','#FF0683','#FF2E17','#FF8306']
                         }} 
                         transition={{duration:10, repeat: Infinity}}
                         >!</motion.span></h1>
                         <p className="py-6">
                              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                              quasi. In deleniti eaque aut repudiandae et a id nisi.
                         </p>
                         <button className="btn btn-primary">Get Started</button>
                    </div>
               </div>
          </div>
     );
};

export default Banner;
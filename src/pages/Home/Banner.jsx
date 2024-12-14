import { easeOut } from "motion";
import { motion } from "motion/react";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{y: [20, 70, 20]}}
            transition={{duration: 8, repeat: Infinity}}
            className="max-w-sm w-64 rounded-t-[40px] 
            rounded-br-[40px] border-blue-500 border-l-[6px] 
            border-b-[6px] shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{x: [150, 200, 150]}}
            transition={{duration: 7, repeat: Infinity}}
            className="max-w-sm w-64 rounded-t-[40px] 
            rounded-br-[40px] border-blue-500 border-l-[6px] 
            border-b-[6px] shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#ecff33", "#33ffe3", "#ff6133"] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
            >
              Jobs
            </motion.span>{" "}
            For You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

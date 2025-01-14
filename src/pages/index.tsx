import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function IndexPage() {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* About Section */}
      <motion.section 
        className="text-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="secondary" className="mb-4">
          About Me
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Antonio Franca
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          I am Antonio, an MPhil student in Machine Learning and Machine Intelligence at Cambridge University. Before starting my master's, I completed a BSc in Mathematics at VU Amsterdam, where I worked on my thesis in collaboration with CRM Barcelona, researching how variability in synaptic connectivity can enhance the memory storage capabilities of recurrent neural networks (CA3 region of the hippocampus). I also completed a research internship at Artificial Neural Computing, focusing on modeling the boundary dynamics of neural networks. Additionally, I co-founded altan.ai, a startup aimed at automating workflows using AI, and I had the opportunity to teach courses in Single Variable Calculus, Probability Theory, and Linear Algebra as a Teaching Assistant at VU Amsterdam.
        </p>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          I am interested in exploring the computational principles of natural and artificial intelligence, aiming to "reverse engineer" the brain's algorithms, both to learn about how our brains work and to build more effective AI systems. In the long term, my goal is to leverage AI to help people gain greater agency over their circumstances and reach their full potential. I particularly want to focus my research on areas such as neural representations and computational dynamics in the brain, learning algorithms that enable continual and efficient skill acquisition, meta-learning and online learning frameworks, understanding the theoretical underpinnings of deep learning, studying knowledge representation and hierarchical abstraction in neural networks, and advancing reinforcement learning techniques for adaptive behavior.
        </p>
      </motion.section>

      {/* Navigation Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Explore More
          </h2>
          <div className="mt-6 flex justify-center gap-4">
            <Button size="lg" variant="default" onClick={() => navigate('/blog')}>
              Blog
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/projects')}>
              Projects
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/cv')}>
              CV
            </Button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}

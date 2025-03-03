import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3/SCSS', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'Vue.js', level: 80 },
  ];

  const toolsSkills = [
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Framer Motion', level: 85 },
    { name: 'Git/GitHub', level: 85 },
    { name: 'Webpack/Vite', level: 80 },
    { name: 'Figma', level: 75 },
    { name: 'Jest/Testing Library', level: 80 },
  ];

  const SkillBar: React.FC<SkillBarProps> = ({ name, level, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <div className="flex justify-between mb-1">
          <span className="text-white font-medium">{name}</span>
          <span className="text-gray-400">{level}%</span>
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
            viewport={{ once: true }}
            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    );
  };

  const technologies = [
    'React', 'Vue.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 
    'CSS3', 'SCSS', 'Tailwind CSS', 'Redux', 'GraphQL', 'REST API',
    'Webpack', 'Vite', 'Jest', 'React Testing Library', 'Git', 'GitHub',
    'Figma', 'Adobe XD', 'Responsive Design', 'Accessibility', 'SEO',
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          My Skills
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-6 text-primary-400"
            >
              Frontend Development
            </motion.h3>
            
            {frontendSkills.map((skill, index) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
            ))}
          </div>
          
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-6 text-secondary-400"
            >
              Tools & Technologies
            </motion.h3>
            
            {toolsSkills.map((skill, index) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="card"
        >
          <h3 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                className="px-4 py-2 bg-white/10 rounded-full text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
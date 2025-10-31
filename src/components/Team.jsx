import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Instagram, Facebook, Plus, X } from 'lucide-react';

const Team = () => {
  const [selectedRole, setSelectedRole] = useState('Managing Director');
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const roles = [
    { title: 'Managing Director', subtitle: 'Head of Department' },
    { title: 'Marketing Manager', subtitle: 'Sales Department' },
    { title: 'Software Developer', subtitle: 'App Department' }
  ];

  const teamMembers = {
    'Managing Director': [
      {
        id: 1,
        name: 'James Baker',
        role: 'CEO & Founder',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
        social: {
          linkedin: '#',
          instagram: '#',
          facebook: '#'
        }
      },
      {
        id: 2,
        name: 'Dalton Grant',
        role: 'Chairman',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
        social: {
          linkedin: '#',
          instagram: '#',
          facebook: '#'
        }
      }
    ],
    'Marketing Manager': [
      {
        id: 3,
        name: 'Sarah Johnson',
        role: 'Marketing Head',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
        social: {
          linkedin: '#',
          instagram: '#',
          facebook: '#'
        }
      },
      {
        id: 4,
        name: 'Michael Chen',
        role: 'Sales Director',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop',
        social: {
          linkedin: '#',
          instagram: '#',
          facebook: '#'
        }
      }
    ],
    'Software Developer': [
      {
        id: 5,
        name: 'Emily Rodriguez',
        role: 'Lead Developer',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
        social: {
          linkedin: '#',
          instagram: '#',
          facebook: '#'
        }
      },
      {
        id: 6,
        name: 'David Kim',
        role: 'Tech Lead',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
        social: {
          linkedin: '#',
          instagram: '#',
          facebook: '#'
        }
      }
    ]
  };

  const currentMembers = teamMembers[selectedRole] || [];

  return (
    <div className="min-h-screen bg-zinc-900 text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-gray-400 border border-neutral-700 px-4 py-1 rounded-full mb-4">
              TEAM MEMBERS
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold pb-8"
          >
            Turn Information Into
            <br />
            Actionable Insights
          </motion.h1>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Side - Role Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            {roles.map((role, index) => (
              <motion.button
                key={role.title}
                onClick={() => setSelectedRole(role.title)}
                className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${
                  selectedRole === role.title
                    ? 'bg-lime-400 text-black'
                    : 'bg-zinc-800 hover:bg-zinc-750'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-1">{role.title}</h3>
                <p className={`text-sm ${selectedRole === role.title ? 'text-black/70' : 'text-zinc-400'}`}>
                  {role.subtitle}
                </p>
              </motion.button>
            ))}
          </motion.div>

          {/* Right Side - Team Members */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRole}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid sm:grid-cols-2 gap-6"
              >
                {currentMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative group"
                  >
                    {/* Image Card */}
                    <div 
                      className="relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer"
                      onMouseEnter={() => setHoveredCard(member.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay */}
                      <div 
                        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                          hoveredCard === member.id ? 'opacity-0' : 'opacity-40'
                        }`}
                      />

                      {/* Plus Button */}
                      <motion.button
                        onClick={() => setActiveCard(activeCard === member.id ? null : member.id)}
                        className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <AnimatePresence mode="wait">
                          {activeCard === member.id ? (
                            <motion.div
                              key="close"
                              initial={{ rotate: -90, opacity: 0 }}
                              animate={{ rotate: 0, opacity: 1 }}
                              exit={{ rotate: 90, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <X className="w-5 h-5 text-black" />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="plus"
                              initial={{ rotate: 90, opacity: 0 }}
                              animate={{ rotate: 0, opacity: 1 }}
                              exit={{ rotate: -90, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Plus className="w-5 h-5 text-black" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>

                      {/* Social Links */}
                      <AnimatePresence>
                        {activeCard === member.id && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-16 right-4 flex flex-col gap-2 z-10"
                          >
                            {[
                              { icon: Linkedin, link: member.social.linkedin },
                              { icon: Instagram, link: member.social.instagram },
                              { icon: Facebook, link: member.social.facebook }
                            ].map((social, idx) => (
                              <motion.a
                                key={idx}
                                href={social.link}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-lime-400 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <social.icon className="w-5 h-5 text-black" />
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Info Card */}
                    <motion.div 
                      className="mt-4 p-4 bg-zinc-800 rounded-lg"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                      <p className="text-sm text-zinc-400">{member.role}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
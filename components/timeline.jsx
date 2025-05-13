"use client"

import Image from 'next/image';
import { visionIcon, valueIcon, missionIcon } from '@/app/index';
import { useState } from 'react';

export default function Timeline() {
    const [hoveredItem, setHoveredItem] = useState(null);

    const timelineItems = [
        {
            id: 'mission',
            title: 'Mission',
            content: 'Our mission is to create unforgettable adventures while preserving the pristine landscapes of Gilgit-Baltistan.',
            icon: missionIcon,
            position: 'left'
        },
        {
            id: 'vision',
            title: 'Vision',
            content: 'Our vision is to be the foremost sustainable adventure travel company in Gilgit-Baltistan, delivering unmatched exploration experiences and setting industry standards for excellence.',
            icon: visionIcon,
            position: 'right'
        },
        {
            id: 'value',
            title: 'Value',
            content: 'We are dedicated to providing the best travel experiences to anyone, anywhere in the world, ensuring comfort, adventure, and unforgettable memories every step of the way.',
            icon: valueIcon,
            position: 'left'
        }
    ];

    const TimelineCard = ({ icon, title, content, isHovered }) => (
        <div
            className={`bg-gray-100 rounded-lg p-6 shadow-md flex items-start transition-all duration-300 ease-in-out ${isHovered ? 'bg-orange-50 shadow-lg transform scale-105' : ''
                }`}
        >
            <Image
                width={100}
                height={100}
                src={icon}
                alt={title}
                className="w-16 h-16 mr-4"
            />
            <div>
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isHovered ? 'text-orange-600' : 'text-gray-800'
                    }`}>
                    {title}
                </h3>
                <p className="text-gray-600">
                    {content}
                </p>
            </div>
        </div>
    );

    return (
        <div className="bg-white min-h-screen flex items-center justify-center p-4">
            <div className="relative w-full max-w-6xl">
                <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gray-200 transform md:-translate-x-1/2"></div>

               
                {timelineItems.map((item) => (
                    <div
                        key={item.id}
                        className="mb-12 relative"
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <div className="absolute left-4 top-6 md:hidden">
                            <span className={`w-4 h-4 bg-orange-500 rounded-full transition-all duration-300 ${hoveredItem === item.id ? 'transform scale-150 bg-orange-600' : ''
                                }`}></span>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden md:flex items-center w-full">
                            {/* Left Content (for left position or empty div for right position) */}
                            <div className="w-1/2 pr-8 flex justify-end">
                                {item.position === 'left' ? (
                                    <TimelineCard
                                        icon={item.icon}
                                        title={item.title}
                                        content={item.content}
                                        isHovered={hoveredItem === item.id}
                                    />
                                ) : (
                                    <div></div>
                                )}
                            </div>

                            {/* Desktop Timeline Dot */}
                            <div className="flex items-center justify-center z-10">
                                <span className={`w-4 h-4 bg-orange-500 rounded-full transition-all duration-300 ${hoveredItem === item.id ? 'transform scale-150 bg-orange-600' : ''
                                    }`}></span>
                            </div>

                            {/* Right Content (for right position or empty div for left position) */}
                            <div className="w-1/2 pl-8">
                                {item.position === 'right' ? (
                                    <TimelineCard
                                        icon={item.icon}
                                        title={item.title}
                                        content={item.content}
                                        isHovered={hoveredItem === item.id}
                                    />
                                ) : (
                                    <div></div>
                                )}
                            </div>
                        </div>

                        {/* Mobile Layout (always show cards on the right) */}
                        <div className="md:hidden pl-12">
                            <TimelineCard
                                icon={item.icon}
                                title={item.title}
                                content={item.content}
                                isHovered={hoveredItem === item.id}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
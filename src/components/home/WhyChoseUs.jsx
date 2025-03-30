import React from 'react';
import movies from '../../assets/films.jpg';
import { FaChartPie } from "react-icons/fa";
import { LuChartNetwork } from "react-icons/lu";
import { HiPresentationChartLine } from "react-icons/hi";
import { PiChartLineUpBold } from "react-icons/pi";
import { TiWorld } from "react-icons/ti";
import { MdSettingsSuggest } from "react-icons/md";
import { IoIosTv } from "react-icons/io";
import { MdMovie } from "react-icons/md";


const service=({icon,text})=>{
    return (
        <div className='flex flex-col items-start justify-start gap-3 mb-2 sm:mb-20'>
            <div>
                {icon}
            </div>
            <div className='text-white text-[10px] sm:text-xl'>
                {text}
            </div>
        </div>
    );
}

const container=({icon,number,text})=>{
    return (
        <div className='flex items-center justify-center gap-3 '>
            <div>
            {icon}
            </div>
            <div className='text-white'>
                <h1 className='text-3xl sm:text-5xl font-bold'>{number}+</h1>
                <p className='text-[12px] sm:text-xl'>{text}</p>
            </div>
        </div>
    );
}

const WhyChoseUs = () => {
  return (
    <div>
        <div className='flex items-start justify-start mt-40'>
        
            <div 
            className="relative h-screen bg-cover bg-center w-1/2"
            style={{ backgroundImage: `url(${movies})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-l from-black via-black/70 to-black/30 opacity-95" />
            </div>

            <div className=' flex flex-col items-start justify-start sm:mr-20 gap-5'>
                <div className='flex items-center pt-4 gap-4'>
                    <p className='text-blue-600'>
                        Why Choose Us
                    </p>
                    <div className='bg-blue-600 w-20 h-0.5'></div>
                </div>
                <div className=' text-white font-bold text-2xl sm:text-5xl'> 
                    We strive to deliver a comprehensive and satisfying 
                    <span className='text-blue-600'> IPTV! </span>
                    experience
                </div>
                <div className='text-white text-[13px] sm:text-xl mt-4'>
                    By choosing us for your IPTV service, you benefit from flexible Subscription plans, multiple Connections options, advanced DVR functionality
                </div>
                <div className='flex flex-col sm:flex-row items-center justify-center '>
                    <div>
                        {service(
                            {text:"Regular Updates and Improvements We are committed to continuously improving our IPTV service to enhance your viewing experience.",
                            icon:<FaChartPie 
                            className='text-blue-600 text-2xl sm:text-5xl'
                            />
                            })}
                        {service(
                            {text:"Multi-Device Support Our IPTV service is compatible with a wide range of devices, Apps, including smartphones, Firestick, smart TVs, and streaming devices.",
                            icon:<LuChartNetwork  
                            className='text-blue-600 text-2xl sm:text-5xl'
                            />
                            })}
                    </div>
                    <div>
                        {service(
                                {text:"User-Friendly Interface We pride ourselves on providing a user-friendly interface that is easy to navigate.",
                                icon:<HiPresentationChartLine  
                                className='text-blue-600 text-2xl sm:text-5xl'
                                />
                                })}
                        {service(
                            {text:"Exclusive Features and Add-Ons We offer exclusive features and add-ons that enhance your IPTV experience.",
                            icon:<PiChartLineUpBold  
                            className='text-blue-600 text-2xl sm:text-5xl'
                            />
                            })}
                    </div>
                </div> 
            </div>
        </div>
        <div className='bg-blue-600 p-16 w-full flex flex-col sm:flex-row items-center justify-center gap-10 pr-5 pl-5'>
            <div>
            {container({
                icon:<TiWorld 
                    className='text-7xl sm:text-9xl text-white '
                    />,
                number:128,
                text:"Contry Supported"
            })}
            </div>
            <div>
            {container({
                icon:<MdSettingsSuggest 
                    className='text-7xl sm:text-9xl text-white '
                    />,
                number:"35K",
                text:"Line Active"
            })}
            </div>
            <div>
            {container({
                icon:<IoIosTv  
                    className='text-7xl sm:text-9xl text-white '
                    />,
                number:"22K",
                text:"Live TV Channles"
            })}
            </div>
            <div>
            {container({
                icon:<MdMovie  
                    className='text-7xl sm:text-9xl text-white '
                    />,
                number:"159K",
                text:"Live TV Channles"
            })}
            </div>
        </div>
    </div>
  );
}

export default WhyChoseUs

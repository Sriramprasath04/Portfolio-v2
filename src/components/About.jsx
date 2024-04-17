import { useState } from "react"
import Things from "./Things"
import certficate1 from '../imgs/DSA.png'
import certficate2 from '../imgs/javascript.png'
import certficate3 from '../imgs/python.png'

const About = () => {
    const [slide, setSlide] = useState(null);
    const [active, setActive] = useState(null);
    const [indx, setIndx] = useState(0);
    
    const arr = [certficate1, certficate2, certficate3];
    return (
        <div id="about" className="w-full md:w-4/5 py-10 flex flex-col items-center justify-center gap-8">
            <div className =" w-full flex flex-col items-center justify-center text-center">
                <h2 className='text-center font-bold text-3xl font-mono'>About me</h2>
                    <p className="text-center md:text-left text-red-600 mt-1">Let me Introduce Myself,</p>
                <div className="w-4/5 lg:1/2 pt-4">
                    <p className="text-justify font-mono w-full mx-auto">I’m P. Sriramprasath, Currently pursuing my final year of Computer Science and Engineering at Sri Ramakrishna Institute of Technology. 
                    I am self-learner trying to upskill Myself in accordance with the Industry Standards. 
                    My Major Coursework Focuses On Essential Subjects Such As Operating Systems, Database Management Systems, Computer Networks, Object-Oriented Programming, Data Structures And Algorithms
                    I’m a team player who has some good problem-solving skills & loves to learn and explore cutting-edge technologies.</p>
                </div>
            </div>
            <div className="flex flex-col items-center w-full md:w-4/5">
                <div id="buttons">
                    <button className={`px-4 py-2 font-semibold border-b-2 ${active === 'archivement'? 'border-black': ''}`} onClick={()=>{
                        setSlide('archivement');
                        setActive('archivement');
                    }}>Archivements</button>
                    <button className={`px-4 py-2 font-semibold border-b-2 ${active === null? 'border-black': ''}`} onClick={()=>{
                        setSlide(null);
                        setActive(null);
                    }}>Certification</button>
                    <button className={`px-4 py-2 font-semibold border-b-2 ${active === 'skill'? 'border-black': ''}`} onClick={()=>{
                        setSlide('skill');
                        setActive('skill');
                    }}>Skills</button>
                    
                </div>
                <div className="w-full flex flex-col justify-center items-center my-7">
                    <div id="certification" className={`font-mono flex flex-col justify-center ${slide === null? 'block' : 'hidden'}`}>
                        <p className="text-center text-red-600 mt-1">Course Certfications that I’ve done</p>
                        <div className="flex gap-2 md:gap-6 lg:gap-10 mt-4">
                            <button onClick={
                                ()=>{
                                    indx-1 === -1? setIndx(arr.length-1) : setIndx(indx-1);
                                }
                            }>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <div className="w-96 h-64">
                                {
                                    <img src={arr[indx]} key={indx} alt="" className="w-full h-full" />
                                }
                            </div>
                            <button onClick={
                                ()=>{
                                    indx+1 === arr.length? setIndx(0) : setIndx(indx+1);
                                }
                            }>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="archivements" className={`font-mono flex flex-col items-center justify-center h-80  ${slide === 'archivement'? 'block' : 'hidden'}`}>
                        <p className="text-center text-red-600 mt-1">Some Noteworthy Archivements</p>
                        <div className=" w-full md:w-4/5 flex flex-col justify-center">
                            <div className="flex mt-2">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                    </svg>
                                </div>
                                <p className="">5<sup>th</sup> Institutional Rank at GeeksforGeeks.</p> 
                            </div>
                            <div className="flex mt-2">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                    </svg>
                                </div>
                                <p className="">Winners of CVEA CODE FIESTA 2023.</p> 
                            </div>
                            <div className="flex mt-2">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                    </svg>
                                </div>
                                <p className="">Won Silver Medal at SRIT HACKATHON 2022.</p> 
                            </div>
                            <div className="flex mt-2">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                    </svg>
                                </div>
                                <p className="">Earned 4/5 stars on the C Badge in HackerRank.</p> 
                            </div>
                            <div className="flex mt-2">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                    </svg>
                                </div>
                                <p className="">Earned 3/5 stars on the Java, Python & SQL Badge in HackerRank.</p> 
                            </div>
                        </div>
                    </div>
                    <div id="skills" className={`font-mono h-80 ${slide === 'skill'? 'block' : 'hidden'}`}>
                        <Things/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
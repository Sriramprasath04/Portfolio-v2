import AnchorLink from 'react-anchor-link-smooth-scroll';
import heroImg from '../assets/undraw_designer_re_5v95.svg';
import Sriramprasath from '../assets/71382002124_Sriramprasath_P.pdf';
import Quote from './Quote';
import Scroller from './Scroller';

const Body = () => {
  return (
    <>
        <div id='body' className ='relative  h-90vh font-mono flex gap-6 lg:justify-evenly flex-col md:flex-row-reverse justify-center delay-1000 items-center md:justify-start p-5 w-full'>
            <div className =" w-full md:order-1  l md:w-1/2 lg:w-2/5 h-1/2 flex flex-col items-center justify-between text-center md:justify-start md:items-start">
                <p className ='text-xl '>Hi, Myself</p>
                <h1 className ='text-2xl mt-2 lg:text-3xl font-extrabold'>Sriramprasath P</h1>
                <p className='pt-5 px-5 md:px-0 md:w-10/12 lg:text-xl text-center md:text-justify'>Aspiring Software Developer, a self learner loves to learn cutting edge technologies and improve Myself to attain industry standars.</p>
                <div className ="mt-9 flex gap-8">
                    <AnchorLink href="#about" className="cursor-pointer rounded text-white hover:text-black font-semibold px-4 py-2 border-2  border-red-600 hover:bg-white bg-red-600" >About me</AnchorLink>
                    <a href={Sriramprasath} download={`Sriramprasath`} className="cursor-pointer rounded text-white hover:text-black font-semibold px-4 py-2 border-2  border-purple-600 hover:bg-white bg-purple-600">Download CV</a>
                </div>
                <Scroller/>
            </div>
            <div className=' h-1/3 order-first w-52 md:w-2/5 flex flex-col items-center justify-center pl-12 md:p-0 '>
                <div className='hidden h-1/2 mt-12 md:flex items-center justify-center'>
                    <img src={heroImg} className='w-96'/>
                </div>
                <Quote/>
            </div>
        </div>
    </>
  )
}

export default Body
import rct from '../imgs/react.png'
import c from '../imgs/c.png'
import java from '../imgs/java.png'
import html from '../imgs/html.png'
import css from '../imgs/css.png'
import js from '../imgs/js.png'
import sql from '../imgs/mysql.png'
import py from '../imgs/py.png'
import tcss from '../imgs/tcss.png'

const Things = () => {
  return (
    <section className=" w-full h-full  flex items-center flex-col">
        <p className="text-center text-red-600 mt-1">Here are a few technologies I’m Familiar with</p>
        <div className='w-full my-7 items-center justify-center flex flex-wrap gap-10'>
            <img className='w-16' src={c} alt="" />
            <img className='w-16' src={java} alt="" />
            <img className='w-16' src={js} alt="" />
            <img className='w-16' src={py} alt="" />
            <img className='w-16' src={sql} alt="" />
            <img className='w-16' src={html} alt="" />
            <img className='w-16' src={css} alt="" />
            <img className='w-16' src={rct} alt="" />
            <img className='w-16' src={tcss} alt="" />
            {/* {
                arr.map(
                    (items, indx)=>{
                        <img src={arr[items]} key={indx} alt="" />
                    }
                )
            } */}
        </div>
    </section>
  )
}

export default Things
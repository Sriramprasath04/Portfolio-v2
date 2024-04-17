import AnchorLink from "react-anchor-link-smooth-scroll"

const Scroller = () => {
  return (
    <AnchorLink href="#about" className='w-full order-last flex justify-center md:justify-end mt-14 animate-bounce cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
    </AnchorLink>
  )
}

export default Scroller
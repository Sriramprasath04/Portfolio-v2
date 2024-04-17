const lines = {
    line1: "while (success != true){",
    line2: "tryAgain();",
    line3: 'print("Find & Fix problems");',
    line4: "continue;",
    line5: "}",
}

const Quote = () => {
  return (
    <div className="flex md:hidden  flex-col w-80 justify-center items-start font-semibold font-mono">
        <p className=" ">{lines.line1}</p>
        <p className="px-6">{lines.line2}</p>
        <p className="px-6">{lines.line3}</p>
        <p className="px-6">{lines.line4}</p>
        <p className=" ">{lines.line5}</p>
    </div>
  )
}

export default Quote
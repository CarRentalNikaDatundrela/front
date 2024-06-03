
function Button({children, className}: {children: React.ReactNode, className: string}) {
  return (
    <button className={"bg-black rounded-xl text-xl text-white font-bold tracking-wide px-8 py-3 " + className} >
        {children}
    </button>
  )
}

export default Button
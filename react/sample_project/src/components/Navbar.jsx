import React ,{useState,useEffect}from 'react'

const Navbar = ({appdata,logo}) => {
const[numberstate,setNumberstate]=useState(0)
const[stringstate,setStringstate]=useState("a")
const[arraystate,setArraystate]=useState([0,"a"])
//console.log(numberstate)
//console.log(stringstate)
//console.log(arraystate)

const[count,setCount]=useState(0);
useEffect(()=>{
   // alert("effect rendered") 
    console.log('count is'+ count)
},[count])

return(
    <>
    <button className='w-[6rem] h-[4 rem] bg-blue-400 text-white'
    onClick={()=>{setCount(count+10)}}>
    Count{count}
    </button>
    </>
       /* {appdata.appname} {logo}*/
    
)
}
export default Navbar

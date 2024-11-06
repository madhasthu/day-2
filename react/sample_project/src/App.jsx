import Navbar from "./components/Navbar"
const App = () => {
 const data={
    appname:"hello"
 }
 const logodata="mylogo"
 const test="hiii.."

 return(
    <>
    <p className="text-blue-600">{test}</p>
    <Navbar appdata={data} logo={logodata}/>
    </>
 )
  
}

export default App

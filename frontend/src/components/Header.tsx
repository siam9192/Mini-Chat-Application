import Container from "./Container"
import ThemeSwitchButton from "./ThemeSwitchButton"


function Header() {
  return (
    <header className="">
       <Container>
        <div className="p-1 md:p-3 flex justify-between items-center">
              <h1 className="font-primary text-3xl md:text-4xl font-semibold text-primary ">ResultHub</h1>
        <ThemeSwitchButton/>
        </div>
        
       
       </Container>
    </header>
  )
}

export default Header
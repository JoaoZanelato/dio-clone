import { Link } from "react-router-dom"
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
const Home = () => {
  return(
    <>
    <Header/>
    <Button title={"Teste1"}/>
    <Button title={"Teste2"} variant="secondary"/>
    <Link to="/login">Para o login</Link>
    </>
  )
}
export default Home;
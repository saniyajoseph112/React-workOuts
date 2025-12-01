import { useContext } from "react";
import { ThemContext } from "./ThemContext";


function Home () {
    const {Thema}=useContext(ThemContext);


return(
    <div>
        <h1>hello world</h1>
        <p>current Thema:{Thema}</p>
    </div>
)
}
export default Home;
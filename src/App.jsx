import {useState} from "react" //состояния
import testData from "./assents/data.json";
import Card from "./components/Card/Card"; // Card.jsx
import Promo from "./components/Promo/Promo";
// import Header from "./components/General"; 
import {Header, Footer} from "./components/General";

const promoData = ["=)", "^_^", "O_o", "x_x", "=(", ";(", "0l0"];
// .map() => преобразовывает один елемент массива в другой элемент (для всех без исключения)

console.log(testData);


const App = () => {
    
//    const user = localStorage.getItem("userStore"); 
const [user, setUser] = useState(localStorage.getItem("userStore")); //localStorage.getItem("userStore") 1 аргумент который передается по умолчанию это локалсторадж
    //сохрани в переменную user то значение что находится внутри useState

return (
    <>
{/* upd -это передали функцию setUser внутрь компонента Header,
 чтобы внутри использовать ее как слово upd() */}
      <Header user={user} upd={setUser}/>
      <div>
          <h1>Food for Dodge</h1>
          <div className="container">
              {testData.map((pro, i) => (
                  <Card key={i} img={pro.pictures} name={pro.name} price={pro.price} />
              ))}
              
            
              {promoData.map(el => <Promo key={`${el}1`} text={el}/>)}
           
                </div>
            </div>
            <Footer/>
        </>
    )
}


export default App;






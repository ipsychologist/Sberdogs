import testData from "./assents/data.json";
import Card from "./components/Card/Card";//Card.jsx
import Header from "./components/Header"; //Header/index.jsx
// import { Footer } 



const promoData =  ["=)", "^_^", "O_o", "x_x", "=(", ";(", "0l0"];
//.map() => преобразовывает 1 элемент массива в другой (для всех элементов без исключения)



const Promo = (props) => {
    //props это объект-используется для передачи разных значений внутрь компонента
    return <div className="promo__block">
            <div className="promo__img"/>
            <p className="promo__text">{props.text || "-"}</p>
             <Promo text={promoData[1]}/>
        </div>
}


const App = () => {
    
        
    
    return (
     <> 
      <Header />
      <div>
          <h1>First Page</h1>
          <div className="container"/>
          {testData.map(pro => <Card img={pro.pictures} name={pro.name} price={pro.price} />)}
          {/* <Promo text="First"/>
          <Promo text="Second"/>
          <Promo text={4*10}/>
          <Promo/> */}
          {
          [<span>1</span>,2,3,4,5]
          }
          {promoData.map(el => <Promo text={el}/>)}
      </div>
      </>
    )
  }
  export default App;
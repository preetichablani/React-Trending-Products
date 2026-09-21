import "./Card.css"
import Card from "./Card"
function App() {
  return<>
  <h1>Trending Products</h1>
   <div className="main">
  <Card title="Laptop" idx={0}/>
  <Card title="Mobile" idx={1}/>
  <Card title="PS5" idx={2}/>
  <Card title="FitBit" idx={3}/>
</div></>
}
export default App

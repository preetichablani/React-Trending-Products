import "./Card.css"
import Price from "./Price"
import laptop from "./assets/Laptop.jpg"
import mobile from "./assets/phone.png"
import PS5 from "./assets/PS5.png"
import fitbit from "./assets/fitbit.avif"
export default function Card({title, idx}){
    let im =[laptop,mobile,PS5,fitbit]
    let decp1=["Best Laptop in the world","Best Mobile in the world","Best PS5 in the world","Best FitBit in the world"]
    let decp2=["With Amazing Features","With Amazing Camera","With Amazing Games","With Amazing Tech"]
    let old=[80000,50000,40000,150000]
    let neww=[70000,40000,30000,10000]
    return <div className="card">
        <h2>{title}</h2>
        <img src={im[idx]}></img>
        <p>{decp1[idx]}</p>
        <p className="para">{decp2[idx]}</p>
        <Price oldp={old[idx]} newwp={neww[idx]}/>
    </div>
}

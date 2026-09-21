import "./Card.css"
export default function Price({oldp,newwp}){
    return <div className="sub">
        <span style={{textDecoration:"line-through"}}>{oldp}</span>
        <span>{newwp}</span> 
    </div>
}
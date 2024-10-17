const Card = (props:any) => {
    return (
        <rect>
        <img src='https://upload.wikimedia.org/wikipedia/en/a/a0/Grogu_%28Star_Wars%29.jpg' />
        <h4>{props.text}</h4>
        </rect>
        
        
    )
}
export default Card
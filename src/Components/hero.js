import "./hero.css";



function Hero(props){
    return(
        <>
        <div className={props.cName}>
            <img alt="heroimg" src={props.heroImg}/>
        </div>
        <div className={props.text1}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>
                {props.buttonText}
            </a>
        </div>
        </>
    )
}

export default Hero;
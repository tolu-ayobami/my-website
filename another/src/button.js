





const Button = ({git, gut, color}) =>{



    return(
<div>


<button type="button" className="btn"  style={{backgroundColor:color}} onClick={git}>{ gut ? "close" : "add " }</button>

</div>

        
    );
}

export default Button;
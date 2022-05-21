

const Tasks = ({tour, brown}) => {




    return(
        <div>
            {tour.map((tour) => {

                return(

                    <div className="tours">
                        
                        <div className="tour">
                    <h3>{tour.text}</h3>
                    
                    <p>{tour.day}</p>
                    </div>

                    <button type="button" className="btn" onClick={()=>brown(tour.id)}>clear</button>
                    
                    </div>
                );
            })}


        </div>
    );
}

export default Tasks;
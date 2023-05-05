import "./Total.css"

function Total(){
    return(
        <>
        <div className="Total-container">
            <div className="Total-12">
                <div className="Total-1">
                    <div className="Total-nums">
                        <p>120</p>
                        <p>Total Menus</p>
                        
                    </div>
                    <div className="Total-icon"><i class="fa fa-list-ul" aria-hidden="true"></i></div>
                </div>
                <progress id="file" value="32" max="100"> 32% </progress>
            </div>
            <div className="Total-percentage">
            
            </div>
        </div>
        </>
    );
}

export default Total;
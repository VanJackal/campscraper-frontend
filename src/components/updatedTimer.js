function UpdatedTimer() {
    return(
        <div className="time">
            <p>{getUpdateTime().toString()}</p>
        </div>
    )
}

function getUpdateTime(){
    return new Date();
}

export default UpdatedTimer;
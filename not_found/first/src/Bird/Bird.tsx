import BirdAnim from "./Bird-anim/Bird-anim";
function addBirdAnim(){
    let arr=[];
    for(let i=0; i<10; i++){
        arr.push(<BirdAnim/>)
    }
    return arr
}

function ConteinerBird(){
    return(
    <div className="container container-bird">
        {addBirdAnim()}
        <div className="container-title">
            <div className="title">
                <div className="number">4</div>
                <div className="moon">
                    <div className="face">
                        <div className="mouth"></div>
                        <div className="eyes">
                            <div className="eye-left"></div>
                            <div className="eye-right"></div>
                        </div>
                    </div>
                </div>
                <div className="number">4</div>
            </div>
            <div className="subtitle">Oops. Looks like you took a wrong turn.</div>
            <button>Go back</button>
        </div>
    </div>); 
}
export default ConteinerBird;
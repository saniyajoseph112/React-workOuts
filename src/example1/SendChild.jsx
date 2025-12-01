

const SendChild =({RefData})=>{
    const  sendData =()=>{
        RefData.current = "hello from child";

    };

    return(
        <div>
            <h2>child compoment</h2>
            <button onClick={sendData}>send data to parent</button>
        </div>
    )
}
export default SendChild;
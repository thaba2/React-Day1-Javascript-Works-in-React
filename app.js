console.log("Message to Developer")
function Alertmessage (){
    const Hi=()=>{alert("Message from Javascript Alert!")}
     return <div><button onClick={Hi}>Click</button></div>
}
ReactDOM.render(<Alertmessage/>,document.getElementById('mydiv'))
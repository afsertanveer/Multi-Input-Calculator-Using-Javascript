function getValueFromId(id){
    const value =parseFloat(document.getElementById(id).innerText);
    return value;
}
function setValue(val){
    if(document.getElementById('display-screen').value==="0"){
        document.getElementById('display-screen').value ="";
    }
    document.getElementById('display-screen').value =document.getElementById('display-screen').value + val;
}
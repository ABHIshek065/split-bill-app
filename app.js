function split(){
    let amt = document.getElementById('amt').value;
    let per = document.getElementById('per').value;

let result = (amt / per).toFixed(2);
document.getElementById('result').innerText = result;

}
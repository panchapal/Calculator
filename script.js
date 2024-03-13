function clickme(value) {
    document.getElementById('display').value += value;
}


function calculate() {
    var input = document.getElementById('display').value;
    var result = eval(input); 
    document.getElementById('display').value = result; 
}


document.getElementById('remove').addEventListener('click', function() {
    document.getElementById('display').value = '';
});



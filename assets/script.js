document.getElementById("output").style.visibility = "hidden";

document.getElementById("lbs-input").addEventListener('input', function(e) {
    document.getElementById("output").style.visibility = "visible";
    let pounds = e.target.value;
    document.getElementById("grams-output").innerHTML = (pounds/0.0022046 * 100 / 100).toFixed(2);
    document.getElementById("kg-output").innerHTML = (pounds/2.2046).toFixed(2);
    document.getElementById("ounces-output").innerHTML = pounds * 16;
});
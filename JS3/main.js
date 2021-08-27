var inputs = document.querySelectorAll(".control input")
var SpacingValue = document.getElementById("Spacing");
var BlurValue = document.getElementById("Blur");
var GrayScaleValue = document.getElementById("GrayScale");
var SpacingValue = document.getElementById("Spacing");
var ValueChange1 = document.getElementById("value1");
var ValueChange2 = document.getElementById("value2");
var ValueChange3 = document.getElementById("value3");

console.log("抓到的input", inputs);
console.log("Spacing", SpacingValue);

function TrackingChange() {
    const Track = this.dataset.sizing || ``;
    // console.log("是否有抓到", Track)
    document.documentElement.style.setProperty(`--${this.id}`, this.value + Track);
    ValueChange1.innerHTML = SpacingValue.value;
    ValueChange2.innerHTML = BlurValue.value * 5;
    ValueChange3.innerHTML = GrayScaleValue.value * 100;

    // console.log("名字", this.id);
    // console.log("數值", this.value + Track);
}

inputs.forEach(input => input.addEventListener('change', TrackingChange));
inputs.forEach(input => input.addEventListener('mousemove', TrackingChange));
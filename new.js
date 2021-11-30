
var ul = document.querySelector("#list");
var sul = document.querySelector("#slist");
var input = document.querySelector("#input");
var enter = document.querySelector('#enter');
var bs = document.querySelector("#bs");
var state = document.querySelector("#state");

let click = 0
var count = 0;

enter.addEventListener('click', ent);

// function for insterting the values with id
function ent() {
    if (count < 10) {
        click = 0;
        if (input.value == '')
            input.value = "00";

        if (input.value.length == 1)
            input.value = "0" + input.value[0];

        ul.innerHTML += `<li id=${count}> </li>`;
        sul.innerHTML += `<li class="sli" id=${count + 10}> ${input.value[0] + input.value[1]} </li>`;

        count++;
    }

};



input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13 || input.value.length > 2) {
        ent();
        input.value = '';
    }

});



bs.addEventListener('click', function () {
    if (count > 1 && click < 1) {
        click++;
        // let space = 7;
        let id = null;
        // Here we are creat loop which will run after every 1sec
        id = setInterval(frame, 1000);

        let i = 0, j = 0;

        function frame() {

            var li = document.getElementById(j);
            var li2 = document.getElementById(j + 1);
            var inli1 = document.getElementById(j + 10);
            var inli2 = document.getElementById(j + 11);
            var a = inli1.innerHTML, b = inli2.innerHTML;

            let r = 0; l = 0;
            function ani() {

                l += 1; r -= 1;
                inli1.style.left = l + "px";
                inli2.style.left = r + "px";
                if (l <= 22) {
                    window.requestAnimationFrame(ani);
                }
                else {
                    l = 0; r = 0;
                    inli1.style.left = l + "px";
                    inli2.style.left = r + "px";

                    inli1.innerHTML = b;
                    inli2.innerHTML = a;
                }
            }

            if (parseInt(a) > parseInt(b)) {
                li.style.backgroundColor = "#1CA89D";
                li2.style.backgroundColor = "#1CA89D";
                state.innerHTML = "swap";
                window.requestAnimationFrame(ani);
            }
            else {
                li.style.backgroundColor = "#40AAF4";
                li2.style.backgroundColor = "#40AAF4";
                state.innerHTML = "sorted";
            }

            setTimeout(() => {

                li.style.backgroundColor = "black";
                li2.style.backgroundColor = "black";
                state.innerHTML = "";
            }, 950);

            if (j < count - i - 2) { j++; }
            else { i++; j = 0; }

            if (!(i < count - 1)) { clearInterval(id); }

        }

    }
});
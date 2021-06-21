var selectedImageName;
var output;
var currentImage;
let data;
let shuffledData;
start();

function start(){
    let el = document.getElementById("img-grid");
    data = [
        `<img src='https://picsum.photos/id/0/200/' alt='' data-ns-test='img1' class='image'>`,
        `<img src='https://picsum.photos/id/30/200/' alt='' data-ns-test='img2' class='image'>`,
        `<img src='https://picsum.photos/id/10/200/' alt='' data-ns-test='img3' class='image'>`,
        `<img src='https://picsum.photos/id/15/200/' alt='' data-ns-test='img4' class='image'>`,
        `<img src='https://picsum.photos/id/20/200/' alt='' data-ns-test='img5' class='image'>`,
    ];
    var random = data[Math.floor(Math.random()*data.length)];
    // console.log(random);
    data.push(random);
    count = 0;
    selectedImageName = "";
    currentName = "";
    output = "";
    shuffledData = data
    .map((num)=>({
            sort:Math.random(), value:num
        }))
        .sort ((a,b) => a.sort - b.sort)
        .map ((a) => a.value)
        for( var i =0 ; i<shuffledData.length ; i++){
            output += shuffledData[i];
        }
        console.log(output);
        count = 0;
        el.innerHTML = output   ;
        clickImages();
}
function reset(){
    start();
    document.getElementById('para').innerHTML = "";
    document.getElementById('reset').style.display= "none";
    document.getElementById('verify').style.display = "none";
}

function verify(){
    console.log(currentName);
    console.log(selectedImageName);
    if (currentName === selectedImageName){
        document.getElementById("para").innerHTML= "You are human"
    }
    else {
        document.getElementById("para").innerHTML="recognition failed"
    }
    document.getElementById('verify').style.display="none";
}

function clickImages(){
    document.querySelectorAll('.image').forEach(element => {
        element.addEventListener('click',event => {
            console.log(element.getAttribute('data-ns-test'));
            count++;
            if (count > 0){
                document.getElementById('reset').style.display="inline";
                if (count ==2){
                    document.getElementById('verify').style.display="inline";
                }else if (count > 2){
                    document.getElementById('verify').style.display="none";
                    document.getElementById('para').innerHTML="verification failed";
                    return;
                }
            }
            currentName = element.getAttribute("data-ns-test");
            if (count ==1){
                element.setAttribute('img-clicked','true');
                selectedImageName = currentName;
            } else if (element.getAttribute('img-clicked')=='true'){
                selectedImageName = "";
                document.getElementById('verify').style.display="none";
                count--;
            }
        })
    })
}



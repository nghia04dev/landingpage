let dispaly_img = document.getElementById("display_img");
let frame_product = document.getElementById("frame_product")
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
function next_img(n){
    if(n==1){
        dispaly_img.src = "https://assets.website-files.com/613876a7b33fb3489f971594/613b68e04c8689350c91fb83_img1.png";
        frame_product.style.backgroundColor = "#046940";
    }else if(n==2){
        dispaly_img.src = "https://assets.website-files.com/613876a7b33fb3489f971594/613b694ad85bf1ed4e1bd882_img2-p-500.png";
        frame_product.style.backgroundColor = "#e37991";
    }else if(n==3){
        dispaly_img.src = "https://assets.website-files.com/613876a7b33fb3489f971594/613b6312a29ea7ab6fe502e4_img3.png";
        frame_product.style.backgroundColor = "#f88966";
    }
}
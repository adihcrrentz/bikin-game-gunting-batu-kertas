//menyeleksi pilihan player dan tempat menaruh hasil
const option = document.querySelectorAll(".option");
const hasil = document.querySelector(".hasil")
//melakukan operasi array dari hasil seleksi dom
option.forEach(function (e){
  e.addEventListener("click",()=>{
const value = e.getAttribute("data-value")
//membuat pilihan random komputer
let comp = Math.round(Math.random()*10+1)
if (comp <= 3){
  comp = "✂️"
} else if (comp < 7){
  comp = "📝"
} else{
  comp = "🗿"
}

//membuat hasil pertarungan komputer dan player
let result = "";
if ( value === comp){result= "seri";
}
else{
result =  (
(value === "✂️" && comp === "📝")
|| 
(value === "🗿" && comp === "✂️")
|| 
(value === "📝" && comp === "🗿")
) ? "anda menang!" : "Anda kalah!"
}

//menampilkan hasil pertarungan ke document
hasil.textContent ="..."


//membuat jeda tampilan supaya lebih menarik

setTimeout(()=>{
  if(result === "anda menang!"){
  hasil.style.color = "lightGreen"
} else if(result === "Anda kalah!"){
  hasil.style.color = "red"
} else {
  hasil.style.color = "#ca855f"
}
 hasil.innerHTML = `${value} VS ${comp} <br> ${result}` 
}, 1500)
setTimeout(()=> {hasil.removeAttribute("style")
  hasil.innerHTML = `anda memilih ${value} dan komputer memilih ${comp} <br>hasilnya ${result}
<br><br><br>
<button onClick="location.reload()">Main Ulang</button>`
},4000)
});
});
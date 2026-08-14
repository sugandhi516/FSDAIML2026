const div = document.getElementById("container");
const button = document.getElementById("btn");
async function display() {
    const serverdata =await fetch("https://fakestoreapi.com/products");
   const jsondata = await serverdata.json();
   console.log(jsondata);
   console.log(jsondata[0].title);
   console.log(jsondata[1].price);
   // div.innerHTML= '<h1>Hello using DOM</h1>';

}
button.addEventListener("click", display); 
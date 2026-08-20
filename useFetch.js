const div = document.getElementById('container');
const button = document.getElementById('btn');

async function display() {

    const h2 = document.createElement('h2');
    h2.innerText = 'Data is loading...';

    try {
        div.appendChild(h2);

        const serverdata = await fetch('https://fakestoreapi.com/products');
        const jsonData = await serverdata.json();

        let table = `
            <table border="1" cellspacing="0" cellpadding="10">
                <tr>
                    <th>Image</th>
                    <th>Id</th>
                    <th>Item-title</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>

                ${jsonData.map((ele) => {
                    return `
                        <tr>
                            <td>
                                <img src="${ele.image}" 
                                     width="80" 
                                     height="80">
                            </td>

                            <td>${ele.id}</td>

                            <td>${ele.title}</td>

                            <td>$${ele.price}</td>

                            <td>
                                <button onclick="addToCart(${ele.id})">
                                    Add to Cart
                                </button>
                            </td>
                        </tr>
                    `;
                }).join('')}

            </table>
        `;

        div.innerHTML = table;

    } catch (error) {

        console.log(error);
        div.innerHTML = `<h2>Error loading data</h2>`;

    } finally {

        h2.remove();
    }
}


function addToCart(id) {
    console.log("Product added to cart:", id);
}


button.addEventListener('click', display);
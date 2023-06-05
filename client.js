
document.getElementById("add_product_btn").addEventListener("click", add_product);
document.getElementById("delete_product_btn").addEventListener("click", delete_product);
document.getElementById("show_list_btn").addEventListener("click", show_list);
document.getElementById("show_category_btn").addEventListener("click", show_category);

function add_product() {
    let container = document.getElementById("add_product_form");

    document.getElementById("add_product_btn").disabled = true;

    let label_name = document.createElement("label");
    label_name.innerText = "product name:";
    let name = document.createElement("input");
    name.id = "product_name";
    label_name.htmlFor = "product_name";

    let label_ctg = document.createElement("label");
    label_ctg.innerText = "category:";
    let ctg = document.createElement("input");
    ctg.id = "product_ctg";
    label_ctg.htmlFor = "product_ctg";

    let label_price = document.createElement("label");
    label_price.innerText = "price:";
    let price = document.createElement("input");
    price.id = "product_price";
    price.type = "number";
    price.min = 0; price.step = 0.1;
    label_price.htmlFor = "product_price";

    let label_amount = document.createElement("label");
    label_amount.innerText = "amount:";
    let amount = document.createElement("input");
    amount.id = "product_amount";
    amount.type = "number";
    amount.min = 0;
    label_amount.htmlFor = "product_amount";

    let send = document.createElement("button");
    send.id = "send_new_product_btn";
    send.innerText = "add";
    send.addEventListener("click", post(container));

    // container.append(label_name, name, document.createElement("br"), label_ctg, ctg, document.createElement("br"), label_price, price, document.createElement("br"), label_amount, amount, send);
    container.append(label_name, name, label_ctg, ctg,  label_price, price, label_amount, amount, send);
}



function delete_product() {

}

function post() {
    // let product = new Product(product_name.innerText, product_ctg.innerText, product_price.innerText, product_amount.innerText);
    // FXMLHttpRequest(p)
}
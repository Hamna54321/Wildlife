let subsc = [];
const display = document.getElementById("newsletter-list");
const subscriber_List = localStorage.getItem("subscriptions");

console.log(localStorage.getItem("subscriptions"));

if(subscriber_List){
    const subs = JSON.parse(subscriber_List);

    for(i= 0 ; i < subs.length; i++ ){
        subs.push(subscriber_List[i]);
        display.innerHTML += `${subscriber_List[i]}<br>`;
    }
}
console.log("hi");

// const subs = JSON.parse(subscriber_List);

//     let html_code = ""
//     for(i= 0 ; i < subscriber_List.length; i++ ){
//         html_code += `<li>${subscriber_List[i]}</li>`;
//         display.innerHTML = html_code;
//         console.log("Hi");
//     }
//     return html_code

// console.log("subscriptionsString");


// subscribers(subscriber_List);
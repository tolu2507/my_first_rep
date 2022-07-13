let myLeads = [];
const btn = document.getElementById("input_btn");
const inputEd = document.getElementById("input-id");
const listEd = document.getElementById("list_id");
const delEd = document.getElementById("del_btn");
const tabEd = document.getElementById("tab_btn");

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads)
}

tabEd.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })
})

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
    listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
    `;
}
listEd.innerHTML =  listItems   
}

delEd.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

btn.addEventListener("click", function() {
    myLeads.push(inputEd.value)
    inputEd.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
});
function searchFilter() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("keywords");
    filter = input.value.toUpperCase();
    ul = document.getElementById("listItems");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

export default { searchFilter };
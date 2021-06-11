
const myUrl = document.getElementById('ourUrl').value;

encodeUrl = () => {

    const myUrl = document.getElementById('ourUrl').value;
    const url = myUrl;
    const result = escape(encodeURIComponent(url));
    document.getElementById("urlEncoded").innerHTML = `${result}`;

}


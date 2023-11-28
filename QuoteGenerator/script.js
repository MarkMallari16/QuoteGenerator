const quote = document.getElementById("quote")
const author = document.getElementById("author");
const copy = document.getElementById("clipboard");

const random = () => {
    const num = Math.floor(Math.random() * 16)

    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const thetext = data[num].text
            const theauthor = data[num].author
            quote.innerText = thetext;
            author.innerText = `- ${theauthor}`;
            function copyClipboard() {
                try {
                    navigator.clipboard.writeText(`${thetext}, quoted by '${theauthor}';`);

                } catch (err) {
                    console.log(err)
                }
            }
            copy.addEventListener("click", copyClipboard);

        });
}





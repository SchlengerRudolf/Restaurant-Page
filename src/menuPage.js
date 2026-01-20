export const menuPage = (function () {
        const contentContainer = document.querySelector("#content");

        const clear = () => contentContainer.textContent = "";

        const display = () => {
            clear();

            const headline = document.createElement("h1");
            const headlineContent = document.createTextNode("Sortiment");
            headline.appendChild(headlineContent);
            contentContainer.appendChild(headline);

            const mainText = document.createElement("p");
            const mainTextContent = document.createTextNode("Cookies:\nSmall and cripsy pastry, in various shapes and flavours\n\nCakes:\nSweet pastry in various shapes and sizes\n\nPies and Tarts:\nSweet and savoury pastry, with a crispy crust and filled with fruits, vegetables or meat");
            mainText.appendChild(mainTextContent);
            contentContainer.appendChild(mainText);
        }

            return {display};
    })();
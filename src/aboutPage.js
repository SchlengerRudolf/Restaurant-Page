export const aboutPage = (function () {
        const contentContainer = document.querySelector("#content");

        const clear = () => contentContainer.textContent = "";

        const display = () => {
            clear();

            const headline = document.createElement("h1");
            const headlineContent = document.createTextNode("Our Story");
            headline.appendChild(headlineContent);
            contentContainer.appendChild(headline);

            const mainText = document.createElement("p");
            const mainTextContent = document.createTextNode("Diego's traditional german bakery was founded with a big goal: bring german pastry all over the world. With stores in over 50+ diffrent countrys, Diego's is the largest bakery chain in the world. But still with no loss in quality, all ingredients are fresh and from local producer. With the brilliancy of german bakery and the philosophy of Diego's you will just get the finest and most delicous pastry you ever had.");
            mainText.appendChild(mainTextContent);
            contentContainer.appendChild(mainText);
        }

            return {display};
    })();
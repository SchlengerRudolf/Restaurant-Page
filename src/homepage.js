    export const homepage = (function () {
        const contentContainer = document.querySelector("#content");

        const clear = () => contentContainer.textContent = "";

        const display = () => {
            clear();

            const headline = document.createElement("h1");
            const headlineContent = document.createTextNode("Diego's traditional german bakery");
            headline.appendChild(headlineContent);
            contentContainer.appendChild(headline);

            const mainText = document.createElement("p");
            const mainTextContent = document.createTextNode("Here at Diego's you will get best, fresh and traditional german pastry");
            mainText.appendChild(mainTextContent);
            contentContainer.appendChild(mainText);

            const hoursHeading = document.createElement("h2");
            hoursHeading.textContent = "Hours:";
            contentContainer.appendChild(hoursHeading)

            const hours = document.createElement("p");
            const hoursContent = document.createTextNode("Monday: 5am - 6pm\nTuesday: 5am - 6pm\nWednesday: 5am - 6pm\nThursday: 5am - 6pm\nFriday: 5am - 6pm\nSaturday: 5am - 5pm\nSunday: 5am - 5pm\n");
            hours.appendChild(hoursContent);
            contentContainer.appendChild(hours);
        }

            return {display};
    })();
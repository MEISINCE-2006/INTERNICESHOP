const offerButtons = document.querySelectorAll(".offer-btn");
offerButtons.forEach(button => {
    button.addEventListener("click", function() {
        const offer = this.getAttribute("data-offer");
        const offerText = this.parentElement.querySelector(".offer-text");
        offerText.textContent = offer;
    });
});
const orderButtons = document.querySelectorAll(".order-btn");
orderButtons.forEach(button => {
    button.addEventListener("click", function() {
        const card = this.parentElement;
        const iceCreamName = card.querySelector("h3").textContent;
        const selectBox = card.querySelector(".flavour-select");
        if (selectBox.style.display === "none") {
            selectBox.style.display = "block";
        } else {
            const selectedFlavour = selectBox.value;
            if (selectedFlavour) {
                alert(`Order placed for: ${iceCreamName} - ${selectedFlavour} 🍦`);
                selectBox.style.display = "none";
                selectBox.value = "";
            } else {
                alert("Please select a flavour before placing your order.");
            }
        }
    });
});


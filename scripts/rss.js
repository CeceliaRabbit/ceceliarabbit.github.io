function copyToClipboard(event) {
    event.preventDefault();
    navigator.clipboard.writeText(event.target.getAttribute("href")).then(() => {
    /* copied! */
    }, );

    copyBtn.innerText = "copied!";
    linkContainer.classList.add("copied");
}

// copyBtn.addEventListener("click", copyToClipboard);

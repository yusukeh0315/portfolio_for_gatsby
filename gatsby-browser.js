const addScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    document.body.appendChild(script)
}
export const onClientEntry = () => {
    window.onload = () => {
        addScript("https://code.jquery.com/jquery-3.4.1.min.js")
        addScript("https://cdn.jsdelivr.net/npm/shuffle-text@0.3.0/build/shuffle-text.min.js")
        addScript("https://cdn.jsdelivr.net/npm/vivus@latest/dist/vivus.min.js")
        addScript("https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js")
        addScript("/javascripts/main.js")
    }
}
// const $ = require("jquery")

// export const onInitialClientRender = () => {
//     $(document).ready(function () {
//         console.log("The answer is don't think about it!")
//     });
// }

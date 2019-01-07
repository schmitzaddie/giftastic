var topics = ["dog", "gerbil", "llama"]

for (let i = 0; i < topics.length; i++) {
    var buttons = $("<button>" + topics[i] + "</button>")
    buttons.appendTo("#buttons");
}
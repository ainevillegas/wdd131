
// ✅ Get references
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// ✅ Load from localStorage OR empty array
let chaptersArray = getChapterList() || [];

// ✅ Display existing chapters on page load
chaptersArray.forEach(chapter => displayList(chapter));

// ✅ Button click event
button.addEventListener("click", () => {

    if (input.value !== "") {

        displayList(input.value);              // show on page
        chaptersArray.push(input.value);       // add to array
        setChapterList();                      // save to localStorage

        input.value = "";                      // clear input
        input.focus();                         // focus back
    }
});

// ✅ Display function
function displayList(item) {

    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");

    li.textContent = item;
    deleteBtn.textContent = "❌";

    li.append(deleteBtn);
    list.append(li);

    // ✅ Delete event
    deleteBtn.addEventListener("click", () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

// ✅ Save to localStorage
function setChapterList() {
    localStorage.setItem("chapters", JSON.stringify(chaptersArray));
}

// ✅ Get from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem("chapters"));
}

// ✅ Delete function
function deleteChapter(chapter) {

    // remove ❌
    chapter = chapter.slice(0, chapter.length - 1);

    // filter array
    chaptersArray = chaptersArray.filter(item => item !== chapter);

    // update storage
    setChapterList();
}

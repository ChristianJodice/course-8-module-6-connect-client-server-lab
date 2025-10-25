console.log('hello from separate js file')

async function getEvents() {
    const res = await fetch('http://localhost:3000/events')
    const data = await res.json()
    data.forEach(event => renderEvent(event))
}

getEvents()

function renderEvent(event) {
    const li = document.createElement("li");
    li.textContent = event.title;
    li.classList.add('event')
    document.querySelector("#event-list").appendChild(li);
}

document.getElementById('event-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    // submit the post request to the backend
    const title = document.getElementById("title").value
    const res = await fetch("http://localhost:3000/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title })
    })
    const data = await res.json()
    renderEvent(data)
    console.log('the form was submitted')
})
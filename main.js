async function renDerUser() {
    try {
        const vada = await fetch("https://randomuser.me/api/");
        const vadaKeldi = await vada.json();

        const obyektlar = vadaKeldi.results[0];

        const div = document.createElement("div");
        div.id = "user-container";
        div.className = "bg-white p-18 rounded-2xl shadow-lg text-center w-160 mx-auto mt-20";
        div.innerHTML = `
            <img src="${obyektlar.picture.large}" class="w-40 h-40 rounded-full mx-auto mb-4">
            <h2 class="text-3xl font-semibold text-teal-500">${obyektlar.name.title} ${obyektlar.name.first} ${obyektlar.name.last}</h2>
            <p class="text-gray-500 text-2xl">Frontend Developer</p>
            <div class="text-left mt-4 text-sm">
                <p class = "text-xl "><span class="text-2xl font-bold">Phone:</span> ${obyektlar.phone}</p>
                <p class = "text-xl "><span class=" text-2xl font-bold">Yoshi:</span> ${obyektlar.dob.age}</p>
                <p class = "text-xl "><span class="text-2xl font-bold">Manzil:</span> ${obyektlar.location.city}, ${obyektlar.location.country}</p>
                <p class = "text-xl "><span class="text-2xl font-bold">Email:</span> ${obyektlar.email}</p>
            </div>
            <button id="btn" class="bg-blue-500 text-white px-50 py-5 rounded-3xl mt-6 hover:bg-blue-600">Change user</button>
        `;

        document.body.innerHTML = "";
        document.body.className = "bg-gray-100";
        document.body.appendChild(div);

        document.getElementById("btn").addEventListener("click", renDerUser);
    } catch (error) {
        console.log("Xatolik", error);
    }
}

renDerUser();
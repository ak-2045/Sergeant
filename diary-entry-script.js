// Dummy data for diary entries with fixed entries for each week
const diaryEntries = {
    week1: { date: "Monday", text: "Had a great start to the week.", image: "image1.jpg" },
    week2: { date: "Tuesday", text: "Productive day!", image: "image4.jpg" },
    week3: { date: "Wednesday", text: "Worked hard on my project.", image: "image5.jpg" },
    week4: { date: "Thursday", text: "Went for a walk and relaxed.", image: "image6.jpg" },
    week5: { date: "Friday", text: "Prepared for the weekend.", image: "image7.jpg" },
    week6: { date: "Saturday", text: "Had a fun day out with friends.", image: "image8.jpg" },
};

function openDiary(week) {
    const entry = diaryEntries[week]; // Get the fixed entry for the selected week

    // Populate the diary with the fixed entry
    document.getElementById("diaryDate").innerText = entry.date;
    document.getElementById("diaryText").innerText = entry.text;
    document.getElementById("diaryImage").src = entry.image;

    // Show the diary notebook
    document.getElementById("diaryNotebook").classList.remove("hidden");
}

function closeDiary() {
    document.getElementById("diaryNotebook").classList.add("hidden");
}

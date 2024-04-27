console.log("JS Linked Successfully!")

// Replace date with x minutes/hours/days/months ago
const postDate = document.getElementsByClassName("post-date")

for (const date of postDate) {
    const dateTime = new Date(date.getAttribute("datetime"))
    const now = new Date();

    const timeZoneOffset = dateTime.getTimezoneOffset();
    const minutesDiffUTC = Math.floor((now - dateTime) / 60000);

    const minutesDiffLocal = Math.abs(timeZoneOffset - minutesDiffUTC);

    let result = "Written "
    // Use a library for this? nah
    if (minutesDiffLocal < 60) { // less than 60 minutes
        if (minutesDiffLocal < 2) result += "just now";
        else result += `${minutesDiffLocal} minutes ago`;
    }

    else if (minutesDiffLocal >= 60 && minutesDiffLocal < 1440) { // between 1 and 24 hours
        const hours = Math.floor(minutesDiffLocal / 60);
        if (hours === 1) result += "an hour ago";
        else result += `${hours} hours ago`;
    }

    else if (minutesDiffLocal >= 1440 && minutesDiffLocal < 43200) { // between 1 and 30 days
        const days = Math.floor(minutesDiffLocal / 1440);
        if (days === 1) result += "a day ago";
        else result += `${days} days ago`;
    }

    else if (minutesDiffLocal >= 43200 && minutesDiffLocal < 525600) { // between 30 and 365 days
        const months = Math.floor(minutesDiffLocal / 43200);
        if (months === 1) result += "a month ago";
        else result += `${months} months ago`;
    }

    else { // more than 365 days
        const years = Math.floor(minutesDiffLocal / 525600);
        if (years === 1) result += "a year ago";
        else result += `${years} years ago`;
    }

    date.textContent = result;
}

/////////////////////////////////////////////////////////////////////////////////////////

// Back to top
const myButton = document.getElementById("btn-back-to-top");

window.onscroll = () => {
    // When the user scrolls down 20px from the top of the document, show the button
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
        return;
    }
    myButton.style.display = "none";
};

// When the user clicks on the button, scroll to the top of the document
myButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


/////////////////////////////////////////////////////////////////////////////////////////
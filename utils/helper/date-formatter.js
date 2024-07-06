function GenerateTheMainMenuDateAndTime(params) {
    // Sun 7 Jul 4:27 AM
    const date = new Date()
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayOfWeek = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    let hours = date.getHours()
    const minutes = date.getMinutes()
    const ampm = hours > 12 ? "PM" : "AM"

    hours = hours%12
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesFormatted = minutes < 10 ? '0' + minutes : minutes;
    const formattedDateTime = `${dayOfWeek} ${dayOfMonth} ${month} ${hours}:${minutesFormatted}${ampm}`;
    document.getElementById('main_menu_right_div_time_and_date').textContent = formattedDateTime;
 }

 export {GenerateTheMainMenuDateAndTime}
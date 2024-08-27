function timeConversion(s: string): void {
    let newString = s.slice(0, -2);
    let timezone = s.slice(-2);

    let [hours, minutes, seconds] = newString.split(':').map(Number);

    if (timezone === 'PM' && hours !== 12) {
        hours += 12

    } else if (timezone === 'AM' && hours === 12) {
        hours = 0
    }

    let timeStore = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
    ];
    console.log(timeStore.join(':'));


}



timeConversion(('6:01:00PM'))


function timeConversions(s: string): string {
    let newString = s.slice(0, -2);
    let timezone = s.slice(-2);
    let time = new Date(`2000-01-01
        
        ${newString} ${timezone}`);

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    const timeStore = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
    ];

    return timeStore.join(':');
}
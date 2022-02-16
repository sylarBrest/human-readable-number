module.exports = function toReadable (number) {
    const textNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const decNumbers = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number < 20) {
        return textNumbers[number];
    } else if (number < 100) {
        return `${decNumbers[Math.floor(number / 10) - 2]} ${toReadable(number % 10)}`.replace(' zero', '');
    } else {
        return `${textNumbers[Math.floor(number / 100)]} hundred ${toReadable(number % 100)}`.replace(' zero', '');
    }
}

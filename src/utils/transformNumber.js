const convertIntoAbbreviation = (number, suffix = "") => {
    const suffixes = ["", "K", "M", "B", "T"];

    if (number < 1000) {
        if (number % 1 === 0) return number + suffix;

        return number.toFixed(1) + suffix;
    }

    const index = suffix ? suffixes.indexOf(suffix) + 1 : 1;
    return convertIntoAbbreviation(number / 1000, suffixes[index]);
};

export { convertIntoAbbreviation };

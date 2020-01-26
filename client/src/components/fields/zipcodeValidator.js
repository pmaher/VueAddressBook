export default function(value) {
    if (!value) return true;
    const regex = /^\d{5}(?:[-\s]\d{4})?$/;
    return regex.test(value);
}
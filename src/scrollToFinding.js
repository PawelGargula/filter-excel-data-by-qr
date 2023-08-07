export default function scrollToFinding() {
    const header = document.querySelector('.find-information h2')
    header.scrollIntoView({ behavior: "smooth", block: "start" });
}
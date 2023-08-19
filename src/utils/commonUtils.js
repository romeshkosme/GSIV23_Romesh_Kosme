let timer;
export function debounce(cb) {
    clearTimeout(timer)
    timer = setTimeout(() => {
        cb();
    }, 800);
}
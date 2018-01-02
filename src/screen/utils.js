
const DEFAULT_TITLE = 'Hpe 人事';

export function pageLoaded(title) {
    if (document) {
        if (title && typeof title === 'string') {
            title = `${title} | ${DEFAULT_TITLE}`;
        } else {
            title = DEFAULT_TITLE;
        }
        document.title = title;
    }
}

export default { pageLoaded };
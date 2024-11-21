export function hyphenateWithSpace(words: string[]): string {
    let text = '';

    if (!words) {
        return text;
    }

    for (let i = 0; i < words.length; i++) {
        if (i === words.length - 1) {
            text += words[i];
            break;
        }

        text += words[i] + ' - ';
    }

    return text;
}
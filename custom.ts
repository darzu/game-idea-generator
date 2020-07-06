namespace word {
    //% block
    export function createTextSprite(text: string, bg: number, fg: number) {
        const font = image.font8;
        const width = font.charWidth * text.length;
        const height = font.charHeight;

        const res = image.create(width, height);
        res.fill(bg);
        res.print(text, 0, 0, fg, font);

        const sprite = sprites.create(res, SpriteKind.Food);
        return sprite;
    }
} 
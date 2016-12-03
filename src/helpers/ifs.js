
export const FERN_RULES = [{
    a: 0.85, b: 0.04, c: -0.04, d: 0.85,
    tx: 0, ty: 1.6,
    weight: 0.85
}, {
    a: -0.15, b: 0.28, c: 0.26, d: 0.24,
    tx: 0, ty: 0.44,
    weight: 0.07
}, {
    a: 0.2, b: -0.26, c: 0.23, d: 0.22,
    tx: 0, ty: 1.6,
    weight: 0.07
}, {
    a: 0, b: 0, c: 0, d: 0.16,
    tx: 0, ty: 0,
    weight: 0.01
}];

export const TREE_RULES = [{
    a: 0.05, b: 0, c: 0, d: 0.6,
    tx: 0, ty: 0,
    weight: 0.17
}, {
    a: 0.05, b: 0, c: 0, d: -0.5,
    tx: 0, ty: 1,
    weight: 0.17
}, {
    a: 0.46, b: -0.321, c: 0.386, d: 0.383,
    tx: 0, ty: 0.6,
    weight: 0.17
}, {
    a: 0.47, b: -0.154, c: 0.171, d: 0.423,
    tx: 0, ty: 1.1,
    weight: 0.17
}, {
    a: 0.433, b: 0.275, c: -0.25, d: 0.476,
    tx: 0, ty: 1,
    weight: 0.16
}, {
    a: 0.421, b: 0.257, c: -0.353, d: 0.306,
    tx: 0, ty: 0.7,
    weight: 0.16
}];

export class IFS {

    constructor(canvas, rules, scale = 100) {
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        let x = Math.random(),
            y = Math.random();

        ctx.translate(width / 2, height);

        let getRule = () => {
            let rand = Math.random();
            for (let i = 0; i < rules.length; ++i) {
                let rule = rules[i];
                if (rand < rule.weight) {
                    return rule;
                }
                rand -= rule.weight;
            }
        };

        let plot = (x, y) => {
            ctx.fillRect(x * scale, -y * scale, 0.5, 0.5);
        };

        let iterate = () => {
            for (let i = 0; i < 100; ++i) {
                let rule = getRule(),
                    x1 = x * rule.a + y * rule.b + rule.tx,
                    y1 = x * rule.c + y * rule.d + rule.ty;

                x = x1;
                y = y1;

                plot(x, y);
            }
            requestAnimationFrame(iterate);
        };

        iterate();
    }
}
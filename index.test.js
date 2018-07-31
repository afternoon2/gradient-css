import Css from './index'

test(
    'If gradient-css generates correct css linear gradient',
    () => {
        const css = new Css([
            [10, 220, 33, 0.1],
            [254, 200, 10, 1]
        ], {
            base: {
                interpolation: 'linear',
                samples: 10,
                mode: 'hsl',
                lightessCorrection: true
            },
            css: {
                type: 'linear'
            }
        })
        const regexp = /linear-gradient\(((rgba\(([0-9]+\,\s?)+([0-9]?\.?[0-9]+\)\,?\s?))+)\)/
        const gradient = css.get()
        expect(regexp.test(gradient)).toBe(true)
    }
)

test(
    'If css overlay returns correct linear gradient with angle',
    () => {
        const css = new Css([
            [10, 220, 33, 0.1],
            [254, 200, 10, 1]
        ], {
            base: {
                interpolation: 'linear',
                samples: 10,
                mode: 'hsl',
                lightessCorrection: true
            },
            css: {
                type: 'linear',
                angle: 90
            }
        })
        const regexp = /linear-gradient\(([0-9]+deg\,\s?)(rgba\(([0-9]+\,\s?)+([0-9]?\.?[0-9]+\)\,?\s?))+\)/
        const gradient = css.get()
        expect(regexp.test(gradient)).toBe(true)
    }
)

test(
    'If gradient-css generates correct css radial gradient with the shape of a circle',
    () => {
        const css = new Css([
            [10, 220, 33, 0.1],
            [254, 200, 10, 1]
        ], {
            base: {
                interpolation: 'linear',
                samples: 10,
                mode: 'hsl',
                lightessCorrection: true
            },
            css: {
                type: 'radial',
                shape: 'circle'
            }
        })
        const regexp = /radial-gradient\((circle\,\s?)(rgba\(([0-9]+\,\s?)+([0-9]?\.?[0-9]+\)\,?\s?))+\)/
        const gradient = css.get()
        expect(regexp.test(gradient)).toBe(true)
    }
)

test(
    'If gradient-css generates correct css radial gradient with the shape of a circle and the position',
    () => {
        const css = new Css([
            [10, 220, 33, 0.1],
            [254, 200, 10, 1]
        ], {
            base: {
                interpolation: 'linear',
                samples: 10,
                mode: 'hsl',
                lightessCorrection: true
            },
            css: {
                type: 'radial',
                shape: 'circle',
                top: 30,
                left: 20
            }
        })
        const regexp = /radial-gradient\((circle\s?)(at\s([0-9]+%)\s[0-9]+%\,\s)(rgba\(([0-9]+\,\s?)+([0-9]?\.?[0-9]+\)\,?\s?))+\)/
        const gradient = css.get()
        expect(regexp.test(gradient)).toBe(true)
    }
)

test(
    'If gradient-css generates correct css radial gradient with the shape of a ellipse, the position and the extent keyword',
    () => {
        const css = new Css([
            [10, 220, 33, 0.1],
            [254, 200, 10, 1]
        ], {
            base: {
                interpolation: 'linear',
                samples: 10,
                mode: 'hsl',
                lightessCorrection: true
            },
            css: {
                type: 'radial',
                top: 30,
                left: 20,
                shape: 'ellipse',
                extent: 'farthest-corner'
            }
        })
        const regexp = /radial-gradient\(((farthest|closest)-(side|corner)\,?\s?)(at(\s[0-9]+%)+\,?\s?)(rgba\(([0-9]+\,\s?)+([0-9]?\.?[0-9]+\)\,?\s?))+\)/
        const gradient = css.get()
        expect(regexp.test(gradient)).toBe(true)
    }
)

// test(
//     'If gradient-css generates correct css radial gradient with the shape of a ellipse, the position and the extent keyword',
//     () => {
//         const css = new Css([
//             [10, 220, 33, 0.1],
//             [254, 200, 10, 1]
//         ], {
//             base: {
//                 interpolation: 'bezier',
//                 samples: 10,
//                 mode: 'lch',
//                 lightessCorrection: true
//             },
//             css: {
//                 type: 'radial',
//                 top: 30,
//                 left: 20,
//                 shape: 'ellipse'
//             }
//         })
//         const regexp = /radial-gradient\((\s?at(\s[0-9]+%)+\,?\s?)(rgba\(([0-9]+\,\s?)+([0-9]?\.?[0-9]+\)\,?\s?))+\)/
//         const gradient = css.get()
//         console.log(gradient)
//         expect(regexp.test(gradient)).toBe(true)
//     }
// )
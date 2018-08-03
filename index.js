import Base from 'gradient-base'

/**
 * @typedef {(number[][]|string[])} Colors - colors input 
 */

/**
 * @typedef {object} BaseOptions - Base configuration object
 * @property {string} interpolation - 'linear' or 'bezier'
 * @property {string} [mode] - 'none', 'lch', 'lab', 'rgb', 'hsv', 'hsl', 'hsi', or 'hcl' (only for linear interpolation)
 * @property {number} samples - number of output colors
 * @property {boolean} lightnessCorrection - lightness correction applier
 */

/**
 * @typedef {object} CssOptions - Css configuration object
 * @property {string} type - 'linear' or 'radial'
 * @property {number} [angle] - linear gradient's angle value
 * @property {number} [left] - radial gradient's position on the x axis
 * @property {number} [top] - radial gradient's position on the y axis
 * @property {string} [shape] - radial gradient's shape: 'ellipse' or 'circle' (mandatory for radial gradient)
 * @property {string} [extent] - radial gradient's extent keyword
 */

/**
 * @typedef {object} Options 
 * @property {BaseOptions} base
 * @property {CssOptions} css
 */

/**
 * @class CssOverlay
 * @extends Overlay
 * @classdesc
 * @param {Colors} colors
 * @param {Options} options
 * Css overlay class that returns single gradient strings
 */
export default class Css {
    constructor(colors, options) {
        /**
         * @property {Base} _base
         * @private
         */
        this._base = new Base(colors, options.base)

        /**
         * @property {number[][]} colors
         */
        this.colors = this._base.get()

        /**
         * @property {Options} options
         */
        this.options = options
    }

    /**
     * @returns {string}
     * @description
     * Returns single css gradient string
     */
    get() {
        return `${this.options.css.type}-gradient(${this._angle}${this._shape}${this._extent}${this._stringifyColors()})`
    }

    /**
     * @returns {string}
     * @private
     */
    get _angle() {
        return this.options.css.angle && this.options.css.type === 'linear' ?
            this.options.css.angle + 'deg, ' :
            ''
    }

    /**
     * @returns {string}
     * @private
     */
    get _shape() {
        if (this.options.css.type === 'radial') {
            if (
                this.options.css.shape &&
                this.options.css.shape !== 'ellipse' &&
                (!this.options.css.top && !this.options.css.left)
            ) {
                return this.options.css.shape + ', '
            }
            if (
                this.options.css.shape &&
                this.options.css.shape !== 'ellipse' &&
                (this.options.css.top && this.options.css.left)
            ) {
                return `${this.options.css.shape} at ${this.options.css.left}% ${this.options.css.top}%, `
            }
            if (
                this.options.css.shape &&
                this.options.css.shape === 'ellipse' &&
                (this.options.css.top && this.options.css.left) &&
                this.options.css.extent === 'none'
            ) {
                return `${this.options.css.shape} at ${this.options.css.left}% ${this.options.css.top}%, `
            }
            if (
                this.options.css.shape &&
                this.options.css.shape === 'ellipse' &&
                (this.options.css.top && this.options.css.left) &&
                this.options.css.extent !== 'none'
            ) {
                return ''
            }
        }
        return ''
    }

    /**
     * @returns {string}
     * @private
     */
    get _extent() {
        const afterExtent = this.options.css.top && this.options.css.left ?
            ` at ${this.options.css.left}% ${this.options.css.top}%, ` :
            ', '
        if (
            this.options.css.shape === 'ellipse' &&
            this.options.css.extent &&
            this.options.css.extent !== 'none'
        ) {
            return this.options.css.extent + afterExtent
        } else if (
            this.options.css.shape === 'ellipse' &&
            !this.options.css.extent &&
            this.options.css.top &&
            this.options.css.left
        ) {
            return afterExtent
        }
        return ''
    }

    /**
     * @returns {string[]}
     * @description
     * Maps rgba arrays to rgba css strings
     * @private
     */
    _stringifyColors() {
        return this.colors.map(color => `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`)
    }
    
}
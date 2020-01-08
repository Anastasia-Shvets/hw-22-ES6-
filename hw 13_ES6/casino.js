let values = [1, 2, 3, 4, 6];

let casino = {
    lines: [],
    createRandomLineFrom(arr) {
        return arr.map((n, i, mapppedArray) => {
            return Math.ceil(Math.random() * (arr.length - 1))
        });
    },
    fillLines(linesAmount, fromArray) {
        let self = this;
        this.lines = Array(linesAmount).fill(1).map(() => {
            return self.createRandomLineFrom(fromArray)
        })
    },
    checkMiddleLine() {
        let lineIndex = (this.lines[0].length - 1) / 2, value = this.lines[0][lineIndex];
        return this.lines.every(line => {
            return line[lineIndex] === value;
        })
    },
    checkHorizontalLine() {
        let result = false
        this.lines.forEach((arr, i) => {
            let res = arr.every((item, i, arr) => {
                return item === arr[0]
            })
            // console.log(res) 
            if (res) {
                result = res
            }
        })
        return result
    },
    checkVerticalLine() {
        let result = false
        let self = this;
        this.lines[0].forEach((value, i) => {
            let res = self.lines.every(line => {
                return line[i] === value;
            })
            if (res) result = res
        })
        return result
    }
};
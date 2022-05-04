// object destructuirng

const band = {
    bandName: "queen",
    famousSong: "Bohimian Rapsodi",
    year: 1234,
    oneMore: "tadaa"
}

// const Name = band.bandName
// const song = band.famousSong
// console.log(Name,song)

// const {bandName, famousSong} = band;
// console.log(bandName)

// const {bandName:var1, famousSong} = band;
// console.log(var1)

const {bandName, famousSong, ...remaing} = band;
console.log(remaing)
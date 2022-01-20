export const covidData = async () => {
    const res = await fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort')
    const data = await res.json()
    return data
}

export const covidDataToMap = async () => {
    const data: any[] = await covidData()
    const transform = data.map(d => ({ id: d.countryInfo.iso3, value: d.cases }))
    return transform
}
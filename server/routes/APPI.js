
router.get('/city/:city', async function (req, res) {
    let DATA
    const qCity = req.params.city
    try { DATA = await requestPromise("https://api.openweathermap.org/data/2.5/weather?q=" + qCity + apiKey)}
    catch (err) {
        return
    }
    parseString(DATA, (err, result) => {
        DATA = result.current
        DATA = [DATA]
        const relevantData = DATA.map(t => {
            return {
                name: t.city[0].$.name,
                temperature: Math.round(t.temperature[0].$.value),
                condition: t.weather[0].$.value,
                conditionPic: t.weather[0].$.icon,
                updatedAt: moment(t.lastupdate[0].$.value).format("LLLL")
            }
        })
        res.send(relevantData[0])
    })
})

router.get('/cities', async function (req, res) {
    const cities = await weather.find({})
    res.send(cities)
})

router.post('/city', function (req, res) {
    const c = new Weather(req.body)
    c.save()
    res.send(c)
})

router.delete('/city/:cityName', function (req, res) {
    const cityName = req.params.cityName
    city.deleteOne({ name: cityName }, function (err, person) {
        console.log(err)
    })
    res.end()
})
router.put('/city/:city', async function (req, res) {
    const qCity = req.params.city
    parseString(DATA, (err, result) => {
        DATA = result.current
        DATA = [DATA]
        const relevantData = DATA.map(t => {
            return {
                name: t.city[0].$.name,
                temperature: Math.round(t.temperature[0].$.value),
                condition: t.weather[0].$.value,
                conditionPic: t.weather[0].$.icon,
                updatedAt: moment(t.lastupdate[0].$.value).format("LLLL")
            }
        })
        res.send(relevantData[0])
    })
})



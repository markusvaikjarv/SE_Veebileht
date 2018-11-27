const animeeri_element = (elemendi_nimi, kiirus=75, viivitus=900) => new TypeIt(`#${elemendi_nimi}`, { 
    speed: kiirus,
    startDelay: viivitus
})

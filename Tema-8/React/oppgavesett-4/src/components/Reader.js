import React from 'react'
import "./styles.css"

export default class Reader extends React.Component {
    state = {
        article: this.props.article,
        iamge: this.props.image
    }

    car = () => {
        this.setState({
            name: "Bil",
            article: "En bil er en motorvogn som kjører på minst tre, oftest fire, hjul og er beregnet til å kjøres på vei, ikke på skinner, og frakter passasjerer eller gods. Ordet «bil» kommer fra automobil, fra gresk auto- «selv» og latin mobil «bevegelig», og er et fellesord i de tre skandinaviske språkene. Bil ble foreslått som avløserord for automobil i en konkurranse i avisen Politiken i 1902. Antallet biler vokser raskt hovedsakelig i Kina, India og andre nyindustrielle land. I Norge var de tre største bilmerkene innenfor personbiler i 2012 henholdsvis Volkswagen, Toyota og Volvo.",
            image: "http://blue-eyes.nu/files/2017/05/bil-lan.jpg"
        })
    }

    boat = () => {
        this.setState({
            name: "Båt",
            article: "En båt er et fartøy som er brukt på vann, med ett eller flere skrog som drives frem med årer, seil eller motor. Ordet brukes normalt om mindre fartøy, til forskjell fra skip. Verdens eldste båt er en cirka 10 000 år gammel stokkebåt som ble funnet i Nederland. Den kalles gjerne Pessebåten. ",
            image: "https://cdn-wpm2.redink.digital/wp-content/uploads/sites/91/2017/05/CE7I0430.jpg"
        })
    }

    plane = () => {
        this.setState({
            name: "Fly",
            article: "Et fly (også kalt en flygemaskin, i flyets barndom et aeroplan) er et luftfartøy med faste vinger, som til forskjell fra for eksempel et helikopter i utgangspunktet ikke kan «stå stille» i luften. Alle fly har en viss minimumsfart som kalles steilehastighet. Ved lavere fart vil ikke flyet være i stand til å fly. Vingene utnytter «fartsvinden» til å skape løftekraften som skal til for å holde maskinen i luften, basert på prinsippet beskrevet i Newtons 3. lov. Flyets motorer virker på luften med en kraft, og samtidig virker luften tilbake på flyet med samme kraft, og skaper oppdrift. ",
            image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Scandinavian_Airlines_A340-300_LN-RKF_DXB_2007-11-15.png"
        })
    }

    train = () => {
        this.setState({
            name: "Tog",
            article: "Jernbane, skinnelagt bane for tog. Et tog er enten et lokomotiv med tilkoblede vogner, enkle motorvogner, eller faste togsett med motorvogn og vogner. I nær 200 år har togtrafikk på jernbane vært et sentralt og viktig transportmiddel for mennesker og gods.Norges jernbanenett er på 4208 km (2017). Av dette er 2459 km elektrifisert. Den samlede lengde av verdens jernbaner var i 2015 beregnet til drøyt 1 millioner km.",
            image: "http://www.avisa-hordaland.no/polopoly_fs/1.2174851.1507907066!/image/267528224.jpg_gen/derivatives/facelift_980/267528224.jpg"
        })
    }

    render() {
        const { name, article, image } = this.state;
        return (
            <div className="reader">
                <div>
                    <h1>Hva vil du lese om?</h1>
                    <button className="button" onClick={this.car}>Biler</button>
                    <button className="button" onClick={this.boat}>Båter</button>
                    <button className="button" onClick={this.plane}>Fly</button>
                    <button className="button" onClick={this.train}>Tog</button>
                </div>
                <h1>{name}</h1>
                <div className="gridContainer">
                    <div className="gridItem"><img className="readerImg" src={image} alt={name}></img></div>
                    <div className="gridItem">{article}</div>
                </div>
            </div>
        )
    }
}
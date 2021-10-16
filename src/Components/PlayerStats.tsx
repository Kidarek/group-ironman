import * as React from "react"
import { useEffect } from "react"

interface PlayerProps {
    name: string
}


function PlayerStats(props: PlayerProps): JSX.Element {
    const [attack, setAttack] = React.useState(0)
    const [strength, setStrength] = React.useState(0)
    const [defence, setDefence] = React.useState(0)
    const [ranged, setRanged] = React.useState(0)
    const [prayer, setPrayer] = React.useState(0)
    const [magic, setMagic] = React.useState(0)
    const [runecrafting, setRunecrafting] = React.useState(0)
    const [construction, setConstruction] = React.useState(0)
    const [hitpoints, setHitpoints] = React.useState(0)
    const [agility, setAgility] = React.useState(0)
    const [herblore, setHerblore] = React.useState(0)
    const [thieving, setThieving] = React.useState(0)
    const [crafting, setCrafting] = React.useState(0)
    const [fletching, setFletching] = React.useState(0)
    const [slayer, setSlayer] = React.useState(0)
    const [hunter, setHunter] = React.useState(0)
    const [mining, setMining] = React.useState(0)
    const [smithing, setSmithing] = React.useState(0)
    const [fishing, setFishing] = React.useState(0)
    const [cooking, setCooking] = React.useState(0)
    const [firemaking, setFiremaking] = React.useState(0)
    const [woodcutting, setWoodcutting] = React.useState(0)
    const [farming, setFarming] = React.useState(0)

    useEffect(() => {
        getPlayerData()
    })

    const getPlayerData = async () => {
        const response = await fetch('https://ash6xz4rbe.execute-api.us-east-2.amazonaws.com/default/OSRS-Tools-Wrapper')
        const data = await response.json()
        const stats = data.stats
        setAttack(stats.attack.level)
        setStrength(stats.strength.level)
        setDefence(stats.defence.level)
        setRanged(stats.ranged.level)
        setPrayer(stats.prayer.level)
        setMagic(stats.magic.level)
        setRunecrafting(stats.runecrafting.level)
        setConstruction(stats.construction.level)
        setHitpoints(stats.hitpoints.level)
        setAgility(stats.agility.level)
        setHerblore(stats.herblore.level)
        setThieving(stats.thieving.level)
        setCrafting(stats.crafting.level)
        setFletching(stats.fletching.level)
        setSlayer(stats.slayer.level)
        setHunter(stats.hunter.level)
        setMining(stats.mining.level)
        setSmithing(stats.smithing.level)
        setFishing(stats.fishing.level)
        setCooking(stats.cooking.level)
        setFiremaking(stats.firemaking.level)
        setWoodcutting(stats.woodcutting.level)
        setFarming(stats.farming.level)
    }
    return (
        <table>
            <thead>
                <tr>
                    <td>{props.name}</td>    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Attack</td>
                    <td>{attack}</td>
                </tr>
                <tr>
                    <td>Strength</td>
                    <td>{strength}</td>
                </tr>
                <tr>
                    <td>Defence</td>
                    <td>{defence}</td>
                </tr>
                <tr>
                    <td>Ranged</td>
                    <td>{ranged}</td>
                </tr>
                <tr>
                    <td>Prayer</td>
                    <td>{prayer}</td>
                </tr>
                <tr>
                    <td>Magic</td>
                    <td>{magic}</td>
                </tr>
                <tr>
                    <td>Runecrafting</td>
                    <td>{runecrafting}</td>
                </tr>
                <tr>
                    <td>Construction</td>
                    <td>{construction}</td>
                </tr>
                <tr>
                    <td>Hitpoints</td>
                    <td>{hitpoints}</td>
                </tr>
                <tr>
                    <td>Agility</td>
                    <td>{agility}</td>
                </tr>
                <tr>
                    <td>Herblore</td>
                    <td>{herblore}</td>
                </tr>
                <tr>
                    <td>Thieving</td>
                    <td>{thieving}</td>
                </tr>
                <tr>
                    <td>Crafting</td>
                    <td>{crafting}</td>
                </tr>
                <tr>
                    <td>Fletching</td>
                    <td>{fletching}</td>
                </tr>
                <tr>
                    <td>Slayer</td>
                    <td>{slayer}</td>
                </tr>
                <tr>
                    <td>Hunting</td>
                    <td>{hunter}</td>
                </tr>
                <tr>
                    <td>Mining</td>
                    <td>{mining}</td>
                </tr>
                <tr>
                    <td>Smithing</td>
                    <td>{smithing}</td>
                </tr>
                <tr>
                    <td>Fishing</td>
                    <td>{fishing}</td>
                </tr>
                <tr>
                    <td>Cooking</td>
                    <td>{cooking}</td>
                </tr>
                <tr>
                    <td>Firemaking</td>
                    <td>{firemaking}</td>
                </tr>
                <tr>
                    <td>Woodcutting</td>
                    <td>{woodcutting}</td>
                </tr>
                <tr>
                    <td>Farming</td>
                    <td>{farming}</td>
                </tr>
            </tbody>
            
        </table>
    )
}

export default PlayerStats

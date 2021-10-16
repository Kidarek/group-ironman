import * as React from "react"
import { useEffect } from "react"

interface PlayerProps {
    name: string
}

let loaded = false

function PlayerStats(props: PlayerProps): JSX.Element {
    const [attack, setAttack] = React.useState(0)
    const [strength, setStrength] = React.useState(0)
    const [defence, setDefence] = React.useState(0)
    const [ranged, setRanged] = React.useState(0)
    const [prayer, setPrayer] = React.useState(0)
    const [magic, setMagic] = React.useState(0)
    const [runecraft, setRunecraft] = React.useState(0)
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

    const [stats, setStats] = React.useState({
        attack: 0,
        strength: 0,
        defence: 0,
        ranged: 0,
        prayer: 0,
        magic: 0,
        runecraft: 0,
        construction: 0,
        hitpoints: 0,
        agility: 0,
        herblore: 0,
        thieving: 0,
        crafting: 0,
        fletching: 0,
        slayer: 0,
        hunter: 0,
        mining: 0,
        smithing: 0,
        fishing: 0,
        cooking: 0,
        firemaking: 0,
        woodcutting: 0,
        farming: 0,
    })

    useEffect(() => {
        getPlayerData()
    })

    const getPlayerData = async () => {
        if (loaded) {
            return
        }
        const response = await fetch('https://ash6xz4rbe.execute-api.us-east-2.amazonaws.com/default/OSRS-Tools-Wrapper')
        const data = await response.json()
        const stats = data.stats

        setStats({
            attack: stats.attack.level,
            strength: stats.strength.level,
            defence: stats.defence.level,
            ranged: stats.ranged.level,
            prayer: stats.prayer.level,
            magic: stats.magic.level,
            runecraft: stats.runecrafting.level,
            construction: stats.construction.level,
            hitpoints: stats.hitpoints.level,
            agility: stats.agility.level,
            herblore: stats.herblore.level,
            thieving: stats.thieving.level,
            crafting: stats.crafting.level,
            fletching: stats.fletching.level,
            slayer: stats.slayer.level,
            hunter: stats.hunter.level,
            mining: stats.mining.level,
            smithing: stats.smithing.level,
            fishing: stats.fishing.level,
            cooking: stats.cooking.level,
            firemaking: stats.firemaking.level,
            woodcutting: stats.woodcutting.level,
            farming: stats.farming.level,
        })
        loaded = true
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
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Attack_icon.png'/> Attack</td>
                    <td>{stats.attack}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Strength_icon.png'/> Strength</td>
                    <td>{stats.strength}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Defence_icon.png'/> Defence</td>
                    <td>{stats.defence}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Ranged_icon.png'/> Ranged</td>
                    <td>{stats.ranged}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Prayer_icon.png'/> Prayer</td>
                    <td>{stats.prayer}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Magic_icon.png'/> Magic</td>
                    <td>{stats.magic}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Runecraft_icon.png'/> Runecraft</td>
                    <td>{stats.runecraft}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Construction_icon.png'/> Construction</td>
                    <td>{stats.construction}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Hitpoints_icon.png'/> Hitpoints</td>
                    <td>{stats.hitpoints}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Agility_icon.png'/> Agility</td>
                    <td>{stats.agility}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Herblore_icon.png'/> Herblore</td>
                    <td>{stats.herblore}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Thieving_icon.png'/> Thieving</td>
                    <td>{stats.thieving}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Crafting_icon.png'/> Crafting</td>
                    <td>{stats.crafting}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Fletching_icon.png'/> Fletching</td>
                    <td>{stats.fletching}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Slayer_icon.png'/> Slayer</td>
                    <td>{stats.slayer}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Hunter_icon.png'/> Hunter</td>
                    <td>{stats.hunter}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Mining_icon.png'/> Mining</td>
                    <td>{stats.mining}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Smithing_icon.png'/> Smithing</td>
                    <td>{stats.smithing}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Fishing_icon.png'/> Fishing</td>
                    <td>{stats.fishing}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Cooking_icon.png'/> Cooking</td>
                    <td>{stats.cooking}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Firemaking_icon.png'/> Firemaking</td>
                    <td>{stats.firemaking}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Woodcutting_icon.png'/> Woodcutting</td>
                    <td>{stats.woodcutting}</td>
                </tr>
                <tr>
                    <td><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Farming_icon.png'/> Farming</td>
                    <td>{stats.farming}</td>
                </tr>
            </tbody>
            
        </table>
    )
}

export default PlayerStats

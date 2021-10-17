import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import * as React from "react"
import { useEffect } from "react"

interface PlayerProps {
    name: string
}

let loaded = false

function PlayerStats(props: PlayerProps): JSX.Element {
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
        const response = await fetch('https://ash6xz4rbe.execute-api.us-east-2.amazonaws.com/default/OSRS-Tools-Wrapper?name=' + props.name)
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
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>{props.name}</TableCell>    
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Attack_icon.png'/> Attack</TableCell>
                    <TableCell>{stats.attack}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Strength_icon.png'/> Strength</TableCell>
                    <TableCell>{stats.strength}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Defence_icon.png'/> Defence</TableCell>
                    <TableCell>{stats.defence}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Ranged_icon.png'/> Ranged</TableCell>
                    <TableCell>{stats.ranged}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Prayer_icon.png'/> Prayer</TableCell>
                    <TableCell>{stats.prayer}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Magic_icon.png'/> Magic</TableCell>
                    <TableCell>{stats.magic}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Runecraft_icon.png'/> Runecraft</TableCell>
                    <TableCell>{stats.runecraft}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Construction_icon.png'/> Construction</TableCell>
                    <TableCell>{stats.construction}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Hitpoints_icon.png'/> Hitpoints</TableCell>
                    <TableCell>{stats.hitpoints}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Agility_icon.png'/> Agility</TableCell>
                    <TableCell>{stats.agility}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Herblore_icon.png'/> Herblore</TableCell>
                    <TableCell>{stats.herblore}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Thieving_icon.png'/> Thieving</TableCell>
                    <TableCell>{stats.thieving}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Crafting_icon.png'/> Crafting</TableCell>
                    <TableCell>{stats.crafting}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Fletching_icon.png'/> Fletching</TableCell>
                    <TableCell>{stats.fletching}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Slayer_icon.png'/> Slayer</TableCell>
                    <TableCell>{stats.slayer}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Hunter_icon.png'/> Hunter</TableCell>
                    <TableCell>{stats.hunter}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Mining_icon.png'/> Mining</TableCell>
                    <TableCell>{stats.mining}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Smithing_icon.png'/> Smithing</TableCell>
                    <TableCell>{stats.smithing}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Fishing_icon.png'/> Fishing</TableCell>
                    <TableCell>{stats.fishing}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Cooking_icon.png'/> Cooking</TableCell>
                    <TableCell>{stats.cooking}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Firemaking_icon.png'/> Firemaking</TableCell>
                    <TableCell>{stats.firemaking}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Woodcutting_icon.png'/> Woodcutting</TableCell>
                    <TableCell>{stats.woodcutting}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Farming_icon.png'/> Farming</TableCell>
                    <TableCell>{stats.farming}</TableCell>
                </TableRow>
            </TableBody>
            
        </Table>
    )
}

export default PlayerStats

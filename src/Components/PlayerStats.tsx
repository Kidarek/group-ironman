import { Table, TableBody, TableCell, TableHead, TableRow, Tooltip } from "@mui/material"
import * as React from "react"
import { useEffect } from "react"

interface PlayerProps {
    name: string
}

let loaded = false

function PlayerStats(props: PlayerProps): JSX.Element {
    const [stats, setStats] = React.useState({
        total: {level: 0, experience: 0},
        attack: {level: 0, experience: 0},
        strength: {level: 0, experience: 0},
        defence: {level: 0, experience: 0},
        ranged: {level: 0, experience: 0},
        prayer: {level: 0, experience: 0},
        magic: {level: 0, experience: 0},
        runecraft: {level: 0, experience: 0},
        construction: {level: 0, experience: 0},
        hitpoints: {level: 0, experience: 0},
        agility: {level: 0, experience: 0},
        herblore: {level: 0, experience: 0},
        thieving: {level: 0, experience: 0},
        crafting: {level: 0, experience: 0},
        fletching: {level: 0, experience: 0},
        slayer: {level: 0, experience: 0},
        hunter: {level: 0, experience: 0},
        mining: {level: 0, experience: 0},
        smithing: {level: 0, experience: 0},
        fishing: {level: 0, experience: 0},
        cooking: {level: 0, experience: 0},
        firemaking: {level: 0, experience: 0},
        woodcutting: {level: 0, experience: 0},
        farming: {level: 0, experience: 0},
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
            total: stats.overall,
            attack: stats.attack,
            strength: stats.strength,
            defence: stats.defence,
            ranged: stats.ranged,
            prayer: stats.prayer,
            magic: stats.magic,
            runecraft: stats.runecrafting,
            construction: stats.construction,
            hitpoints: stats.hitpoints,
            agility: stats.agility,
            herblore: stats.herblore,
            thieving: stats.thieving,
            crafting: stats.crafting,
            fletching: stats.fletching,
            slayer: stats.slayer,
            hunter: stats.hunter,
            mining: stats.mining,
            smithing: stats.smithing,
            fishing: stats.fishing,
            cooking: stats.cooking,
            firemaking: stats.firemaking,
            woodcutting: stats.woodcutting,
            farming: stats.farming,
        })
        loaded = true
    }
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>{props.name}</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.total.experience.toLocaleString()}><div>{stats.total.level}</div></Tooltip></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Attack_icon.png'/> Attack</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.attack.experience.toLocaleString()}><div>{stats.attack.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Strength_icon.png'/> Strength</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.strength.experience.toLocaleString()}><div>{stats.strength.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Defence_icon.png'/> Defence</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.defence.experience.toLocaleString()}><div>{stats.defence.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Ranged_icon.png'/> Ranged</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.ranged.experience.toLocaleString()}><div>{stats.ranged.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Prayer_icon.png'/> Prayer</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.prayer.experience.toLocaleString()}><div>{stats.prayer.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Magic_icon.png'/> Magic</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.magic.experience.toLocaleString()}><div>{stats.magic.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Runecraft_icon.png'/> Runecraft</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.runecraft.experience.toLocaleString()}><div>{stats.runecraft.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Construction_icon.png'/> Construction</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.construction.experience.toLocaleString()}><div>{stats.construction.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Hitpoints_icon.png'/> Hitpoints</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.hitpoints.experience.toLocaleString()}><div>{stats.hitpoints.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Agility_icon.png'/> Agility</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.agility.experience.toLocaleString()}><div>{stats.agility.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Herblore_icon.png'/> Herblore</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.herblore.experience.toLocaleString()}><div>{stats.herblore.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Thieving_icon.png'/> Thieving</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.thieving.experience.toLocaleString()}><div>{stats.thieving.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Crafting_icon.png'/> Crafting</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.crafting.experience.toLocaleString()}><div>{stats.crafting.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Fletching_icon.png'/> Fletching</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.fletching.experience.toLocaleString()}><div>{stats.fletching.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Slayer_icon.png'/> Slayer</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.slayer.experience.toLocaleString()}><div>{stats.slayer.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Hunter_icon.png'/> Hunter</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.hunter.experience.toLocaleString()}><div>{stats.hunter.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Mining_icon.png'/> Mining</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.mining.experience.toLocaleString()}><div>{stats.mining.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Smithing_icon.png'/> Smithing</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.smithing.experience.toLocaleString()}><div>{stats.smithing.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Fishing_icon.png'/> Fishing</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.fishing.experience.toLocaleString()}><div>{stats.fishing.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Cooking_icon.png'/> Cooking</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.cooking.experience.toLocaleString()}><div>{stats.cooking.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Firemaking_icon.png'/> Firemaking</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.firemaking.experience.toLocaleString()}><div>{stats.firemaking.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Woodcutting_icon.png'/> Woodcutting</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.woodcutting.experience.toLocaleString()}><div>{stats.woodcutting.level}</div></Tooltip></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><img src='https://shane-osrs-groupironman.s3.amazonaws.com/Farming_icon.png'/> Farming</TableCell>
                    <TableCell><Tooltip title= {"Experience: " + stats.farming.experience.toLocaleString()}><div>{stats.farming.level}</div></Tooltip></TableCell>
                </TableRow>
            </TableBody>
            
        </Table>
    )
}

export default PlayerStats

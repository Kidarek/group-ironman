import * as React from "react"
import { useEffect } from "react"
import PlayerStats from './PlayerStats'
interface GroupProps {
    name: string, 
    players: string[],
    group_id: string
}

let loaded = false

function IronmanGroup(props: GroupProps): JSX.Element {
    let players: JSX.Element[] = [];


    props.players.forEach(player => {
        players.push(<td><PlayerStats name={player}></PlayerStats></td>)
    });

    const [rank, setRank] = React.useState(0)

    useEffect(() => {
        getGroupData()
    })



    const getGroupData = async () => {
        if (loaded) {
            return
        }
        const response = await fetch('https://seswekj99c.execute-api.us-east-2.amazonaws.com/default/OSRS-GroupIronman?name=' + props.name)
        const htmlBody = await response.text()

        let dom = document.createElement('html')
        dom.innerHTML = htmlBody

        
        Array.from(dom.getElementsByTagName('tr')).forEach((tr)=> {
            if (tr.getAttribute('data-test') == props.group_id) {
                let strRank = tr.getElementsByTagName('td')[0].textContent || "0"
                setRank(parseInt(strRank.split(',').join('')))
                console.log(strRank)
            }
        }
        )
        loaded = true
    }


    return (
        <table>
            <thead>
                <tr>
                    <th className='groupName'>{props.name}</th>
                    <th className='groupRank'>Rank: {rank}</th>
                    <th className='groupPage'>Page: {Math.ceil(rank/20)}</th>
                </tr>
            </thead>
            <tbody>{players}</tbody>
        </table>
    )
}


export default IronmanGroup

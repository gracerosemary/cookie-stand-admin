import {hours} from '../data'

export default function CookieStandTable({stands, onDelete}) {
    return (
        <Table className="">
            <thead className="">
                <tr className="text-left bg-green-400 text-sm">
                    <TH className="px-8">Location</TH>
                    {hours.map(hour => (<TH className="px-3" key={hour}>{hour}</TH>))}
                    <th className="px-3">Totals</th>
                </tr>
            </thead>
            <tbody className="bg-green-300 text-sm">
                {stands.map((stand, i) => {
                    return (
                        <tr key={stand.id} className="text-left border border-separate border-green-500 odd:bg-green-200 even:bg-green-300">
                            <TH className="">
                                <div className="flex relative">
                                    <p className="text-left p-1 mr-24 text-sm">{stand.location}</p>
                                    <img src="/red_trash.png" onClick={() => onDelete(stand)} width="20" height="20" className="absolute right-0 self-center"/>
                                </div>
                            </TH>

                            {stand.cookiesEachHour.map((amt, i) => (
                                <TD key={i} className="">{amt}</TD>
                            ))}
                            <TD>{stand.totalDailyCookies}</TD>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot className="">
                <tr className="bg-green-400 text-sm">
                    <TH className="">Totals</TH>
                    {hours.map((_, i) => {
                        const amt = stands.reduce((acc, cur) => acc + cur.cookiesEachHour[i], 0 );
                        return <TD key={'amt' + i}>{amt}</TD>
                    })}
                    <TD>{stands.reduce((acc, cur) => acc + cur.totalDailyCookies, 0)}</TD>
                </tr>
            </tfoot>
        </Table>
    )
}

function Table({children}) {
    return (
        <table className="mb-6">
            {children}
        </table>
    );
}

function TH({children}) {
    return (
        <th className="border border-separate border-green-500 text-left px-4">{children}</th>
    )
}

function TD({children}) {
    return (
        <td className="border border-separate border-green-500 text-right px-2">{children}</td>
    )
}
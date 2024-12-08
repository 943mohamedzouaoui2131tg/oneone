



export default function Loader() {
    
    return(
        <div className="TheMainLoader">
            <table>
                {
                    [...Array(10)].map((_,inone)=>{
                        return (
                            <tr>
                                {
                                    [...Array(14)].map((_ , ind)=>{
                                        return (
                                            <td></td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}
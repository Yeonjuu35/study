import React from 'react'
import godo from './json/godonavi.json'

function Gnbgo() {
    const d1info = godo.filter((item)=> item["prnum"].split("|").length === 1)
    return (
        <div>
            <ul>
                {
                    d1info.map((v, i)=>{
                        return(
                            <li key={`gnblist${i}`}>{v.gnbnm}
                                <ul>
                                    {
                                        godo.filter((item)=> item["prnum"].split("|").length > 1 && item["prnum"].split("|")[0] === v.prnum).map((vv, ii)=>{
                                            return(
                                                <li key={`sublist${ii}`}>{vv.gnbnm}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Gnbgo

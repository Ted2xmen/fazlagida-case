import React from 'react'
import Title from './shared/Title/Title'
import { useNavigate } from 'react-router-dom'
import Badge from './shared/Badge/Badge'


import { nanoid } from '@reduxjs/toolkit'
// react_devtools_backend.js:4026 Warning: Encountered two children with the same key, ``. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.

const TopArtists = ({ artists }) => {
    const navigate = useNavigate()

    return (
        <div className="mx-auto flex flex-col">
            <Title position="center" size="large">Top Artists 2022</Title>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 content-center">
                {artists.map((item) => {
                    return (
                        <div key={nanoid()} className="flex items-center border border-teal-400 p-2 justify-around">
                            <img src={item.image[1]['#text']} alt="" />
                            <div className="flex flex-col">
                                <h3> {item.name} </h3>
                                <Badge type="listeners"> {item.listeners} </Badge>
                                <Badge type="playcount"> {item.playcount} </Badge>
                                <button
                                    onClick={() => navigate(`/details/${item.mbid}`)}
                                    className="mt-5 items-start bg-red-700 p-1 text-xs">
                                    Details
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default TopArtists
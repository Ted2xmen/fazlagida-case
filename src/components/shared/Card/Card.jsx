import React from 'react'
import { useNavigate } from 'react-router-dom'
import Badge from '../Badge/Badge'

const Card = ({ item }) => {
  const navigate = useNavigate()

  return (
    <div className="m-1">
      <div className="flex h-full w-full rounded-lg bg-slate-400 bg-opacity-20 shadow-sm backdrop-blur-lg border-2 border-red-800 overflow-hidden">
        <img
          className="h-42 w-24 object-cover"
          rc={item.image[1]['#text']}
          alt={item.name}
        />
        <div className="p-2">
          <h5 className="text-sm font-bold">{item.name}</h5>
          <div className="mt-3">
            <Badge type="listeners"> {item.listeners} </Badge>
            <Badge type="playcount"> {item.playcount} </Badge>            
            </div>
          <button
            onClick={() => navigate(`/details/${item.mbid}`)}
            className="mt-5 items-start bg-red-700 p-1 text-xs">
            Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
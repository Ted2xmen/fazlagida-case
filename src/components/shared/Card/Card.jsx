import React from 'react'
import { useNavigate } from 'react-router-dom'
import Badge from '../Badge/Badge'
import Button from '../Button/Button'

const Card = ({ item }) => {
  const navigate = useNavigate()

  return (
    <div className="m-1">
      <div className="flex h-full w-full rounded-lg bg-slate-400 bg-opacity-20 shadow-sm backdrop-blur-lg border-2 border-teal-800 overflow-hidden">
        <img
          className="h-42 w-24 object-cover"
          rc={item?.image[4]['#text']}
          alt={item.name}
        />
        <div className="mt-3">
          <Badge icon type="listeners"> {Number(item.listeners).toLocaleString('en-US')} </Badge>
          <Badge icon type="playcount"> {Number(item.playcount).toLocaleString('en-US')} </Badge>
          <div className="p-2">
            <h5 className="text-sm font-bold">{item.name}</h5>
            <Button shadow type="primary" label="Details" onClick={() => navigate(`/details/${item.mbid}`)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
import React from 'react'
import Badge from '../Badge/Badge'
import Button from '../Button/Button'
import Title from '../Title/Title'

const Card = ({ item, onClick, cardType }) => {

  const Name = <Title size="medium">{item?.name}</Title>

  const OnClickComponent = onClick && <div className='p-2'>
    {onClick && <Button type="primary" label="Details" onClick={onClick} />}
  </div>

  const Badges = <div className='flex space-x-3'>
    {item?.listeners && <Badge data-testid="listeners" icon type="listeners"> {Number(item?.listeners).toLocaleString('en-US')} </Badge>
    }
    {item?.playcount && <Badge data-testid="playcount" icon type="playcount"> {Number(item?.playcount).toLocaleString('en-US')} </Badge>
    }
  </div>

  const Cover = <img className='shadow-lg' src={item?.image[2]['#text']} alt="placeholder" />

  let cardTypes
  switch (cardType) {
    case "TopArtists":
      cardTypes = "bg-slate-700 dark:text-slate-100 text-slate-100 space-y-2 pr-2 items-center rounded-lg"
      break;
    case "InfoContainer":
      cardTypes = "bg-teal-500 dark:bg-teal-800 p-4 space-x-5"
      break;
    default:
      break;
  }

  return (
    <div className={`${cardTypes} card`}>
      {Cover}
      <div className={`${cardType === "TopArtists" ? "flex flex-col  items-center" : "justify-center"}`}>
        {Badges}
        {Name}
        {OnClickComponent}
      </div>
    </div>
  )
}

export default Card
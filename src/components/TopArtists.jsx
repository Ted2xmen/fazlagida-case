import Title from './shared/Title/Title'
import Card from './shared/Card/Card'
import { useNavigate } from 'react-router'

import { nanoid } from '@reduxjs/toolkit'
// react_devtools_backend.js:4026 Warning: Encountered two children with the same key, ``. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.

const TopArtists = ({ artists }) => {
      const navigate = useNavigate()

    return (
        <div className="mx-auto flex flex-col">
            <Title position="center" size="large">Top Artists 2022</Title>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {artists.map((item) => {
                    return (
                        <Card 
                        key={nanoid()}
                        cardType="TopArtists" 
                        onClick={() => navigate(`/details/${item.mbid}`)} 
                        item={item} />
                    );
                })}
            </div>
        </div>
    )
}

export default TopArtists
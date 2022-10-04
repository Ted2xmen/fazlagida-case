import Card from './shared/Card/Card'
import { useNavigate } from 'react-router'

import { nanoid } from '@reduxjs/toolkit'
// react_devtools_backend.js:4026 Warning: Encountered two children with the same key, ``. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.

const TopArtists = ({ artists, searchResults }) => {
    const navigate = useNavigate()
    return (
        <>
            {artists && <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                {artists?.artists.artist.map((item) => {
                    return (
                        <Card key={nanoid()}
                            cardType="TopArtists"
                            onClick={() => navigate(`/details/${item.mbid}`)}
                            item={item} />
                    );
                })}
            </div>}

            {searchResults && <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                {searchResults?.artistmatches.artist.map((item) => {
                    return (
                        <Card key={nanoid()}
                            cardType="TopArtists"
                            onClick={() => navigate(`/details/${item.mbid}`)}
                            item={item} />
                    );
                })}
            </div>}

        </>
    )
}

export default TopArtists
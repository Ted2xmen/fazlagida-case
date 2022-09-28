import { fetchTopTracks } from '../api/config'
import { useQuery } from '@tanstack/react-query'

const useTrackQuery = (id) => {
    const { isLoading, data, error, isError } = useQuery(['top-tracks', id],
        () => fetchTopTracks(id), {
        cacheTime: 10000,
    })
    
    return {
        error,
        isLoading,
        data,
        isError
    }
}

export default useTrackQuery
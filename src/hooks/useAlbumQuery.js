import { fetchTopAlbums } from '../api/config'
import { useQuery } from '@tanstack/react-query'

const useTrackQuery = (id) => {
    const { isLoading, data, error, isError } = useQuery(['top-albums', id],
        () => fetchTopAlbums(id), {
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
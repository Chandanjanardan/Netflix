const API_KEY="637847fe83933d96516345383f4c6389";


const requests={
    fetchTrending:'/trending/all/day?api_key=637847fe83933d96516345383f4c6389&language=en-US',
    fetchNetflixOrginals:"/discover/tv?api_key=637847fe83933d96516345383f4c6389",
    fetchTopRated:"/movie/top_rated?api_key=637847fe83933d96516345383f4c6389",
    fetchActionMovies:"/discover/movie?api_key=637847fe83933d96516345383f4c6389&with_genres=28",
    fetchComedyMovies:"/discover/movie?api_key=637847fe83933d96516345383f4c6389&with_genres=35",
    fetchHorrorMovies:"/discover/movie?api_key=637847fe83933d96516345383f4c6389&with_genres=27",
    fetchRomanceMovies:"/discover/movie?api_key=637847fe83933d96516345383f4c6389&with_genres=10749",
    fetchDocumentaries:"/discover/movie?api_key=637847fe83933d96516345383f4c6389&with_genres=99"
}

export default requests;
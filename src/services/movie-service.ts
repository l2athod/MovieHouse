import create from "./global-http-service"

export interface Movie {
    id: string;
    movie_id: string;
    original_title: string;
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
}

export interface PaginatedResponse<Movie> {
    data: Movie[];
    path: string
    per_page: number
    next_cursor: string
    next_page_url: string
    prev_cursor?: string|null
    prev_page_url?: string|null
}

export default create('/movies/infinite-scroll')

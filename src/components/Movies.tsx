import { useState } from 'react'
import useMovies from '../hooks/useMovies'
import LoadingIcon from './LoadingIcon'
import MovieDetail from './MovieDetail'
import { Movie } from '../services/movie-service'

const Movies = () => {
    const { movies, error, loading, nextMovies, loadingMovies } = useMovies()
    const [showMovie, setShowMovie] = useState<boolean>(false)
    const [movie, setMovie] = useState<Movie>({
        id: '',
        movie_id: '',
        original_title: '',
        original_language: '',
        overview: '',
        popularity: 0,
        poster_path: '',
        backdrop_path: '',
        release_date: ''
    })

    // Open the movie details in a pop up dialog.
    const previewMovie = (movie: Movie) => {
        setMovie(movie)
        setShowMovie(true)
    }

    return (
        <>
            {showMovie && (
                <>
                    <div
                        className="fixed left-0 top-0 z-10 flex h-full w-full bg-black/70"
                        onClick={() => setShowMovie(false)}
                    ></div>
                    <div className="fixed left-1/2 top-1/2 z-20 flex h-[95%] w-8/12 max-w-screen-lg -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden overflow-y-scroll rounded-xl bg-white lg:h-[95%] lg:w-1/3 2xl:h-auto 2xl:w-1/2">
                        <span
                            className="fixed right-4 top-4 cursor-pointer rounded-full bg-white p-2 transition-all duration-300 ease-in-out hover:scale-110 active:scale-90"
                            onClick={() => setShowMovie(false)}
                            title="Close"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <img
                            src={movie.backdrop_path}
                            alt={movie.original_title}
                            className="h-auto w-full select-none object-cover shadow-lg shadow-blue-900/20"
                        />

                        <div className="flex flex-col overflow-y-scroll p-8">
                            <header className="mb-4">
                                <h3 className="text-2xl font-medium">
                                    {movie.original_title}
                                </h3>
                                <h4 className="text-gray-500">
                                    Release date: {movie.release_date}
                                </h4>
                            </header>
                            <span className="font-medium">Overview</span>
                            <p className="">{movie.overview}</p>
                            <div className="my-4 flex justify-between gap-2">
                                <span className="rounded-md bg-black px-4 py-2 text-white">
                                    Popularity: {movie.popularity}
                                </span>
                                <span className="rounded-md bg-black px-4 py-2 text-white">
                                    Language: {movie.original_language}
                                </span>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {/* Error message */}
            {error && (
                <p className="mx-auto mt-12 max-w-screen-md rounded-lg bg-red-100 py-2 text-center text-xl">
                    Our app encountered an unexpected error:{' '}
                    <span className="font-medium text-red-400">{error}</span>
                </p>
            )}

            {/* Movie collection loading indicator */}
            <div className="flex items-center justify-center gap-2 py-12">
                {loading && (
                    <>
                        <LoadingIcon />
                        <span className="text-xl">
                            Loading movies. Please wait....
                        </span>
                    </>
                )}
            </div>

            {/* List of movies */}
            <section className="grid grid-cols-1 gap-10 px-12 pb-12 xl:grid-cols-2 2xl:grid-cols-3">
                {movies.data.map(movie => (
                    <div
                        className="cursor-pointer rounded-xl border border-gray-200 bg-gray-100 p-2 shadow-xl shadow-blue-900/10 transition-all duration-300 ease-in-out hover:scale-105 active:scale-90"
                        key={movie.id}
                        onClick={() => previewMovie(movie)}
                    >
                        <div className="grid grid-cols-2 gap-4 rounded-xl bg-gradient-to-t from-white to-transparent p-2">
                            <div className="flex w-full">
                                <img
                                    src={movie.poster_path}
                                    className="rounded-xl object-cover object-left-top"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <MovieDetail
                                    type="Title"
                                    data={movie.original_title}
                                />
                                <MovieDetail
                                    type="Overview"
                                    data={
                                        movie.overview.length > 100
                                            ? `${movie.overview.substring(0, 100)}...`
                                            : movie.overview
                                    }
                                />
                                <MovieDetail
                                    type="Release Date"
                                    data={movie.release_date}
                                />
                                <MovieDetail
                                    type="Popularity"
                                    data={String(movie.popularity)}
                                />
                                <MovieDetail
                                    type="Language"
                                    data={movie.original_language}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Load more movies button */}
            {!loading && !error && (
                <div className="flex justify-center gap-2 py-6">
                    <button
                        className="rounded-full border-2 border-gray-200 bg-white px-8 py-3 font-medium transition-all duration-300 ease-in-out hover:bg-gray-100 active:scale-90"
                        onClick={() => nextMovies(movies.next_cursor)}
                    >
                        {loadingMovies ? (
                            <LoadingIcon />
                        ) : (
                            <span>Load More</span>
                        )}
                    </button>
                </div>
            )}
        </>
    )
}

export default Movies

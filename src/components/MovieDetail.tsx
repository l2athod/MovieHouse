interface Props {
    type: string
    data: string
}

const MovieDetail = ({ type, data }: Props) => {
    return (
        <div className="flex flex-col">
            <span className="font-bold uppercase text-gray-400">{type}</span>
            <span className="">{data}</span>
        </div>
    )
}

export default MovieDetail

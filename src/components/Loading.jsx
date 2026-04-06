const Loading = () => {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-200 border-t-orange-500"></div>
        </div>
    )
}

export default Loading;
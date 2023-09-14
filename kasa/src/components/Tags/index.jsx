function DisplayTags( {tags}) {

    return (
        <div className="tags-list">
        {tags.map((tag) =>
                <p 
                    key={tag.toString()}
                    className="tags-card"
                > 
                    {tag} 
                </p>
            )}
        </div>
    )
}

export default DisplayTags
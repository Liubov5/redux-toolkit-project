import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const PostAuthor = ({userId}) => {
    const author = useSelector(state =>
        state.users.find(user => user.id === userId)
    )
   
    return <Link to={`/users/${userId}`}><p>by {author ? author.name : 'Unknown author'} </p></Link>
}
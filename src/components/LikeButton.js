import React from 'react'

class LikeButton extends React.Component {

    state = {likes: 0} 

    handleLike = () => {
        this.setState(state => ({
            likes: state.likes + 1,
        }))
    }

    render () {
        return(
            <div> 
                <button onClick={this.handleLike}>Like this Lawyer:{this.state.likes}</button>
            </div>
        )
    }
}
export default LikeButton
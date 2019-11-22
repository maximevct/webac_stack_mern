import React from 'react'

class User extends React.Component {
    render() {
        return (
        <div>
            Name : {this.props.name}
        </div>
        )
    }
}

User.defaultProps = {
    name : 'John'
}

export default User
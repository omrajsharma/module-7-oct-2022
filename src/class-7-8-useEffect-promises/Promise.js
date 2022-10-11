import React from 'react'

function Promise() {

    const [userMessages, setUserMessages] = React.useState('')
    const userMessage = [];

    fetch('https://learning-at-acciojob-default-rtdb.asia-southeast1.firebasedatabase.app/message.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (const key in data){
            userMessage.push(data[key])
        }
        setUserMessages(userMessage)
    })

  return (
    <div>Promise
        {
            userMessages.map(message => {
                return (
                    <div>
                        {message.userName} : {message.userMessage}
                    </div>
                ) 
            })
        }
    </div>
  )
}

export default Promise
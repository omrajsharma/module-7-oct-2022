import React from 'react'

function Promise() {

    const [userMessages, setUserMessages] = React.useState()
    const userMessage = [];

    React.useEffect(()=> {
        fetch('https://learning-at-acciojob-default-rtdb.asia-southeast1.firebasedatabase.app/message.json')
        .then(response => response.json())
        .then(data => {
            for(const d in data){
                userMessage.push(data[d])
            }
            setUserMessages(userMessage)
        }
        )
    }, [])

  return (
    <div>Promise

        {
            userMessages && userMessages.map(msg => {
                return <div
                    style={{
                        color: 'white',
                        backgroundColor: 'orchid',
                        padding: 20,
                        margin: 10,
                        borderRadius: 10,
                        textAlign: 'center'
                    }}
                >
                    {msg.userName}: {msg.userMessage}
                </div>
            })
        }
    </div>
  )
}

export default Promise
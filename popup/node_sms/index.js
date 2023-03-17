const accountSid = 'ACde9bd7c7189887eaced1bd645f08be50';
const authToken = '80134b960f5047931dc1df001c46b66c';
const client = require('twilio')(accountSid, authToken);
const phoneButton = document.querySelector(`#phone`);

function PopUp() {
    const [popup, setPop] = useState(false)
    const handleClickOpen = () => {
        setPop(!popup)
    }
    const closePopup = () => {
        setPop(false)
    }
    function sendMessage() {
        client.messages
            .create({
                body: 'Hey Maggie! I loved your portfolio and would love to see if you would be a good fit for our company.',
                messagingServiceSid: 'MGe352516c1be563172fccf351d4801397',
                to: '+16789530470'
            })
            .then(message => console.log(message.sid))
            .done();
    };

    return (
        <div>
            <button id="#phone" onClick={handleClickOpen}></button>
            <div>
                {
                    popup ?
                        <div className="main">
                            <div className="popup">
                                <div className="popup-header">
                                    <h1>Text Maggie</h1>
                                    <h1 onClick={closePopup}>X</h1>
                                </div>
                                <div>
                                    <button id="sendMessage" onClick={sendMessage}></button>
                                </div>
                            </div>
                        </div> : ""
                }
            </div>
        </div>
    )
}


export default PopUp;


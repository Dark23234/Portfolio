const submitButton = document.getElementById('submitButton');


let OrderNumber = 0;

submitButton.addEventListener('click', function() {
  let Name = document.getElementById('nameInput').value;
  let DiscordUser = document.getElementById('discorduserInput').value;
  let Order = document.getElementById('orderInput').value;
  let OrderTopic = document.getElementById('OrderTopicInput').value;
  OrderNumber++; 

  let url = 'https://discord.com/api/webhooks/1272055078127140924/gP-afLi73zQEObSLe8tfw7pz-YTtSekjgV6Dwy8jembRGXZ9niTflG4nqj99SjNrn54u';
  const Fields = [ 
  {
    name: "Order Topic",
    value: OrderTopic,
    inline: true,
  },
  {
    name: "Discord User",
    value: DiscordUser,
    inline: true,
  },
  {
    name: "Order Details",
    value: Order,
    inline: false,
  }
  ]; 
  const embed = {
        title: `Order #${OrderNumber}`,
        color: 0xffffff,
        fields: Fields,
  }
  const message = {
    embeds: [embed],
  }

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message)
  })
  .then(response => response.text())
  .then(text => {
    console.log('Response Text:', text); 
    try {
      const data = JSON.parse(text);
      console.log('Success:', data);
    } catch (e) {
      console.error('Failed to parse JSON:', e);
    }
  })
  .catch(error => {
    console.error('Error:', error); 
  });
});

const ContactMeHomeScreenButton = document.getElementById('ContactMeHomeScreenButton').addEventListener('click', function() {
document.querySelector('.Fourth-Page').scrollIntoView({
  behavior: 'smooth'
})
});

const price = document.getElementById('price');

fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
    .then(res => res.json())
    .then(data => {
        price.innerHTML = `
            <div><span>price</span><span style="font-size: 20px; margin-left:4px;">${separators(data.market_data.current_price.usd)} $</span></div>
            <div>${today()}</div>
        `;
    })
    .catch(err => console.log(err));

    function separators(num) {
        const num_parts = num.toString().split('.');
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return num_parts.join('.');
    }

    function today() {
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const now = new Date();

        return `${days[now.getUTCDay()]}, ${months[now.getUTCMonth()]} ${now.getUTCDate()}, ${now.getUTCFullYear()}`;
    }
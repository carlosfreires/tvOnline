const m3uUrl = 'https://iptv-org.github.io/iptv/index.m3u';

async function validarLink(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch {
        return false;
    }
}

async function carregarCanais() {
    try {
        const response = await fetch(m3uUrl);
        const data = await response.text();

        const canais = data.split('\n')
            .filter((linha, i, arr) => linha.startsWith('#EXTINF') && validarLink(arr[i + 1]))
            .map((info, i, arr) => {
                const url = arr[i + 1];
                const nome = (info.match(/,(.+)$/) || [])[1] || 'Sem Nome';
                const logo = (info.match(/tvg-logo="([^"]*)"/) || [])[1] || '';
                return { nome, logo, url };
            });

        renderizarCanais(canais);
    } catch (error) {
        console.error('Erro ao carregar os canais:', error);
    }
}

function renderizarCanais(canais) {
    const listaCanais = document.getElementById('listaCanais');
    listaCanais.innerHTML = '';

    canais.forEach(({ nome, logo, url }) => {
        const div = document.createElement('div');
        div.className = 'canal';
        div.onclick = () => reproduzirCanal(url);

        const img = document.createElement('img');
        img.src = logo || 'https://via.placeholder.com/50';
        img.alt = nome;
        img.onerror = () => { img.src = 'https://via.placeholder.com/50'; };

        const span = document.createElement('span');
        span.textContent = nome;

        div.appendChild(img);
        div.appendChild(span);
        listaCanais.appendChild(div);
    });
}

function reproduzirCanal(url) {
    const player = document.getElementById('player');
    player.src = url;
    player.play().catch(error => {
        console.error('Erro ao reproduzir o canal:', error);
        alert('Não foi possível reproduzir este canal.');
    });
}

// Carregar canais ao inicializar
carregarCanais();
const prices = {
    cs: 35,
    ci: 65,
    ep: 35
};

const state = {
    cs: { personal: false, addons: [] },
    ci: { personal: false, addons: [] },
    ep: { personal: false, addons: [] }
};

function updateAddonState(service) {
    const personalChecked = state[service].personal;
    const monetized = document.getElementById(`${service}_monetized`);
    const commercial = document.getElementById(`${service}_commercial`);
    const monetizedWrapper = monetized.parentElement;
    const commercialWrapper = commercial.parentElement;

    if (personalChecked) {
        monetized.disabled = false;
        commercial.disabled = false;
        monetizedWrapper.classList.remove('disabled');
        commercialWrapper.classList.remove('disabled');
        document.getElementById(`section${service === 'cs' ? '1' : service === 'ci' ? '2' : '3'}`).classList.add('active');
    } else {
        monetized.disabled = true;
        commercial.disabled = true;
        monetized.checked = false;
        commercial.checked = false;
        monetizedWrapper.classList.add('disabled');
        commercialWrapper.classList.add('disabled');
        state[service].addons = [];
        document.getElementById(`section${service === 'cs' ? '1' : service === 'ci' ? '2' : '3'}`).classList.remove('active');
    }
}

function calculateTotal() {
    let total = 0;
    const breakdownItems = [];

    for (const [service, data] of Object.entries(state)) {
        if (data.personal) {
            const basePrice = prices[service];
            let currentPrice = basePrice;
            let steps = [`$${basePrice.toFixed(2)}`];

            data.addons.forEach(percent => {
                const previousPrice = currentPrice;
                currentPrice = currentPrice + (currentPrice * percent / 100);
                steps.push(`+${percent}% ($${previousPrice.toFixed(2)}) = $${currentPrice.toFixed(2)}`);
            });

            const serviceName = service === 'cs' ? 'Colored Sketch' : 
                              service === 'ci' ? 'Character Illustrations' : 
                              'Environment painting';
            
            if (data.addons.length > 0) {
                breakdownItems.push(`<strong>${serviceName}:</strong><br>${steps.join(' ')}`);
            } else {
                breakdownItems.push(`<strong>${serviceName}:</strong> $${currentPrice.toFixed(2)}`);
            }

            total += currentPrice;
        }
    }

    document.getElementById('totalPrice').textContent = `$${total.toFixed(2)}`;
    
    const breakdownDiv = document.getElementById('breakdown');
    if (breakdownItems.length > 0) {
        breakdownDiv.style.display = 'block';
        breakdownDiv.innerHTML = breakdownItems.map(item => 
            `<div class="breakdown-item">${item}</div>`
        ).join('');
    } else {
        breakdownDiv.style.display = 'none';
    }
}

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const service = this.dataset.service;
        const type = this.dataset.type;

        if (type === 'personal') {
            state[service].personal = this.checked;
            updateAddonState(service);
        } else if (type === 'addon') {
            const percent = parseInt(this.dataset.percent);
            if (this.checked) {
                state[service].addons.push(percent);
            } else {
                const index = state[service].addons.indexOf(percent);
                if (index > -1) {
                    state[service].addons.splice(index, 1);
                }
            }
        }

        calculateTotal();
    });
});

// Initialize
calculateTotal();
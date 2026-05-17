function createServiceForm(serviceCode, serviceName) {
    const isColoredSketch = serviceCode === 'cs';
    const isGroup = serviceCode === 'gi';

    return ` 
    <div class="service-form-selection" id="form-${serviceCode}">
        <div class="service-form-title">${serviceName}</div>

        ${!isGroup ? `
        <!-- Q1: Illustration Type -->
        <div class="question">
            <div class="question-title">1. What type of Illustration are you looking for?</div>
            <div class="options">
                <label class="option">
                    <input type="radio" name="${serviceCode}_illus_type" value="0">
                    <span>Head-shot</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_illus_type" value="${isColoredSketch ? '5' : '10'}">
                    <span>Bust-up (+$${isColoredSketch ? '5' : '10'})</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_illus_type" value="${isColoredSketch ? '15' : '20'}">
                    <span>Waist-up (+$${isColoredSketch ? '15' : '20'})</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_illus_type" value="${isColoredSketch ? '20' : '28'}">
                    <span>Hip-up (+$${isColoredSketch ? '20' : '28'})</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_illus_type" value="${isColoredSketch ? '25' : '35'}">
                    <span>Knee-up (+$${isColoredSketch ? '25' : '35'})</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_illus_type" value="${isColoredSketch ? '35' : '47'}">
                    <span>Full body (+$${isColoredSketch ? '35' : '47'})</span>
                </label>
            </div>
        </div>
        ` : `
        <!-- Q1: Number of Characters -->
        <div class="question">
            <div class="question-title">1. How many characters?</div>

            <div class="char-counter">
                <button type="button" class="counter-btn minus" data-service="${serviceCode}">−</button>

                <input type="number"
                    class="counter-input"
                    id="${serviceCode}_char_count"
                    value="2"
                    min="2"
                    max="10"
                    readonly>

                <button type="button" class="counter-btn plus" data-service="${serviceCode}">+</button>
            </div>

            <div class="char-pricing-info">
                <div class="pricing-line">2 characters — Included</div>
                <div class="pricing-line">3-4 characters — +$70 each</div>
                <div class="pricing-line">5-10 characters — +$50 each</div>
            </div>
        </div>
        `}

        <!-- Q2: Complexity -->
        <div class="question">
            <div class="question-title">2. How complex is the character design?</div>
            <img src="https://raw.githubusercontent.com/Rockk-m/commission-calculator/main/images/complexity.jpg" alt="Complexity Guide" class="reference-image">
            <div class="options">
                <label class="option">
                    <input type="radio" name="${serviceCode}_complexity" value="0">
                    <span>Simple</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_complexity" value="15">
                    <span>Medium complex (+15%)</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_complexity" value="30">
                    <span>complex (+30%)</span>
                </label>
            </div>
        </div>

        <!-- Q3 Add-ons -->
        <div class="question">
            <div class="question-title">3. Add-ons (You can select multiple)</div>
            <div class="options">
                <label class="option">
                    <input type="checkbox" name="${serviceCode}_addons" value="${isColoredSketch ? '10' : '15'}" data-name="Pet">
                    <span>Pet (+$${isColoredSketch ? '10' : '15'})</span>
                </label>
                <label class="option">
                    <input type="checkbox" name="${serviceCode}_addons" value="${isColoredSketch ? '10' : '15'}" data-name="Weapons">
                    <span>Weapons or tools (+$${isColoredSketch ? '10' : '15'})</span>
                </label>
                <label class="option">
                    <input type="checkbox" name="${serviceCode}_addons" value="${isColoredSketch ? '15' : '20'}" data-name="Instruments">
                    <span>Instruments (+$${isColoredSketch ? '15' : '20'})</span>
                </label>
            </div>
        </div>

        ${!isGroup ? `
        <!-- Q4: Background -->
        <div class="question">
            <div class="question-title">4. What type of Background?</div>
            <img src="https://raw.githubusercontent.com/Rockk-m/commission-calculator/main/images/backgrounds.jpg" alt="Background Guide" class="reference-image">
            <div class="options">
                <label class="option">
                    <input type="radio" name="${serviceCode}_background" value="0" data-name="Transparent PNG">
                    <span>Transparent PNG</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_background" value="0" data-name="White BG">
                    <span>None (White BG)</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_background" value="0" data-name="Flat color">
                    <span>Flat color</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_background" value="40" data-name="Simple backdrop">
                    <span>Simple flat backdrop (+$40)</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_background" value="75" data-name="Full environment">
                    <span>Full environment background (+$75)</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_background" value="100" data-name="Complex background">
                    <span>Grand complex background (+$100)</span>
                </label>
            </div>
        </div>
        ` : ''}

        <!-- Usage -->
        <div class="question">
            <div class="question-title">${isGroup ? '4' : '5'}. How will you be using this commission?</div>
            <div class="options">
                <label class="option">
                    <input type="radio" name="${serviceCode}_usage" value="0">
                    <span>Personal</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_usage" value="60">
                    <span>Monetized content (+60%)</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_usage" value="100">
                    <span>Commercial merchandising (+100%)</span>
                </label>
            </div>
        </div>

        <!-- Privacy -->
         <div class="question">
            <div class="question-title">${isGroup ? '5' : '6'}. May I publicly stream / share the work with credit?</div>
            <div class="options">
                <label class="option">
                    <input type="radio" name="${serviceCode}_privacy" value="0">
                    <span>Yes</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_privacy" value="0">
                    <span>Not while WIP but final work is ok</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_privacy" value="0">
                    <span>No WIP or posts until specific date (discuss)</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_privacy" value="80">
                    <span>NDA required (privacy fee) (+$80)</span>
                </label>
            </div>
        </div>
    </div>
    `;
}

const servicePrices = { 
    cs: 35, 
    ci: 65,
    gi: 280
};

const serviceNames = { 
    cs: 'Colored Sketch', 
    ci: 'Character Illustrations',
    gi: 'Group Illustrations'
}

let activeServices = new Set();

document.querySelectorAll('input[name="service"]').forEach(radio => {
    radio.addEventListener('change', function () {
        const serviceCode = this.value;
        const serviceOption = this.closest('.service-option');

        document.querySelectorAll('.service-option').forEach(opt => {
            opt.classList.remove('selected');
        });

        const formContainer = document.getElementById('serviceForms');
        formContainer.innerHTML = '';
        activeServices.clear();

        if (this.checked) {
            activeServices.add(serviceCode);
            serviceOption.classList.add('selected');

            const formHTML = createServiceForm(serviceCode, serviceNames[serviceCode]);
            formContainer.insertAdjacentHTML('beforeend', formHTML);

            formContainer.classList.add('visible');
            document.getElementById('priceDisplay').style.display = 'block';

            attachEventListeners(serviceCode);
            calculateTotal();
        }
    });
});

function attachEventListeners(serviceCode) {
    const formElement = document.getElementById(`form-${serviceCode}`);

    const minusBtn = formElement.querySelector('.counter-btn.minus');
    const plusBtn = formElement.querySelector('.counter-btn.plus');
    const counterInput = formElement.querySelector('.counter-input');

    if (minusBtn && plusBtn && counterInput) {

        minusBtn.addEventListener('click', function () {
            let value = parseInt(counterInput.value);

            const minValue = serviceCode === 'gi' ? 2 : 1;

            if (value > minValue) {
                counterInput.value = value - 1;
                calculateTotal();
            }
        });

        plusBtn.addEventListener('click', function () {
            let value = parseInt(counterInput.value);

            if (value < 10) {
                counterInput.value = value + 1;
                calculateTotal();
            }
        });
    }

    formElement.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function () {
            const name = this.name;

            formElement.querySelectorAll(`input[name="${name}"]`).forEach(r => {
                r.closest('.option').classList.remove('selected');
            });

            if (this.checked) {
                this.closest('.option').classList.add('selected');
            }

            calculateTotal();
        });
    });

    formElement.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                this.closest('.option').classList.add('selected');
            } else {
                this.closest('.option').classList.remove('selected');
            }

            calculateTotal();
        });
    });
}

function calculateServicePrice(serviceCode) {
    const basePrice = servicePrices[serviceCode];
    let total = basePrice;
    let breakdown = [`Base price: $${basePrice.toFixed(2)}`];

    // Illustration Type
    if (serviceCode !== 'gi') {

        const illusType = document.querySelector(`input[name="${serviceCode}_illus_type"]:checked`);

        if (illusType && parseFloat(illusType.value) > 0) {
            const amount = parseFloat(illusType.value);

            total += amount;

            breakdown.push(`+ ${illusType.parentElement.textContent.trim()}: $${amount.toFixed(2)}`);
        }
    }

        // Group Character Count
    if (serviceCode === 'gi') {

        const input = document.getElementById(`${serviceCode}_char_count`);

        let charCount = parseInt(input.value);

        if (charCount < 2) {
            charCount = 2;
        }

        // 3-4 chars
        if (charCount >= 3) {

            const chars34 = Math.min(charCount, 4) - 2;

            if (chars34 > 0) {

                const amount = chars34 * 70;

                total += amount;

                breakdown.push(`+ Extra characters (3-4): $${amount.toFixed(2)}`);
            }
        }

        // 5-10 chars
        if (charCount >= 5) {

            const chars510 = charCount - 4;

            const amount = chars510 * 50;

            total += amount;

            breakdown.push(`+ Extra characters (5-10): $${amount.toFixed(2)}`);
        }
    }

    // Complexity
    const complexity = document.querySelector(`input[name="${serviceCode}_complexity"]:checked`);

    if (complexity && parseFloat(complexity.value) > 0) {
        const percent = parseFloat(complexity.value);

        const amount = total * (percent / 100);

        total += amount;

        breakdown.push(`+ Complexity (+${percent}%): $${amount.toFixed(2)}`);
    }

    // Add-ons
    document.querySelectorAll(`input[name="${serviceCode}_addons"]:checked`).forEach(addon => {
        const amount = parseFloat(addon.value);

        total += amount;

        breakdown.push(`+ ${addon.dataset.name}: $${amount.toFixed(2)}`);
    });

    // Background
    if (serviceCode !== 'gi') {

        const background = document.querySelector(`input[name="${serviceCode}_background"]:checked`);

        if (background && parseFloat(background.value) > 0) {
            const amount = parseFloat(background.value);

            total += amount;

            breakdown.push(`+ ${background.dataset.name}: $${amount.toFixed(2)}`);
        }
    }

    // Usage
    const usage = document.querySelector(`input[name="${serviceCode}_usage"]:checked`);

    if (usage && parseFloat(usage.value) > 0) {
        const percent = parseFloat(usage.value);

        const amount = total * (percent / 100);

        total += amount;

        breakdown.push(`+ ${usage.parentElement.textContent.trim()}: $${amount.toFixed(2)}`);
    }

    // Privacy
    const privacy = document.querySelector(`input[name="${serviceCode}_privacy"]:checked`);

    if (privacy && parseFloat(privacy.value) > 0) {
        const amount = parseFloat(privacy.value);

        total += amount;

        breakdown.push(`+ NDA privacy fee: $${amount.toFixed(2)}`);
    }

    return { total, breakdown };
}

function calculateTotal() {
    if (activeServices.size === 0) return;

    let grandTotal = 0;
    let allBreakdowns = [];

    activeServices.forEach(serviceCode => {
        const result = calculateServicePrice(serviceCode);
        grandTotal += result.total;

        allBreakdowns.push(`
            <div class="breakdown-service">
                <div class="breakdown-service-title">${serviceNames[serviceCode]}: $${result.total.toFixed(2)}</div>
                ${result.breakdown.map(item => `<div class="breakdown-item">${item}</div>`).join('')}
            </div>
        `);
    });

    document.getElementById('totalPrice').textContent = `$${grandTotal.toFixed(2)}`;
    document.getElementById('breakdown').innerHTML = allBreakdowns.join('');
}
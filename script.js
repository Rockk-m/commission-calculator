function createServiceForm(serviceCode, serviceName) {
    return ` 
    <div class="service-form-selection" id="form-${serviceCode}">
        <div class="service-form-title">${serviceName}</div>

        <!-- Q1: Illustration Type -->
        <div class="question">
            <div class="question-title">1. What type of Illustration are you looking for?</div>
            <div class="options">
                <label class="option">
                    <input type="radio" name="${serviceCode}_illus_type" value="0">
                    <span>Head-shot</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_illus_type" value="10">
                    <span>Bust-up (+$10)</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_illus_type" value="20">
                    <span>Waist-up (+$20)</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_illus_type" value="28">
                    <span>Hip-up (+$28)</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_illus_type" value="35">
                    <span>Knee-up (+$35)</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_illus_type" value="47">
                    <span>Full body (+$47)</span>
                </label>
            </div>
        </div>

        <!-- Q2: Complexity -->
        <div class="question">
            <div class="question-title">2. How complex is the character design?</div>
            <img src="https://lh3.googleusercontent.com/pw/AP1GczNvhBpYTjeNISlXQU9mKx2cjigIyj0G1fqHzAULGPewYEcDwdMfNkwMW214dbsrRhhF4QPKr8HLNrnyL2FjoEOS8Elo6E6CEotAd_nYpNlOeQKWmEfbuEgRGbFv-vfSxITkwZe-3L3oPfM8-aAmZ6cOdg=w1545-h869-s-no-gm?authuser=0" alt="Complexity Guide" class="reference-image">
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

        <!-- Q3: Number of Characters -->
        <div class="question">
            <div class="question-title">3. How many characters?</div>
            <div class="options">
                <label class="option">
                    <input type="radio" name="${serviceCode}_char_count" value="0">
                    <span>1</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_char_count" value="80">
                    <span>2</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_char_count" value="150">
                    <span>3</span>
                </label>
            </div>
        </div>

        <!-- Q4 Add-ons -->
        <div class="question">
            <div class="question-title">4. Add-ons (You can select multiple)</div>
            <div class="options">
                <label class="option">
                    <input type="checkbox" name="${serviceCode}_addons" value="15" data-name="Pet">
                    <span>Pet (+$15)</span>
                </label>
                <label class="option">
                    <input type="checkbox" name="${serviceCode}_addons" value="15" data-name="Weapons">
                    <span>Weapons or tools (+$15)</span>
                </label>
                <label class="option">
                    <input type="checkbox" name="${serviceCode}_addons" value="20" data-name="Instruments">
                    <span>Instruments (+$20)</span>
                </label>
            </div>
        </div>

        <!-- Q5: Background -->
        <div class="question">
            <div class="question-title">5. What type of Background?</div>
            <img src="https://lh3.googleusercontent.com/pw/AP1GczOoOyDOFoPrgR6ozSM6WV_eDUyYBCG_6m57cLulU3lwmB3xnfR6lFKNULGmF0OhI5NFbX4Z2O5nja1FWhnqA5_25CYB0v5scis0NCbVuuzlrMZ_ib4elZKtMQeX9clugPxEvqno2XrU7saswawDk24_8A=w1545-h869-s-no-gm?authuser=0" alt="Background Guide" class="reference-image">
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
                    <input type="radio" name="${serviceCode}_background" value="20" data-name="Simple backdrop">
                    <span>Simple flat backdrop (+$20)</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_background" value="45" data-name="Full environment">
                    <span>Full environment background (+$45)</span>
                </label>
                <label class="option">
                    <input type="radio" name="${serviceCode}_background" value="65" data-name="Complex background">
                    <span>Grand complex background (+$65)</span>
                </label>
            </div>
        </div>

        <!-- Q6: Usage -->
        <div class="question">
            <div class="question-title">6. How will you be using this commission?</div>
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

        <!-- Q7: Privacy -->
         <div class="question">
            <div class="question-title">7. May I publicly stream / share the work with credit?</div>
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

const servicePrices = { cs: 35, ci: 65};
const serviceNames = { cs: 'Colored Sketch', ci: 'Character Illustrations'}
let activeServices = new Set(); 

document.querySelectorAll('input[name="service"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const serviceCode = this.value;
        const serviceOption = this.closest('.service-option');

        if (this.checked) {
            activeServices.add(serviceCode);
            serviceOption.classList.add('selected');

            const formHTML = createServiceForm(serviceCode, serviceNames[serviceCode]);
            const formContainer = document.getElementById('serviceForms');
            formContainer.insertAdjacentHTML('beforeend', formHTML);

            formContainer.classList.add('visible');
            document.getElementById('priceDisplay').style.display = 'block';

            attachEventListeners(serviceCode);
            calculateTotal();
        }   else {
            activeServices.delete(serviceCode);
            serviceOption.classList.remove('selected');

            const formElement = document.getElementById(`form-${serviceCode}`);
            if (formElement) {
                formElement.remove()
            }

            if (activeServices.size === 0) {
                        document.getElementById('serviceForms').classList.remove('visible');
                        document.getElementById('priceDisplay').style.display = 'none';
            } else {
                        calculateTotal(); 
            }
        }
    });
});

        function attachEventListeners(serviceCode) {
            const formElement = document.getElementById(`form-${serviceCode}`);
            
            formElement.querySelectorAll('.option').forEach(option => {
                option.addEventListener('click', function(e) {
                    if (e.target.tagName !== 'INPUT') {
                        const input = this.querySelector('input');
                        if (input.type === 'radio') {
                            input.checked = true;
                            input.dispatchEvent(new Event('change'));
                        } else {
                            input.checked = !input.checked;
                            input.dispatchEvent(new Event('change'));
                        }
                    }
                });
            });

            formElement.querySelectorAll('input[type="radio"]').forEach(radio => {
                radio.addEventListener('change', function() {
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
                checkbox.addEventListener('change', function() {
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

            // Q1: Illustration Type
            const illusType = document.querySelector(`input[name="${serviceCode}_illus_type"]:checked`);
            if (illusType && parseFloat(illusType.value) > 0) {
                const amount = parseFloat(illusType.value);
                total += amount;
                breakdown.push(`+ ${illusType.parentElement.textContent.trim()}: $${amount.toFixed(2)}`);
            }

            // Q2: Complexity
            const complexity = document.querySelector(`input[name="${serviceCode}_complexity"]:checked`);
            if (complexity && parseFloat(complexity.value) > 0) {
                const percent = parseFloat(complexity.value);
                const amount = total * (percent / 100);
                total += amount;
                breakdown.push(`+ Complexity (+${percent}%): $${amount.toFixed(2)}`);
            }

            // Q3: Character Count
            const charCount = document.querySelector(`input[name="${serviceCode}_char_count"]:checked`);
            if (charCount && parseFloat(charCount.value) > 0) {
                const percent = parseFloat(charCount.value);
                const amount = total * (percent / 100);
                total += amount;
                breakdown.push(`+ Multiple characters (+${percent}%): $${amount.toFixed(2)}`);
            }

            // Q4: Add-ons
            document.querySelectorAll(`input[name="${serviceCode}_addons"]:checked`).forEach(addon => {
                const amount = parseFloat(addon.value);
                total += amount;
                breakdown.push(`+ ${addon.dataset.name}: $${amount.toFixed(2)}`);
            });

            // Q5: Background
            const background = document.querySelector(`input[name="${serviceCode}_background"]:checked`);
            if (background && parseFloat(background.value) > 0) {
                const amount = parseFloat(background.value);
                total += amount;
                breakdown.push(`+ ${background.dataset.name}: $${amount.toFixed(2)}`);
            }

            // Q6: Usage
            const usage = document.querySelector(`input[name="${serviceCode}_usage"]:checked`);
            if (usage && parseFloat(usage.value) > 0) {
                const percent = parseFloat(usage.value);
                const amount = total * (percent / 100);
                total += amount;
                breakdown.push(`+ ${usage.parentElement.textContent.trim()}: $${amount.toFixed(2)}`);
            }

            // Q7: Privacy
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
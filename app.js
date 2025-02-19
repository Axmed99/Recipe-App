class RecipeExplorer {
    constructor() {
        this.recipes = recipes;
        this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        this.currentCategory = 'all';
        this.modal = new bootstrap.Modal(document.getElementById('recipeModal'));
        this.backToTopBtn = document.getElementById('backToTop');
        
        this.initializeEventListeners();
        this.renderRecipes();
    }

    initializeEventListeners() {
        // Search functionality
        document.getElementById('searchInput').addEventListener('input', this.handleSearch.bind(this));

        // Category filters
        document.querySelectorAll('[data-category]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.filterByCategory(e.target.dataset.category);
            });
        });

        // Favorites button
        document.getElementById('favoritesBtn').addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleFavorites();
        });

        // Print recipe
        document.getElementById('printRecipe').addEventListener('click', () => {
            window.print();
        });

        // Add footer category links
        document.querySelectorAll('.footer-links a[data-category]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const category = e.target.dataset.category;
                
                // Scroll to top smoothly
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });

                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(navLink => {
                    if (navLink.dataset.category === category) {
                        navLink.classList.add('active');
                    } else {
                        navLink.classList.remove('active');
                    }
                });

                // Filter recipes
                this.filterByCategory(category);
            });
        });

        // Add social media links behavior
        document.querySelectorAll('.social-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                // You can add actual social media URLs here
                alert('Social media links will be added soon!');
            });
        });

        // Back to Top button
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.backToTopBtn.classList.add('visible');
            } else {
                this.backToTopBtn.classList.remove('visible');
            }
        });

        this.backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Add Somali flag interaction
        document.querySelector('.somali-flag').addEventListener('click', () => {
            const modal = new bootstrap.Modal(document.getElementById('recipeModal'));
            const modalTitle = document.querySelector('#recipeModal .modal-title');
            const modalBody = document.querySelector('#recipeModal .modal-body');
            const modalFooter = document.querySelector('#recipeModal .modal-footer');

            modalTitle.textContent = 'Calanka Soomaaliya';
            modalBody.innerHTML = `
                <div class="text-center">
                    <div class="somali-flag mb-4" style="height: 200px;">
                        <div class="star-container">
                            <i class="bi bi-star-fill"></i>
                        </div>
                    </div>
                    <h3 class="mb-3">Calankaygu waa ceelka i waraabiya</h3>
                    <div class="flag-details mb-4">
                        <p class="lead mb-4">
                            Midabkiisa buluuga ah wuxuu ka tarjumayaa xorriyada iyo nabadda,
                            xiddigta cadna waxay ka tarjumaysaa iftiinka iyo horumarinta Soomaaliya.
                        </p>
                        <div class="national-anthem">
                            <h4 class="mb-3">Qeybta Heesta Calanka</h4>
                            <p class="anthem-text">
                                Xidigyahay caddow<br>
                                Xidigyahay caddow<br>
                                Cirka noo shareera<br>
                                Cirka noo shareera
                            </p>
                        </div>
                    </div>
                    <div class="flag-info">
                        <div class="row">
                            <div class="col-md-4">
                                <i class="bi bi-calendar-event mb-2"></i>
                                <h5>1954</h5>
                                <p>Sanadkii la sameeyay</p>
                            </div>
                            <div class="col-md-4">
                                <i class="bi bi-star mb-2"></i>
                                <h5>Xiddigta</h5>
                                <p>Iftiinka Ummadda</p>
                            </div>
                            <div class="col-md-4">
                                <i class="bi bi-palette mb-2"></i>
                                <h5>Buluug</h5>
                                <p>Nabadda & Xorriyadda</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            modalFooter.innerHTML = `
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Xir</button>
            `;

            modal.show();
        });

        // Add floating star interaction
        document.querySelectorAll('.floating-star').forEach(star => {
            star.addEventListener('click', () => {
                // Add temporary glow effect
                star.style.animation = 'starGlow 2s ease-in-out';
                star.style.color = 'rgba(255, 255, 255, 0.15)';
                star.style.textShadow = '0 0 20px rgba(255, 255, 255, 0.2)';
                
                // Reset after animation
                setTimeout(() => {
                    star.style.animation = 'floatStar 12s infinite ease-in-out';
                    star.style.color = 'rgba(255, 255, 255, 0.04)';
                    star.style.textShadow = 'none';
                }, 2000);
            });
        });
    }

    handleSearch(e) {
        const searchTerm = e.target.value.toLowerCase();
        const spinner = document.getElementById('searchSpinner');
        
        spinner.classList.remove('d-none');
        
        // Debounce search
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
            const filteredRecipes = this.recipes.filter(recipe => 
                recipe.name.toLowerCase().includes(searchTerm) ||
                recipe.cuisine.toLowerCase().includes(searchTerm) ||
                recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm))
            );
            
            this.renderRecipes(filteredRecipes);
            spinner.classList.add('d-none');
        }, 300);
    }

    filterByCategory(category) {
        this.currentCategory = category;
        this.showLoading();

        // Faster loading for better UX
        setTimeout(() => {
            let filteredRecipes;

            if (category === 'somali') {
                filteredRecipes = this.recipes.filter(recipe => recipe.cuisine === 'Somali');
            } else if (category === 'international') {
                filteredRecipes = this.recipes.filter(recipe => recipe.cuisine !== 'Somali');
            } else if (category === 'all') {
                filteredRecipes = this.recipes;
            } else {
                filteredRecipes = this.recipes.filter(recipe => recipe.category === category);
            }

            this.renderRecipes(filteredRecipes);
        }, 300);
    }

    renderRecipes(recipesToRender = this.recipes) {
        const grid = document.getElementById('recipeGrid');
        grid.innerHTML = '';

        if (this.currentCategory === 'all') {
            // Add Somali section
            const somaliRecipes = recipesToRender.filter(recipe => recipe.cuisine === 'Somali');
            if (somaliRecipes.length > 0) {
                grid.innerHTML += `
                    <div class="col-12">
                        <h3 class="section-title">Cuntada Soomaalida</h3>
                    </div>
                `;
                somaliRecipes.forEach(recipe => {
                    const card = this.createRecipeCard(recipe);
                    grid.appendChild(card);
                });
            }

            // Add International section
            const internationalRecipes = recipesToRender.filter(recipe => recipe.cuisine !== 'Somali');
            if (internationalRecipes.length > 0) {
                grid.innerHTML += `
                    <div class="col-12">
                        <h3 class="section-title">Cuntada Caalamka</h3>
                    </div>
                `;
                internationalRecipes.forEach(recipe => {
                    const card = this.createRecipeCard(recipe);
                    grid.appendChild(card);
                });
            }
        } else {
            // For other categories, just show the filtered recipes
            recipesToRender.forEach(recipe => {
                const card = this.createRecipeCard(recipe);
                grid.appendChild(card);
            });
        }

        // Show message if no recipes found
        if (recipesToRender.length === 0) {
            grid.innerHTML = `
                <div class="col-12 text-center">
                    <h3 class="text-muted">Ma jiraan cuntooyinka la helay</h3>
                </div>
            `;
        }
    }

    createRecipeCard(recipe) {
        const card = document.createElement('div');
        card.className = 'col fade-in';
        const difficultyInfo = this.getDifficultyColor(recipe.difficulty);
        card.innerHTML = `
            <div class="card recipe-card h-100">
                <div class="position-relative">
                    <img src="${recipe.image}" class="card-img-top recipe-image" alt="${recipe.name}">
                    <span class="badge bg-${difficultyInfo.color} difficulty-badge">
                        ${difficultyInfo.text}
                    </span>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${recipe.name}</h5>
                    <div class="cooking-time">
                        <i class="bi bi-clock-fill"></i>
                        <span>${recipe.cookingTime} Daqiiqo</span>
                    </div>
                    <div class="cuisine-type">
                        <i class="bi bi-globe2"></i>
                        <span>${recipe.cuisine}</span>
                    </div>
                    <div class="ingredients-preview">
                        <strong>Alaabta ugu muhiimsan:</strong><br>
                        ${recipe.ingredients.slice(0, 3).map(ing => `
                            <span class="badge bg-light text-dark me-1 mb-1">${ing}</span>
                        `).join('')}
                        ${recipe.ingredients.length > 3 ? `
                            <span class="badge bg-primary">+${recipe.ingredients.length - 3} kale</span>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;

        card.addEventListener('click', () => this.showRecipeDetails(recipe));
        return card;
    }

    getDifficultyColor(difficulty) {
        const colors = {
            easy: 'success',
            medium: 'warning',
            hard: 'danger'
        };
        // Add Somali translations for difficulty levels in recipe cards
        const difficultyTranslations = {
            easy: 'Fudud',
            medium: 'Dhexdhexaad',
            hard: 'Adag'
        };
        return {
            color: colors[difficulty] || 'secondary',
            text: difficultyTranslations[difficulty] || difficulty
        };
    }

    showRecipeDetails(recipe) {
        // Smooth scroll to modal when opened
        this.modal.show();
        setTimeout(() => {
            document.querySelector('#recipeModal').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);

        const modalTitle = document.querySelector('#recipeModal .modal-title');
        const modalBody = document.querySelector('#recipeModal .modal-body');
        const favoriteBtn = document.getElementById('favoriteRecipe');

        modalTitle.textContent = recipe.name;
        modalBody.innerHTML = this.generateRecipeDetails(recipe);

        favoriteBtn.onclick = () => this.toggleFavorite(recipe);
        favoriteBtn.innerHTML = `
            <i class="bi bi-heart${this.favorites.includes(recipe.id) ? '-fill' : ''}"></i>
            ${this.favorites.includes(recipe.id) ? 'Ka saar' : 'Kudar'} Kuwaad Jeceshahay
        `;
    }

    generateRecipeDetails(recipe) {
        return `
            <img src="${recipe.image}" class="img-fluid w-100 recipe-modal-image mb-3" alt="${recipe.name}">
            
            <div class="row mb-3">
                <div class="col-md-6">
                    <h6>Alaabta loo baahan yahay</h6>
                    <ul>
                        ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                    </ul>
                </div>
                <div class="col-md-6">
                    <h6>Macluumaadka Nafaqada</h6>
                    <div class="nutrition-info">
                        <p>Kaloriga: ${recipe.nutrition.calories}</p>
                        <p>Borotiinka: ${recipe.nutrition.protein}</p>
                        <p>Kaarboohaydred: ${recipe.nutrition.carbohydrates}</p>
                        <p>Duxda: ${recipe.nutrition.fat}</p>
                    </div>
                </div>
            </div>

            <h6>Sida loo sameeyo</h6>
            ${recipe.instructions.map((step, index) => `
                <div class="cooking-step">
                    <strong>Tallaabo ${index + 1}:</strong> ${step}
                </div>
            `).join('')}

            <div class="alert alert-info mt-3">
                <i class="bi bi-lightbulb"></i> <strong>Talo:</strong> ${recipe.tips}
            </div>
        `;
    }

    toggleFavorite(recipe) {
        const index = this.favorites.indexOf(recipe.id);
        if (index === -1) {
            this.favorites.push(recipe.id);
        } else {
            this.favorites.splice(index, 1);
        }
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
        this.showRecipeDetails(recipe); // Refresh modal to update favorite button
    }

    toggleFavorites() {
        const favoriteRecipes = this.recipes.filter(recipe => 
            this.favorites.includes(recipe.id)
        );
        this.renderRecipes(favoriteRecipes);
    }

    showLoading() {
        const grid = document.getElementById('recipeGrid');
        grid.innerHTML = `
            <div class="col-12 text-center loading-container">
                <div class="loading-spinner">
                    <i class="bi bi-star-fill star-1"></i>
                    <i class="bi bi-star-fill star-2"></i>
                    <i class="bi bi-star-fill star-3"></i>
                </div>
                <h3 class="loading-text">Fadlan sug...</h3>
            </div>
        `;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new RecipeExplorer();
}); 
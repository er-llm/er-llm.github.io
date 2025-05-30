// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Load data first
    loadContent().then(() => {
        // Then initialize everything else
        initializeWorkshop();
        initializeNavigation();
        initializeAnimations();
        
        // Finally, show the page
        document.documentElement.classList.add('loaded');
    });
});

async function loadContent() {
    try {
        await Promise.all([
            populateSpeakers(),
            populateOrganizers(),
            populateSchedule()
        ]);
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

function populateSpeakers() {
    return new Promise((resolve) => {
        const speakersContainer = document.querySelector('#speakers .row');
        if (speakersContainer) {
            speakersContainer.innerHTML = WORKSHOP_DATA.speakers
                .map(speaker => WorkshopComponents.createSpeakerCard(speaker))
                .join('');
        }
        resolve();
    });
}

function populateOrganizers() {
    return new Promise((resolve) => {
        const organizersContainer = document.querySelector('#organizers .row');
        if (organizersContainer) {
            organizersContainer.innerHTML = WORKSHOP_DATA.organizers
                .map(organizer => WorkshopComponents.createOrganizerCard(organizer))
                .join('');
        }
        resolve();
    });
}

function populateSchedule() {
    return new Promise((resolve) => {
        const scheduleContainer = document.querySelector('.schedule-timeline');
        if (scheduleContainer) {
            scheduleContainer.innerHTML = WORKSHOP_DATA.schedule
                .map(item => WorkshopComponents.createScheduleItem(item))
                .join('');
        }
        resolve();
    });
}

function initializeWorkshop() {
    setupFilters();
    setupLazyLoading();
}

function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

function setupFilters() {
    // Add any filtering functionality (e.g., by session type)
    const filterButtons = document.querySelectorAll('.schedule-filter');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterType = this.dataset.filter;
            filterScheduleItems(filterType);
        });
    });
}

function filterScheduleItems(type) {
    const items = document.querySelectorAll('.schedule-item');
    items.forEach(item => {
        if (type === 'all' || item.classList.contains(`schedule-${type}`)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}
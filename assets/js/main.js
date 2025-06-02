console.log('Main.js loaded');
console.log('WORKSHOP_DATA:', WORKSHOP_DATA);

document.addEventListener('DOMContentLoaded', function() {
    initializeWorkshop();
});

function initializeWorkshop() {
    // Check if already initialized
    if (window.workshopInitialized) return;
    window.workshopInitialized = true;

    // Function to populate invited speakers
    function initializeInvitedSpeakers() {
        try {
            const invitedSpeakersContainer = document.getElementById('invited-speakers-container');
            
            if (!invitedSpeakersContainer || !WORKSHOP_DATA.invitedSpeakers) {
                console.error('Missing invited speakers container or data');
                return;
            }

            const speakersHTML = WORKSHOP_DATA.invitedSpeakers.map(speaker => `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card speaker-card invited-speaker-card">
                        <div class="speaker-image-container">
                            <img src="${speaker.image}" 
                                class="speaker-image"
                                alt="${speaker.name}"
                                onerror="this.src='assets/images/placeholder.jpg'">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${speaker.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${speaker.affiliation}</h6>
                        </div>
                    </div>
                </div>
            `).join('');

            // Add the "More Speakers Coming Soon" badge
            const comingSoonHTML = `
                <div class="col-12 coming-soon-container">
                    <div class="coming-soon-badge">
                        More Speakers Coming Soon
                    </div>
                </div>
            `;
            
            invitedSpeakersContainer.innerHTML = speakersHTML +  comingSoonHTML;
        } catch (error) {
            console.error('Error populating invited speakers:', error);
        }
    }

    // Function to populate organizers
    function initializeOrganizers() {
        try {
            const organizersContainer = document.getElementById('speakers-container');
            
            if (!organizersContainer || !WORKSHOP_DATA.organizers) {
                console.error('Missing organizers container or data');
                return;
            }

            const organizersHTML = WORKSHOP_DATA.organizers.map(organizer => `
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card speaker-card">
                        <div class="speaker-image-container">
                            <img src="${organizer.image}" 
                                class="speaker-image"
                                alt="${organizer.name}"
                                onerror="this.src='assets/images/placeholder.jpg'">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${organizer.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${organizer.affiliation}</h6>
                            <h6 class="card-subtitle mb-2 text-muted">${organizer.email}</h6>
                            <p class="card-text"><small><strong>Bio:</strong> ${organizer.bio}</small></p>
                            <a href="${organizer.website}" class="btn btn-outline-primary btn-sm" target="_blank">Website</a>
                            <a href="${organizer.google_scholar}" class="btn btn-outline-primary btn-sm" target="_blank">Google Scholar</a>
                        </div>
                    </div>
                </div>
            `).join('');
            
            organizersContainer.innerHTML = organizersHTML;
        } catch (error) {
            console.error('Error populating organizers:', error);
        }
    }

    // Function to populate program committee
    function initializeProgramCommittee() {
        try {
            const committeeContainer = document.getElementById('committee-container');
            
            if (!committeeContainer || !WORKSHOP_DATA.programCommittee) {
                console.error('Missing committee container or data');
                return;
            }

            const committeeHTML = `
                <ul class="list-unstyled committee-list">
                    ${WORKSHOP_DATA.programCommittee.map(member => `
                        <li class="committee-item">
                            <strong>${member.name}</strong>
                            <br>
                            <span class="text-muted">${member.affiliation}</span>
                        </li>
                    `).join('')}
                </ul>
            `;
            
            committeeContainer.innerHTML = committeeHTML;
        } catch (error) {
            console.error('Error populating program committee:', error);
        }
    }

    // Initialize all sections
    initializeInvitedSpeakers();
    initializeOrganizers();
    initializeProgramCommittee();
}
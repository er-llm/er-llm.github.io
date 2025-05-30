// components.js
class WorkshopComponents {
    static createSpeakerCard(speaker) {
        return `
            <div class="col-md-4 mb-4">
                <div class="card speaker-card h-100">
                    <img src="${speaker.image}" class="card-img-top speaker-image" alt="${speaker.name}">
                    <div class="card-body">
                        <h5 class="card-title">${speaker.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${speaker.affiliation}</h6>
                        <p class="card-text">${speaker.talk_title}</p>
                        <div class="speaker-links">
                            <a href="${speaker.website}" class="btn btn-outline-primary btn-sm" target="_blank">
                                Website
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    static createOrganizerCard(organizer) {
        return `
            <div class="col-md-4 mb-4">
                <div class="card organizer-card h-100">
                    <img src="${organizer.image}" class="card-img-top organizer-image" alt="${organizer.name}">
                    <div class="card-body">
                        <h5 class="card-title">${organizer.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${organizer.affiliation}</h6>
                        <p class="card-text">${organizer.role}</p>
                        <a href="${organizer.website}" class="btn btn-outline-primary btn-sm" target="_blank">
                            Website
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    static createScheduleItem(item) {
        const typeClass = `schedule-${item.type}`;
        return `
            <div class="schedule-item ${typeClass}">
                <div class="schedule-time">${item.time}</div>
                <div class="schedule-content">
                    <h4>${item.title}</h4>
                    <p>${item.speakers.join(', ')}</p>
                </div>
            </div>
        `;
    }
}
export const current_date = "2023-09-11";
export const website_url = "https://week.token2049.com/";

const formToDBMap = new Map();

formToDBMap.set("Submitter's Name", "submitter_name");
formToDBMap.set("Submitter's Email Address", "submitter_mail");
formToDBMap.set("Event Name", "event_name");
formToDBMap.set("Organiser(s)", "organiser_name");
formToDBMap.set("Event Category", "event_category");
formToDBMap.set("Venue", "venue");
formToDBMap.set("Ticket Type", "event_type");
formToDBMap.set("Thumbnail  ( 400x400 px )", "thumbnail");
formToDBMap.set("Registration Link", "registration_link");
formToDBMap.set("Event Date", "event_date");
formToDBMap.set("Event Start Time", "start_time");
formToDBMap.set("Event End Time", "end_time");
formToDBMap.set("Ticket Price Range", "price");
formToDBMap.set("Venue Google Maps Link", "gmap_link");

export { formToDBMap };

/**
 * Created by jjhale on 7/15/18.
 */


/*
 Display next meeting information, via Meetup API
 API Docs: http://www.meetup.com/meetup_api/docs/2/events/
 */
console.log('starting');
$.ajax({
	type: "POST",
	dataType: 'jsonp',
	url: 'https://api.meetup.com/Code-for-Baltimore/events?photo-host=public&page=20&sig_id=14311654&sig=124bf6af6e8b516a9d3e570b6d0fcd6b8ae5ddaa',
	crossDomain : true,
	xhrFields: {
		withCredentials: true
	},
	beforeSend: function() {
		$('#meetup').addClass('loading'); // Show loader icon
	},
	complete: function() {
		$('#meetup').removeClass('loading'); // Hide loader icon
	}
})
	.done(function( xhr, textStatus, response, data, responseJSON ) {
		console.log('done');
		console.log(typeof(xhr));
		console.log(xhr.length);
		console.log(xhr);


		if (xhr.data[0] == undefined) { // If there is no upcoming event posted on Meetup...
			console.log('undefined next event');

			document.getElementById("meetupDetails").innerHTML = 'TBD (check back soon)';                            // Meeting date & place
			document.getElementById("meetupRSVP").style.display = 'none';                                            // RSVP info
			document.getElementById("meetupCTA").innerHTML = 'Join Our Meetup';                                      // Call to Action text
			document.getElementById("meetupCTA").href = 'https://www.meetup.com/Code-for-Baltimore/';  // Call to Action link

		} else
			{
			// Otherwise...
			console.log('there is a next event');

			/*
			 *  Gather the Variables
			 */

			// Next Event
			var nextEvent = xhr.data[0] // First event in the array returned from API

			// Permalink
			var eventURL = nextEvent.link  // URL

			// desc
			var eventDesc = nextEvent.description;

			// Location
			if (nextEvent.venue != undefined) {
				var eventLocation = nextEvent.venue.name                                  // Location
				// Normal
				var eventAddress = nextEvent.venue.address_1                              // Address
				var eventLatitude = nextEvent.venue.lat                                   // Latitutde
				var eventLongitude = nextEvent.venue.lon                                  // Longitude
				var eventCity = nextEvent.venue.city                                      // Cityx
				var eventState = nextEvent.venue.state                                    // State
				// Formatted for Gmaps
				var gmapAddress = eventAddress.split(' ').join('+')+','       // Address
				var gmapLat = '@'+eventLatitude+','                                       // Latitude
				var gmapLon = eventLongitude+',13z'                                       // Longitude
				var gmapCity = '+'+eventCity+','                                          // City
				var gmapState = '+'+eventState+'/'                                        // State
				// Gmaps Link
				var gmapStart = 'https://www.google.com/maps/place/'                      // Beginning of URL
				//var gmapLink = gmapStart+gmapAddress+gmapCity+gmapState+gmapLat+gmapLon;  // Complete URL
				var gmapLink = gmapStart+gmapAddress+gmapCity+gmapState;  // Complete URL
			} else {
				var eventAddress = 'TBD'   // Address
				var gmapLink = eventURL    // URL
			}

			// RSVP
			var headCount = nextEvent.yes_rsvp_count;                                           // Head Count (total number of 'yes' responses)

			var RSVPMessage = headCount + " people will be there — what about you?"
			var CTA = "RSVP on Meetup"

			// Date & Time
			if (nextEvent.time != undefined) {

				// Formatting
				var m_names = ["January", "February", "March",             // Month
					"April", "May", "June", "July", "August", "September",
					"October", "November", "December"];
				var d_names = ["Sunday", "Monday", "Tuesday",              // Day
					"Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
				function formatAMPM(date) {                                         // Time
					var hours = date.getHours();
					var minutes = date.getMinutes();
					var ampm = hours >= 12 ? 'pm' : 'am';
					hours = hours % 12;
					hours = hours ? hours : 12; // the hour '0' should be '12'
					minutes = minutes < 10 ? '0' + minutes : minutes;
					var strTime = hours + ':' + minutes + ' ' + ampm;
					return strTime;
				}

				// Now
				var now = new Date;                                                 // Get Today's Date
				var todayMonth = now.getMonth()                                     // Month
				var todayNumber = now.getDate()                                     // Number
				var todayTime = formatAMPM(now)                                     // Time (formatted)

				// Next Event
				var date = new Date(nextEvent.time)                                 // Get Next Event's Date
				var dateYear = date.getFullYear()                                   // Year
				var dateMonth = date.getMonth()                                     // Month
				var dateDay = date.getDay()                                         // Day
				var dateNumber = date.getDate()                                     // Number
				var dateTime = formatAMPM(date)                                     // Time (formatted)

				var eventName = nextEvent.name;

				// Final Variables
				if ( (todayNumber == dateNumber) && (todayMonth == dateMonth) ) {
					var prettyDate = 'Today'
				} else {
					var prettyDate = d_names[dateDay]+', '+m_names[dateMonth]+' '
						+dateNumber+ ", " + dateYear ;                              // Otherwise
				}

			} else {
				var prettyDate = 'TBD';
				var dateTime = '--:--';
				var eventName = "No upcoming events";
			}

			/*
			 *  Do Stuff with the Variables
			 */

			// Event Title
			document.getElementById("meetupName").innerHTML = eventName;


				// Date & Time
			document.getElementById("meetupDate").innerHTML = prettyDate;        // Date & Time
			document.getElementById("meetupTime").innerHTML = dateTime;        // Date & Time

			// Location
			document.getElementById("meetupLocation").innerHTML = eventLocation + " " +eventAddress;  // Location name
			document.getElementById("meetupLocation").href = gmapLink;           // Location link (gmaps)

			// RSVP
			document.getElementById("meetupRSVP").innerHTML = RSVPMessage;       // RSVP Total + Visitor's Status

			// Button
			document.getElementById("meetupCTA").innerHTML = CTA;                // Call to Action Text
			document.getElementById("meetupCTA").href = eventURL;                // Call to Action Link

			// Description:
			document.getElementById("meetupDesc").innerHTML = eventDesc

		}

	})

	.fail( function(xhr, textStatus, errorThrown) {
		alert(xhr.responseText);
		alert(textStatus);
	});
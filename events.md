---
title: Events
permalink: "/events/"
layout: page
type: inNavBar
---
# Events

{% for event in site.data.events.active %}
## {{ event.name }}
* Date: {{ event.date }}
* Time: {{ event.time }}
*	Location: {{ event.location }}
*	[RSVP on Meetup]({{event.meetup_url }} )
	
{{ event.description }}

{% endfor %}
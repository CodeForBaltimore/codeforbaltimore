---
title: Events
permalink: "/events/"
layout: page
type: inNavBar
order: 20
jsarr:
- js/meetup.js
---
# Events

Join us at one of our <a href="{{site.meetup_url}}">meetups</a> to learn more about <a href="/about-us/">what we do</a>,
or contribute to a <a href="/projects/">current project</a>.

We have two types of meetups: 
 * **Hack Nights**: project nights where our members work on 
   select projects to benefit Baltimore communities.
 * **Community Nights**: networking events with members of 
   the community and the group to discuss issues that could be solved with civic tech.


<h2 id="meetupName">next event</h2>

<div id="loaderIcon">
{% include icon/loading.svg %}
</div>

* Date: <span id="meetupDate"></span>
* Time: <span id="meetupTime"></span>
* Location: <a id="meetupLocation" href="" target="_blank"></a>

<a id="meetupCTA" class="btn-secondary" href="" target="_blank"></a>

<p id="meetupRSVP" class="sm soft"></p>

<div id="meetupDesc"></div>


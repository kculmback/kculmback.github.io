---
permalink: /
layout: page
---


<section class="main-hero">
	<h1>HELLO</h1>
	<p>My name is Kasey Culmback and I’m a web developer in Spokane, WA. My goal is to make websites that are pixel-perfect and coded beautifully.<br><br>
	Feel free to look around and get to know me!</p>
	<a href="#" class="btn">Contact Me</a>
</section>

<section class="about-me">
	<h2>ABOUT ME</h2>
	<img src="/assets/img/kasey-culmback.jpg" alt="Kasey Culmback">
	<p>I moved to Spokane in the fall of 2010 to attend Whitworth University and decided I liked it so much here to stick around. I was originally born in Bellingham, WA and have lived in the Pacific Northwest my whole life.
	<br><br>
	I first learned how to code websites in a “technology” class in the 9th grade. We learned the basics of HTML and CSS; I was hooked. I messed with languages like HTML, CSS, and Javascript for the next few years until about 2014. Since then I’ve been develed deeper into web developement and spend much of my free time working on projects for fun as well as freelancing!</p>
</section>

<section class="recent-projects">
	<h2>RECENT PROJECTS</h2>
	{% for post in site.categories.portfolio offset: 0 limit: 3 %}
	<a href="{{ post.url }}" class="project" title="{{ post.title }}">
		<img src="{{ post.featured_image }}" alt="{{ post.title }}">
		<span>{{ post.title }}</span>
	</a>
	{% endfor %}
	<!-- {% for post in site.categories.portfolio offset: 0 limit: 3 %}
	<a href="{{ post.url }}" class="project" title="{{ post.title }}" style="background: url('{{ post.featured_image }}') no-repeat center center; background-size: cover;">
		<span>{{ post.title }}</span>
	</a>
	{% endfor %} -->
</section>

<section class="recent-posts">
	<h2>RECENT POSTS</h2>
	{% for post in site.posts offset: 0 limit: 3 %}
	<a href="{{ post.url }}" class="post" title="{{ post.title }}">
		<img src="{{ post.featured_image }}" alt="{{ post.title }}">
		<span>{{ post.title }}</span>
	</a>
	{% endfor %}
	<!-- {% for post in site.categories.portfolio offset: 0 limit: 3 %}
	<a href="{{ post.url }}" class="project" title="{{ post.title }}" style="background: url('{{ post.featured_image }}') no-repeat center center; background-size: cover;">
		<span>{{ post.title }}</span>
	</a>
	{% endfor %} -->
</section>
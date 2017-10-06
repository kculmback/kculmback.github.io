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
</section>

<section class="hire-me">
	<h2>HIRE ME</h2>
	<div class="card">
		<i class="fa fa-star"></i>
		<h4>Beautifully coded websites</h4>
		<p>Many web developers nowadays use "premium" Wordpress themes that they reuse for all of their client websites. While this allows them to speed up the development process, it means your website is no longer unique. These themes are also usually bloated, cause your website to load longer, don't use best practices for SEO, and can be a pain in the neck for you to keep updated (which means you need to pay the developer to update it for you).<br><br>
		I, on the otherhand, will make sure that each of my client's websites are unique, only contain the code they need, and employ best practices for coding and SEO. This ensures that you get the most bang for your buck and aren't left with a frustrating website that doesn't live up to your standards.</p>
	</div>
	<div class="card">
		<i class="fa fa-star"></i>
		<h4>Easily edited and extensible</h4>
		<p>I ensure that the content of each website I build is easily updated and extensible where it can be. Rather then you having to dig into a mess of code to update that header for that one section, you will find a specific text field for that field in the backend. For content like lists, feature sections, galleries, etc, you'll be able to add as many as you want in order to extend the content of your website.<br><br>
		My main goal is to make the website dead simple for you to update. I don't want you to have to contact me for every little change to your site and I'll bet you don't want to pay for that! However, I will happily make edits to your pages if needed; you can even keep me 'on retainer' for a small monthly fee.</p>
	</div>
	<div class="card">
		<i class="fa fa-star"></i>
		<h4>Fair, competitive pricing</h4>
		<p>Simply put, you won't be able to find a web developer that puts in this much care and detail into your website for the prices I offer. This is because this isn't my fulltime job, it's my passion project. My pricing is straightforward and honest, no hidden fees. All you need to do is reach out, let me know what you're thinking, and I'll send you a quote with a detailed explanation of the costs. Most websites won't be more than $500!. If you have any special, out there needs, we can talk about that and I'll work out a qoute for you.<br><br>
		If you're a non-profit and are on a tightbudget, feel free to reach out to me and I'll glady work with you to try and put something together! My first and foremost goal will always be to try and help individuals create beautiful, modern, and fast websites, no matter their budget.</p>
	</div>
	<a href="#" class="btn">Contact Me</a>
</section>



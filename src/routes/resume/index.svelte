<script>
  import Header from '../../components/resume/Header.svelte';
  import Skills from '../../components/resume/Skills.svelte';
  import Job from '../../components/resume/Job.svelte';
</script>

<svelte:head>
  <title>Kasey Culmback Resume</title>
</svelte:head>

<div>
  <div class="text-center py-4">
    <h1 class="mb-1">Resume</h1>
    <h2 class="font-bold">Kasey Culmback - Software Engineer</h2>
  </div>
  <div class="flex flex-col-reverse lg:flex-row">
    <div class="lg:w-1/4 flex-shrink-0 lg:pr-8">
      <Header title="Skills" />
      <Skills
        title="Languages & Frameworks"
        skills={['JavaScript - ES6+, Vue, React', 'Node.js/Express', 'PHP - Laravel, Symfony', 'HTML & CSS']} />
      <Skills
        title="Development Tools"
        skills={['Webpack & Rollup', 'Docker', 'Git']} />
      <Skills
        title="Database & ORM"
        skills={['MySQL - Eloquent, Doctrine', 'Amazon RDS', 'MongoDB']} />
      <Skills
        title="AWS Services"
        skills={['Elastic Beanstalk', 'ECS', 'EC2', 'Elasticache (Redis)', 'RDS', 'CloudFront', 'Elastic Transcoder', 'S3']} />
      <Skills title="Testing" skills={['PHPUnit', 'Jest', 'Cypress']} />
    </div>
    <div class="mb-8">
      <div>
        <Header title="Career History" />
        <Job
          title="Full Stack Web Developer"
          employer="14Four"
          time="(Feb 2018 - Jan 2020)"
          items={['Built web applications for clients on tight timelines (4-8 weeks), utilized a variety of languages/frameworks (JavaScript, PHP, Vue, React, Laravel), used modern development tools (Webpack, Git, Docker), and implemented many deployment services(AWS, Bitbucket Pipelines).', 'Upgraded project scaffolding system and introduced standard features, such as codesplitting and tree shaking, to reduce code bloat and decrease development time.', 'Spearheaded extrapolating functionality used commonly across most project to separate libraries in order to decrease project development time.', 'Took initiative to write documentation that teaches junior developers current best practices and how to use internal tools.']} />
        <Job
          title="Full Stack Web Developer"
          employer="Freelance"
          time="(May 2014 - Present)"
          items={['Utilized best practices, various languages and frameworks, and modern web development tooling to provide high quality web applications to clients and increase client satisfaction.', "Maintain a high level of client satisfaction by utilizing strong communication skills, project management, and focusing on the importance of the clients' needs.", 'Worked with 8 clients to complete over 35 different projects.']} />
        <Job
          title="Full Stack Web Developer"
          employer="Two Barrels "
          time="(Oct 2017 - Feb 2018)"
          items={["Implemented new starter theme to reduce development time and project bloat (for company's Wordpress marketing sites).", 'Introduced Object Oriented (OOP) and Model-View-Controller (MVC) design methodologies.', 'Revamped and re-designed three-year-old website to increase site performance (decreased site load from 1.5mb+ to ~500kb) and increased sales.', 'Built JavaScript based HTML form testing utility to increase manual form testing speed.']} />
      </div>
      <div>
        <Header title="Education" />
        <h3 class="text-lg font-bold mb-1">Whitworth University</h3>
        <p class="italic">BA in Psychology & Sociology, 2013</p>
      </div>
    </div>
  </div>
</div>

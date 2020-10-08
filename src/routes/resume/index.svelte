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
        skills={['JavaScript - Vue, React, Node.js/Express', 'PHP - Laravel, Symfony', 'HTML & CSS (SCSS & PostCSS)']}
      />
      <Skills
        title="Development Tools"
        skills={['Webpack & Rollup', 'Docker', 'Git']}
      />
      <Skills
        title="Database & ORM"
        skills={['MySQL - Eloquent, Doctrine', 'MongoDB']}
      />
      <Skills
        title="AWS Services"
        skills={['Elastic Beanstalk', 'ECS', 'EC2', 'Elasticache (Redis)', 'Lambda', 'RDS', 'CloudFront', 'Elastic Transcoder', 'S3']}
      />
      <Skills
        title="Testing"
        skills={['Jest', 'Cypress', 'xUnit (.NET Core)', 'PHPUnit']}
      />
    </div>
    <div class="mb-8">
      <div>
        <Header title="Career History" />
        <Job
          title="Software Engineer"
          employer="Aon"
          time="(Jan 2020 - Present)"
          items={['Managed multiple enterprise web applications. Applications are primarily built with Vue.js and utilized Webpack to compile the JS & SCSS.', 'Built and maintained shared UI libraries to be used by various web applications, which helped to reduce code duplication and ensure consistent branding across the UIs.', 'Wrote technical documentation for UI libraries.', 'Helped  with building out APIs using .NET Core and Node.js.']}
        />
        <Job
          title="Full Stack Web Developer"
          employer="14Four"
          time="(Feb 2018 - Jan 2020)"
          items={['Built web applications for clients on tight timelines (4-8 weeks), utilized a variety of languages/frameworks (JavaScript, Vue, React, PHP, Laravel), used modern development tools (Webpack, Git, Docker), and implemented many deployment services (AWS, Bitbucket Pipelines).', 'Upgraded project scaffolding system and introduced standard features, such as code splitting and tree shaking, to reduce code bloat and decrease development time.', 'Spearheaded extrapolating functionality used commonly across most projects to separate libraries in order to decrease project development time.', 'Took initiative to write documentation that teaches junior developers current best practices and how to use internal tools.', 'Helped to revamp internship program to better support interns and to create a deeper partnership with the local colleges & universities.']}
        />
        <Job
          title="Full Stack Web Developer"
          employer="Freelance"
          time="(May 2014 - Present)"
          items={['Utilized best practices, various languages and frameworks, and modern web development tooling to provide high quality web applications to clients and increase client satisfaction.', "Maintain a high level of client satisfaction by utilizing strong communication skills, project management, and focusing on the importance of the clients' needs.", 'Worked with 9 clients to complete over 40 different projects.']}
        />
        <Job
          title="Full Stack Web Developer"
          employer="Two Barrels "
          time="(Oct 2017 - Feb 2018)"
          items={["Implemented new starter theme to reduce development time and project bloat (for company's Wordpress marketing sites).", 'Introduced Object Oriented (OO) and Model-View-Controller (MVC) design methodologies.', 'Revamped and re-designed three-year-old website to increase site performance (decreased site load from 1.5mb+ to ~400kb) and increase sales.', 'Built JavaScript based HTML form testing utility to increase manual form testing speed.']}
        />
      </div>
      <div>
        <Header title="Education" />
        <h3 class="text-lg font-bold mb-1">Whitworth University</h3>
        <p class="italic">BA in Psychology & Sociology, 2013</p>
      </div>
    </div>
  </div>
</div>

import { Skill } from '../models/skill';

export const SKILLS: Skill[] = [
    {id: 1, name: 'SSRS', experienceLevel: 4, yearsExperience: 3, lastUsed: new Date(), 
        description: "I use SSRS on a daily basis in my current position. I use it to create reports for the web application I maintain. I am very comfortable with the tool, and have used it to create a wide variety of reports. I have also used it to create Excel and Word templates for exporting data from the web application I maintain.", 
        categories: ['data', 'tools'], tags: ['ssrs', 'sql', 'server', 'reporting', 'services', 'excel', 'microsoft', 'word']},
    {id: 2, name: 'SSMS', experienceLevel: 4, yearsExperience: 5, lastUsed: new Date(),
        description: "I use SSMS on a daily basis to write stored procedures, tables, views, and functions for the web application I maintain in my current position. I am very comfortable with the tool, and find myself to be one of the more competent individuals on my team with it.",
        categories: ['data', 'tools', 'ide'], tags: ['ssms', 'sql', 'server', 'management', 'studio']},
    {id: 3, name: 'Visual Studio Code', experienceLevel: 4, yearsExperience: 5, lastUsed: new Date(),
        description: "While there are many better IDEs, and ones with which I have worked more, I'd have to say that Visual Studio Code is the one with which I am most comfortable and flexible.",
        categories: ['frontend', 'ide'], tags: ['angular', 'visual', 'studio', 'code', 'vs', 'html', 'css']},
    {id: 4, name: 'Visual Studio', experienceLevel: 5, yearsExperience: 8, lastUsed: new Date(),
        description: "I've used Visual Studio since creating a simple C++ application for a school project back in grade school. In my day-to-day now, I use it for all C# and SSRS applications.",
        categories: ['ide', 'backend'], tags: ['ssrs', 'c#', 'c++', 'asp.net', '.net', 'unit', 'testing', 'api', 'moq', '2017', '2019', '2022']},
    {id: 5, name: 'ASP.NET', experienceLevel: 4, yearsExperience: 4, lastUsed: new Date(),
        description: 'I first encountered ASP.NET while working at AGDATA. I am very comfortable using it to create web applications and APIs, epsecially when paired with Entity Framework and LINQ.',
        categories: ['data', 'framework', 'backend'], tags: ['asp', '.net', 'asp.net', 'c#', 'sql', 'code-first', 'database-first']},
    {id: 6, name: 'C#', experienceLevel: 4, yearsExperience: 4, lastUsed: new Date(),
        description: "I use C# on a daily basis in my current position. I use it to create the back-end of the web application I maintain. I am very comfortable with the language, and have used it to create web applications, web APIs, and console applications. I have used it with both .NET Framework and .NET Core, and typically paired with Entity Framework for data retrieval from a SQL database, and Moq for unit testing. I've also used it in my spare time to play around with Unity's game engine.",
        categories: ['data', 'language', 'backend'], tags: ['asp', '.net', 'asp.net', 'c#', 'visual-studio']},
    {id: 7, name: 'Typescript', experienceLevel: 4, yearsExperience: 4, lastUsed: new Date(),
        description: "I use Typescript on a regular basis when developing Angular applications for both my current position and personal projects (such as this portfolio). While I'm still learning new things about it on a daily basis, I'd consider myself very comfortable and familiar with it.",
        categories: ['frontend', 'language'], tags: ['angular', 'visual', 'studio', 'code', 'visual-studio-code', 'typescript']},
    {id: 7, name: 'Angular', experienceLevel: 4, yearsExperience: 4, lastUsed: new Date(),
        description: "I use Angular on a daily basis. I use it to create the front-end of the web application I maintain in my current position. I've spent more time aquainting myself with Angular than any other technology recently. I'd say it's easily my favorite way to develop front-end applications.",
        categories: ['frontend', 'framework'], tags: ['angular', 'visual', 'studio', 'code', 'visual-studio-code', 'typescript']},
    {id: 7, name: 'HTML', experienceLevel: 4, yearsExperience: 5, lastUsed: new Date(),
        description: 'I use HTML on a daily basis. I use it to create the front-end of the web application I maintain in my current position.',
        categories: ['frontend', 'language'], tags: ['html', 'visual', 'studio', 'code', 'visual-studio-code']},
    {id: 8, name: 'CSS', experienceLevel: 4, yearsExperience: 5, lastUsed: new Date(),
        description: 'I use CSS quite frequently in my current position. However, I have only just recently dedicated time to learning it in depth. I mostly pair it with Bootsrtrap to create responsive web applications, such as this portfolio.',
        categories: ['frontend', 'language'], tags: ['css', 'visual', 'studio', 'code', 'visual-studio-code']},
    {id: 9, name: 'Bootstrap', experienceLevel: 2, yearsExperience: 2, lastUsed: new Date(),
        description: "While I've used Bootstrap for some time now, I've only recently dedicated time to learning it in depth. I've been using it in my current position to create a responsive web application.",
        categories: ['frontend', 'tools'], tags: ['bootstrap', 'visual', 'studio', 'code', 'visual-studio-code', 'css', 'html', 'angular']},
    {id: 10, name: '.NET Framework', experienceLevel: 4, yearsExperience: 4, lastUsed: new Date(),
        description: 'I use .NET Framework in my current position. It is probably the technology I am most familiar with. I have used it to create web applications, web APIs, and console applications. I have used it with C#, and typically paired with Entity Framework for data retrieval from a SQL database, and Moq for unit testing.',
        categories: ['backend', 'framework'], tags: ['.net', 'asp', '.net', 'asp.net', 'c#', 'sql', 'code-first', 'database-first']},
    {id: 11, name: 'Azure', experienceLevel: 1, yearsExperience: 0, lastUsed: new Date('2022-09-14'),
        description: 'I completed certification for Azure fundamentals in September 2021. I have not yet had the opportunity to use Azure in a professional setting, but I am eager to do so.',
        categories: ['cloud', 'tools'], tags: ['azure', 'cloud', 'microsoft', 'certification']},
    {id: 12, name: 'LINQ', experienceLevel: 3, yearsExperience: 3, lastUsed: new Date(),
        description: 'I really enjoy using LINQ and while I used it more heavily in past positions, I do still get to use LINQ on Entity Framework Enumerables for business logic.',
        categories: ['backend', 'components'], tags: ['linq', 'c#', 'asp.net', 'asp', '.net', '.net-framework']},
    {id: 13, name: 'Entity Framework', experienceLevel: 4, yearsExperience: 5, lastUsed: new Date(),
        description: 'I use Entity Framework on a regular basis in .NET Framework applications, and have been using it as such since the start of my career. I have used it with both database-first and code-first approaches, but definitely prefer code-first.',
        categories: ['backend', 'framework'], tags: ['entity', 'framework', 'c#', 'asp.net', 'asp', '.net', '.net-framework', 'code-first', 'database-first']},
    {id: 14, name: 'Git', experienceLevel: 4, yearsExperience: 5, lastUsed: new Date(),
        description: 'I use Git on a daily basis in my current position. I have used it for both personal and professional projects. I am familiar with the Git CLI, as well as the Git GUI. My preferred Git GUI is GitHub Desktop.',
        categories: ['tools', 'source-control'], tags: ['git', 'github', 'source', 'control', 'cli', 'gui', 'github-desktop']},
    {id: 15, name: 'GitHub Desktop', experienceLevel: 4, yearsExperience: 2, lastUsed: new Date(),
        description: 'I use GitHub Desktop daily to manage source control of both personal and professional repositories.',
        categories: ['tools', 'source-control'], tags: ['git', 'github', 'source', 'control', 'cli', 'gui', 'github-desktop']},
    {id: 16, name: 'Asynchronous APIs', experienceLevel: 2, yearsExperience: .5, lastUsed: new Date(),
        description: 'Although my experience with creating and maintaining Asynchronous APIs is fairly limited. I would say I feel fairly comfortable working with it. As part of my duties in my current position, I converted large portions of our existing API to be asynchronous.',
        categories: ['principle', 'misc-knowledge'], tags: ['git', 'github', 'source', 'control', 'cli', 'gui', 'github-desktop']},
    {id: 17, name: 'Windows Batch', experienceLevel: 1, yearsExperience: 2, lastUsed: new Date('2018-04-30'),
        description: "While I'm certain I've used Batch a mulititude of times since graduating, I can't recall any specific instances of extended use for a specific task outside the classroom. I'm putting 2 years of experience here since I believe it was used heavily in my latter two years of college.",
        categories: ['language', 'misc-knowledge'], tags: ['batch', 'windows', 'command', 'prompt', 'cmd']},
    {id: 18, name: 'MVC/MVVC', experienceLevel: 5, yearsExperience: 5, lastUsed: new Date(),
        description: "While I used MVC in an academic setting, I primarily rely on the MVVC pattern in my professional work.",
        categories: ['principle', 'misc-knowledge'], tags: ['mvc', 'mvvc', 'model', 'view', 'controller', 'viewmodel']},
    {id: 19, name: 'Pair Programming', experienceLevel: 1, yearsExperience: 1, lastUsed: new Date(),
        description: "I first learned pair-programming best-practices in college, and while their use has been limited in a proffesional setting has been limited, I have recieved nothing but positive feedback from my coworkers whom I've pair programmed with.",
        categories: ['principle'], tags: ['pair-programming', 'pair', 'programming', 'best-practices', 'collaboration', 'teamwork', 'leadership']},
    {id: 20, name: 'Java', experienceLevel: 3, yearsExperience: 5, lastUsed: new Date('2018-04-30'),
        description: "I haven't used Java since college, where it was used for most computer science classes.",
        categories: ['language'], tags: ['java']},
    {id: 21, name: 'Moq', experienceLevel: 1, yearsExperience: 1, lastUsed: new Date(),
        description: "I use Moq regularly for unit testing the Asp.NET Web API I maintain in my current position. While previously existing unit testing relied on inserting and deleting test data from the database, I made an effort to push the team towards using Moq to keep unit testing segregated from the database. I pride myself in my ability to write reliable and high-quality unit tests. I've written several hundred of such high-quality tests for the API I maintain in my current position.",
        categories: ['framework', 'backend', 'tools'], tags: ['moq', 'unit-testing', 'testing', 'api', 'asp.net', 'asp', '.net', '.net-framework']},
    {id: 22, name: 'Jasmine/Karma', experienceLevel: 3, yearsExperience: 1, lastUsed: new Date(),
        description: "I use Jasmine and Karma for unit testing the Angular application I maintain in my current position. While my experience is limited, I am very confident when using it, and would go as far as to say that I am one of the more competent individuals on my team with it. Much like my abilities creating unit tests for the API, I have written several hundred high-quality unit tests for the Angular application I maintain.",
        categories: ['tools'], tags: ['jasmine', 'karma', 'unit-testing', 'testing', 'angular']},
    {id: 23, name: 'SSIS', experienceLevel: 1, yearsExperience: 1, lastUsed: new Date('2020-02-28'),
        description: "While I did use it in my previous employment, I only used it sparingly. I have not used it since.",
        categories: ['data'], tags: ['ssis', 'sql', 'server', 'integration', 'services']},
    {id: 24, name: 'REST', experienceLevel: 5, yearsExperience: 5, lastUsed: new Date(),
        description: "The API I maintain in my current position is RESTful. I have a solid understanding of REST principles, and use them regularly in my day-to-day.",
        categories: ['principle'], tags: ['rest', 'api', 'web']},
    {id: 25, name: 'SonarQube', experienceLevel: 1, yearsExperience: 1, lastUsed: new Date(),
        description: "While the amount of work I do within SonarQube is limited, I do use it regularly to ensure the quality of the code I write. I am familiar with the rules and best-practices it enforces, and I am able to use it to identify and correct code smells and bugs.",
        categories: ['tools'], tags: ['sonarqube', 'quality', 'code', 'smells', 'bugs', 'ci-cd']},
    {id: 26, name: 'Selenium', experienceLevel: 1, yearsExperience: 1, lastUsed: new Date('2023-01-13'),
        description: "I first used Selenium in a personal project in college designed to automate an hourly sign-in process. I most recently used it at the beginning of this year to implement automated behavior testing for the web application I maintain in my current position.",
        categories: ['tools'], tags: ['selenium', 'testing', 'automation', 'web', 'behavior-driven-design', 'bdd']},
    {id: 27, name: 'GitHub Copilot', experienceLevel: 1, yearsExperience: 1, lastUsed: new Date(),
        description: "This portfolio is actually the first time I've used GitHub Copilot. I've been using it to generate the descriptions for each skill. I've been very impressed with it so far, and I'm excited to see how it improves over time. It even helped me write this description!",
        categories: ['tools'], tags: ['github', 'copilot', 'ai', 'artificial', 'intelligence', 'code', 'generation']},
    {id: 28, name: 'Javascript', experienceLevel: 1, yearsExperience: 1, lastUsed: new Date(),
        description: "While I haven't used pure Javascript in a while, I still regularly use it in my day-to-day because Typescipt is built on it.",
        categories: ['languages', 'frontend'], tags: ['javascript', 'visual', 'studio', 'code', 'visual-studio-code']},
    {id: 29, name: 'jQuery', experienceLevel: 1, yearsExperience: 1, lastUsed: new Date('2020-02-28'),
        description: "Last used this in my position at AGDATA. While it's been a minute since I touched jQuery, I'm confident I could pick it back up quickly.",
        categories: ['misc', 'frontend'], tags: ['jquery', 'javascript', 'visual', 'studio', 'code', 'visual-studio-code']},
    {id: 30, name: 'SQL', experienceLevel: 1, yearsExperience: 1, lastUsed: new Date(),
        description: "I use SQL on a daily bases (specifically T-SQL). I am very comfortable writing complex queries, and I am familiar with the best-practices for writing performant queries.",
        categories: ['language', 'backend', 'data'], tags: ['sql', 't-sql', 'query', 'database', 'microsoft', 'server', 'ssms', 'ssis', 'ssrs']},
    {id: 31, name: 'Python', experienceLevel: 1, yearsExperience: 0, lastUsed: new Date(),
        description: "I've only really played around with Python in my free time. I used it in a small project for running a sprinkler system on a Raspberry Pi.",
        categories: ['language'], tags: ['python', 'raspberry', 'pi', 'raspberry-pi']},
    {id: 32, name: 'Assembly x86', experienceLevel: 1, yearsExperience: .5, lastUsed: new Date('2018-04-30'),
        description: "I used Assembly x86 in a computer architecture class in college. I haven't used it since, but actually found it quite enjoyable.",
        categories: ['language'], tags: ['assembly', 'x86', 'computer', 'architecture']},
    {id: 33, name: 'Haskell', experienceLevel: 1, yearsExperience: .5, lastUsed: new Date('2018-04-30'),
        description: "I used Haskell for a digital systems engineering class in which we simulated a microwave oven display on a PIC18 microcontroller. Like Assembly x86, I thoroughly enjoyed using Haskell, but haven't used it since.",
        categories: ['language'], tags: ['assembly', 'haskell', 'computer', 'architecture', 'pic18', 'microcontroller']},
    {id: 34, name: 'Redis', experienceLevel: 1, yearsExperience: .25, lastUsed: new Date('2018-07-30'),
        description: "Setup a Redis server as part of training program when I started with AGDATA. I haven't used it since.",
        categories: ['backend', 'data'], tags: ['redis', 'database', 'server']},
    {id: 36, name: 'Eclipse', experienceLevel: 4, yearsExperience: 4, lastUsed: new Date('2018-04-30'),
        description: "Used Eclipse regularly in college. I've used it sparingly since.",
        categories: ['ide'], tags: ['eclipse', 'ide', 'java']},
    {id: 37, name: 'GDScript', experienceLevel: 1, yearsExperience: 0, lastUsed: new Date(),
        description: "While Godot does support the use of C#, I wanted to explore a new language, and learned that GDScript had much more support when learning Godot. Thus far, I find it very intuitive and enjoyable to use.",
        categories: ['languages'], tags: ['gdscript', 'godot', 'game']},
    {id: 38, name: 'Jira', experienceLevel: 3, yearsExperience: 3, lastUsed: new Date(),
        description: "I use Jira on a daily basis in my current position for ticket management and tracking. I am very flexible in using different strategies for managing tickets, as I've used it while working with multiple different teams, and had to adjust my style for each.",
        categories: ['tools'], tags: ['jira', 'ticket', 'management', 'tracking', 'agile', 'scrum']},
  ];

export const CATEGORIES: any[] = [
    {value: 'frontend', viewValue: 'Front-End Development'},
    {value: 'backend', viewValue: 'Back-End Development'},
    {value: 'data', viewValue: 'Data and Reporting'},
    {value: 'ide', viewValue: 'IDEs'},
    {value: 'language', viewValue: 'Languages'},
    {value: 'framework', viewValue: 'Frameworks'},
    {value: 'tools', viewValue: 'Tools and Components'},
    {value: 'principle', viewValue: 'Practices and Principles'},
    {value: 'cloud', viewValue: 'Cloud Tools & Services'},
    {value: 'components', viewValue: 'Components'},
    {value: 'source-control', viewValue: 'Source Control'},
    {value: 'misc', viewValue: 'Miscellaneous'}
  ];
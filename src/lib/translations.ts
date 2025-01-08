export type Language = 'en' | 'fa';

export type TranslationType = {
  name: string;
  role: string;
  badges: {
    ielts75: string;
    apcs55: string;
    since2017: string;
    freelancer: string;
  };
  sections: {
    educationaljourney: {
      title: string;
      items: { text: string; }[];
      description: string;
    };
    internationalexperience: {
      title: string;
      items: { text: string; }[];
      description: string;
    };
    professionalwork: {
      title: string;
      items: { text: string; }[];
      description: string;
    };
    contact: {
      title: string;
      subtitle: string;
      form: {
        name: {
          label: string;
          placeholder: string;
        };
        email: {
          label: string;
          placeholder: string;
        };
        message: {
          label: string;
          placeholder: string;
        };
        submit: string;
      };
      success: string;
      error: string;
    };
    nerdystats: {
      title: string;
      subtitle: string;
      stats: {
        linesOfCode: {
          title: string;
          value: string;
          description: string;
        };
        coffeeConsumed: {
          title: string;
          value: string;
          description: string;
        };
        bugsSquashed: {
          title: string;
          value: string;
          description: string;
        };
        githubStreak: {
          title: string;
          value: string;
          description: string;
        };
      };
      achievements: {
        title: string;
        list: {
          debugger: {
            title: string;
            description: string;
            level: string;
          };
          nightOwl: {
            title: string;
            description: string;
            level: string;
          };
          polyglot: {
            title: string;
            description: string;
            level: string;
          };
          architect: {
            title: string;
            description: string;
            level: string;
          };
        };
      };
    };
    codinggame: {
      title: string;
      subtitle: string;
      challenges: {
        title: string;
        description: string;
        difficulties: {
          easy: {
            title: string;
            description: string;
            task: string;
            codeBlocks: string[];
            solution: string[];
            feedback: {
              success: string;
              error: string;
            };
          };
          mediocre: {
            title: string;
            description: string;
            task: string;
            codeBlocks: string[];
            solution: string[];
            feedback: {
              success: string;
              error: string;
            };
          };
          complex: {
            title: string;
            description: string;
            task: string;
            codeBlocks: string[];
            solution: string[];
            feedback: {
              success: string;
              error: string;
            };
          };
        };
      };
      ui: {
        dropHere: string;
        runCode: string;
        resetCode: string;
        loading: string;
      };
    };
  };
  jobs: {
    raycom: {
      title: string;
      company: string;
      location: string;
      period: string;
      responsibilities: string[];
    };
    tizupinstitute: {
      title: string;
      company: string;
      location: string;
      period: string;
      responsibilities: string[];
    };
    managementsystems: {
      title: string;
      company: string;
      location: string;
      period: string;
      responsibilities: string[];
    };
    qoulio: {
      title: string;
      company: string;
      location: string;
      period: string;
      responsibilities: string[];
    };
    fidartechnologyteam: {
      title: string;
      company: string;
      location: string;
      period: string;
      responsibilities: string[];
    };
    ramankimia: {
      title: string;
      company: string;
      location: string;
      period: string;
      responsibilities: string[];
    };
  };
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
  ui: {
    scrollToExplore: string;
    teachingNote: string;
    loading: string;
    switchLanguage: string;
  };
};

export const translations: Record<Language, TranslationType> = {
  en: {
    name: "Parsa Zeinali",
    role: "Full-Stack Developer & Computer Science Enthusiast",
    badges: {
      ielts75: "IELTS 7.5",
      apcs55: "AP CS 5/5",
      since2017: "Since 2017",
      freelancer: "Freelancer"
    },
    sections: {
      educationaljourney: {
        title: "Educational Journey",
        items: [
          { text: "C++ & Algorithms" },
          { text: "C# Development" },
          { text: "ASP.NET" }
        ],
        description: "Started at Salam High School through Computer Olympiad program"
      },
      internationalexperience: {
        title: "International Experience",
        items: [
          { text: "AP CS Perfect Score" },
          { text: "Dual Diplomas" }
        ],
        description: "Florya Canadian School, Turkey (2019)"
      },
      professionalwork: {
        title: "Professional Work",
        items: [
          { text: "Back-end Optimization" },
          { text: "Front-end Projects" }
        ],
        description: "Freelance Developer since 2020"
      },
      contact: {
        title: "Let's Talk",
        subtitle: "Warning: Sending this form may result in receiving extremely nerdy responses about code",
        form: {
          name: {
            label: "Your Name",
            placeholder: "John 'Debug' Doe"
          },
          email: {
            label: "Your Email",
            placeholder: "totally.real@email.com"
          },
          message: {
            label: "Your Message",
            placeholder: "Dear future code companion..."
          },
          submit: "Send to the Cloud ☁️"
        },
        success: "Message sent! Now eagerly refreshing my inbox every 0.1ms...",
        error: "Oops! Looks like we encountered a runtime error in our communication protocol 🤖"
      },
      nerdystats: {
        title: "Debug Console",
        subtitle: "Warning: Exposing internal metrics may cause extreme nerdiness",
        stats: {
          linesOfCode: {
            title: "Lines of Code",
            value: "1,337,420",
            description: "Semicolons carefully placed"
          },
          coffeeConsumed: {
            title: "Coffee Consumed",
            value: "∞",
            description: "Cups of debugging fuel"
          },
          bugsSquashed: {
            title: "Bugs Squashed",
            value: "404",
            description: "Errors not found"
          },
          githubStreak: {
            title: "GitHub Streak",
            value: "42",
            description: "Days of consecutive commits"
          }
        },
        achievements: {
          title: "Achievement Unlocked",
          list: {
            debugger: {
              title: "Master Debugger",
              description: "Found bugs in code that didn't exist yet",
              level: "Level 99"
            },
            nightOwl: {
              title: "Night Owl",
              description: "Peak productivity achieved at 3 AM",
              level: "Level 80"
            },
            polyglot: {
              title: "Code Polyglot",
              description: "Fluent in multiple programming languages",
              level: "Level 75"
            },
            architect: {
              title: "Solution Architect",
              description: "Built systems that actually worked",
              level: "Level 85"
            }
          }
        }
      },
      codinggame: {
        title: "Coding Arena",
        subtitle: "Master advanced C# concepts with elegant solutions!",
        challenges: {
          title: "Algorithm Challenges",
          description: "Create elegant C# solutions using advanced language features",
          difficulties: {
            easy: {
              title: "Pattern Matching Wizard",
              description: "Use C# 10's pattern matching to solve complex conditions",
              task: "Implement a shape area calculator using pattern matching",
              codeBlocks: [
                "record Shape;",
                "record Circle(double R) : Shape;",
                "record Square(double S) : Shape;",
                "static double Area(Shape s) =>",
                "    s switch {",
                "        Circle(var r) => Math.PI * r * r,",
                "        Square(var s) => s * s,",
                "        _ => 0",
                "    };"
              ],
              solution: [
                "record Shape;",
                "record Circle(double R) : Shape;",
                "record Square(double S) : Shape;",
                "static double Area(Shape s) =>",
                "    s switch {",
                "        Circle(var r) => Math.PI * r * r,",
                "        Square(var s) => s * s,",
                "        _ => 0",
                "    };"
              ],
              feedback: {
                success: "Perfect! You've mastered C# pattern matching with records! 🎯",
                error: "Check your pattern matching syntax. Remember the power of record patterns! 🤔"
              }
            },
            mediocre: {
              title: "LINQ Sorcerer",
              description: "Solve complex data transformation with a single LINQ expression",
              task: "Group and transform nested collections with LINQ",
              codeBlocks: [
                "var result = items",
                "    .SelectMany(x => x.Tags",
                "        .Select(t => (x.Id, Tag: t)))",
                "    .GroupBy(x => x.Tag)",
                "    .Select(g => new {",
                "        Tag = g.Key,",
                "        Count = g.Count(),",
                "        Ids = g.Select(x => x.Id)",
                "    })",
                "    .OrderByDescending(x => x.Count);"
              ],
              solution: [
                "var result = items",
                "    .SelectMany(x => x.Tags",
                "        .Select(t => (x.Id, Tag: t)))",
                "    .GroupBy(x => x.Tag)",
                "    .Select(g => new {",
                "        Tag = g.Key,",
                "        Count = g.Count(),",
                "        Ids = g.Select(x => x.Id)",
                "    })",
                "    .OrderByDescending(x => x.Count);"
              ],
              feedback: {
                success: "Excellent! You've mastered complex LINQ transformations! 🌟",
                error: "Review your LINQ chain. Think about flattening, grouping, and projecting! 🔍"
              }
            },
            complex: {
              title: "Async Pipeline Master",
              description: "Build a concurrent pipeline using channels",
              task: "Create a producer-consumer pipeline with backpressure",
              codeBlocks: [
                "using System.Threading.Channels;",
                "var channel = Channel",
                "    .CreateBounded<T>(10);",
                "async Task Produce() =>",
                "    await Parallel.ForEachAsync(",
                "        source,",
                "        async (item, ct) =>",
                "            await channel.Writer",
                "                .WriteAsync(item)",
                "    );",
                "async Task<List<R>> Consume() =>",
                "    await channel.Reader",
                "        .ReadAllAsync()",
                "        .Select(Transform)",
                "        .ToListAsync();"
              ],
              solution: [
                "using System.Threading.Channels;",
                "var channel = Channel",
                "    .CreateBounded<T>(10);",
                "async Task Produce() =>",
                "    await Parallel.ForEachAsync(",
                "        source,",
                "        async (item, ct) =>",
                "            await channel.Writer",
                "                .WriteAsync(item)",
                "    );",
                "async Task<List<R>> Consume() =>",
                "    await channel.Reader",
                "        .ReadAllAsync()",
                "        .Select(Transform)",
                "        .ToListAsync();"
              ],
              feedback: {
                success: "Phenomenal! You've mastered channels and async streams! 🚀",
                error: "Review channel operations and async stream processing! 🔧"
              }
            }
          }
        },
        ui: {
          dropHere: "Drop code blocks here to build your solution",
          runCode: "Compile & Run",
          resetCode: "Reset",
          loading: "Compiling..."
        }
      }
    },
    jobs: {
      raycom: {
        title: "Full Stack .NET Developer",
        company: "Raycom",
        location: "Tehran, Iran",
        period: "June 2023 - November 2023 (5 months)",
        responsibilities: [
          "Led development of enterprise project management system in real estate using ABP framework",
          "Troubleshooting and optimization of legacy code across various company projects",
          "Specialized in complex software development and legacy code management/debugging"
        ]
      },
      tizupinstitute: {
        title: ".NET Programming Instructor",
        company: "Teenzup Academy",
        location: "Tehran, Iran",
        period: "December 2021 - November 2023 (1 year, 11 months)",
        responsibilities: [
          "C# programming instructor, comprehensive courses from basic to advanced levels",
          "Teaching programming fundamentals, software architecture, and design patterns",
          "Web development (HTML, CSS, JS) and database instruction, including query optimization techniques"
        ]
      },
      managementsystems: {
        title: ".NET Developer",
        company: "Management Systems",
        location: "Tehran, Iran",
        period: "May 2022 - March 2023 (10 months)",
        responsibilities: [
          "Microsoft Dynamics 365 software specialist, responsible for On-Premise version development and customization",
          "Development of custom modules, creation of dashboards and analytical reports",
          "Integration with other enterprise systems"
        ]
      },
      qoulio: {
        title: "Website UI Designer",
        company: "Qoulio",
        location: "Turkey",
        period: "October 2021 - April 2022 (6 months)",
        responsibilities: [
          "Infrastructure design and backend development",
          "UI/UX design and wireframing for web applications",
          "Creation of interactive prototypes and design mockups"
        ]
      },
      fidartechnologyteam: {
        title: "Mobile & Backend Developer",
        company: "Fidar Technology Team",
        location: "Tehran, Iran",
        period: "October 2020 - September 2021 (11 months)",
        responsibilities: [
          "Development of IoT application for ESP module communication",
          "Development of application for tracking autistic children",
          "Development of Nanolife device communication application",
          "Implementation of all applications with proper state management using bloc pattern",
          "Design of REST API with ASP.NET Core for database communication and statistical data retrieval"
        ]
      },
      ramankimia: {
        title: "Fullstack Developer",
        company: "Raman Kimia", 
        location: "Tehran, Iran",
        period: "July 2020 - August 2020 (1 month)",
        responsibilities: [
          "Company website design and development as a project-based contract",
          "Implementation of responsive design and modern UI components",
          "Integration with backend APIs for dynamic content management",
          "Search engine optimization and performance improvements",
          "Deployment and hosting configuration"
        ]
      }
    },
    social: {
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email"
    },
    ui: {
      scrollToExplore: "Scroll to explore",
      teachingNote: "Teaching experience is separate from professional work experience",
      loading: "JIT Compilation in Progress",
      switchLanguage: "فارسی"
    }
  },
  fa: {
    name: "پارسا زینعلی",
    role: "توسعه‌دهنده فول‌استک و علاقه‌مند به علوم کامپیوتر",
    badges: {
      ielts75: "آیلتس ۷.۵",
      apcs55: "AP CS ۵/۵",
      since2017: "از سال ۲۰۱۷",
      freelancer: "فریلنسر"
    },
    sections: {
      educationaljourney: {
        title: "مسیر تحصیلی",
        items: [
          { text: "سی‌پلاس‌پلاس و الگوریتم‌ها" },
          { text: "توسعه سی‌شارپ" },
          { text: "ای‌اس‌پی دات نت" }
        ],
        description: "شروع در دبیرستان سلام از طریق برنامه المپیاد کامپیوتر"
      },
      internationalexperience: {
        title: "تجربه بین‌المللی",
        items: [
          { text: "نمره کامل AP CS" },
          { text: "دیپلم دوگانه" }
        ],
        description: "مدرسه کانادایی فلوریا، ترکیه (۲۰۱۹)"
      },
      professionalwork: {
        title: "کار حرفه‌ای",
        items: [
          { text: "بهینه‌سازی بک‌اند" },
          { text: "پروژه‌های فرانت‌اند" }
        ],
        description: "توسعه‌دهنده فریلنس از سال ۲۰۲۰"
      },
      contact: {
        title: "گپ و گفتگو",
        subtitle: "هشدار: ارسال این فرم ممکن است منجر به دریافت پاسخ‌های به شدت برنامه‌نویسی شود",
        form: {
          name: {
            label: "نام شما",
            placeholder: "جان 'دیباگ' دو"
          },
          email: {
            label: "ایمیل شما",
            placeholder: "ایمیل.واقعی@مثال.کام"
          },
          message: {
            label: "پیام شما",
            placeholder: "همکار برنامه‌نویس آینده عزیز..."
          },
          submit: "ارسال به ابر ☁️"
        },
        success: "پیام ارسال شد! هر ۰.۱ میلی‌ثانیه صندوق ورودی رو چک می‌کنم...",
        error: "اوپس! به نظر میاد یه خطای زمان اجرا تو پروتکل ارتباطیمون رخ داده 🤖"
      },
      nerdystats: {
        title: "کنسول دیباگ",
        subtitle: "هشدار: نمایش متریک‌های داخلی ممکن است باعث نردی‌گری شدید شود",
        stats: {
          linesOfCode: {
            title: "خطوط کد",
            value: "۱,۳۳۷,۴۲۰",
            description: "سمی‌کالن‌های با دقت جایگذاری شده"
          },
          coffeeConsumed: {
            title: "قهوه مصرف شده",
            value: "∞",
            description: "فنجان سوخت دیباگینگ"
          },
          bugsSquashed: {
            title: "باگ‌های رفع شده",
            value: "۴۰۴",
            description: "خطاها پیدا نشدند"
          },
          githubStreak: {
            title: "رکورد گیت‌هاب",
            value: "۴۲",
            description: "روز کامیت متوالی"
          }
        },
        achievements: {
          title: "دستاورد آزاد شد",
          list: {
            debugger: {
              title: "استاد دیباگر",
              description: "یافتن باگ در کدی که هنوز وجود نداشت",
              level: "لول ۹۹"
            },
            nightOwl: {
              title: "جغد شب",
              description: "اوج بهره‌وری در ساعت ۳ صبح",
              level: "لول ۸۰"
            },
            polyglot: {
              title: "پلی‌گلات کد",
              description: "تسلط به چندین زبان برنامه‌نویسی",
              level: "لول ۷۵"
            },
            architect: {
              title: "معمار راه‌حل",
              description: "ساخت سیستم‌هایی که واقعاً کار می‌کنند",
              level: "لول ۸۵"
            }
          }
        }
      },
      codinggame: {
        title: "زمین بازی کد",
        subtitle: "بکش، رها کن و دیباگ کن: قطعات کد کارآمد بساز!",
        challenges: {
          title: "چالش‌های الگوریتم",
          description: "با استفاده از ویژگی‌های پیشرفته زبان برنامه‌نویسی سی‌شارپ، حل‌های زیبایی بسازید",
          difficulties: {
            easy: {
              title: "متداول‌سازی الگو",
              description: "با استفاده از الگوی متداول‌سازی سی‌شارپ ۱۰، شرایط پیچیده را حل کنید",
              task: "پیاده‌سازی محاسبه مساحت شکل با استفاده از الگوی متداول‌سازی",
              codeBlocks: [
                "record Shape;",
                "record Circle(double R) : Shape;",
                "record Square(double S) : Shape;",
                "static double Area(Shape s) =>",
                "    s switch {",
                "        Circle(var r) => Math.PI * r * r,",
                "        Square(var s) => s * s,",
                "        _ => 0",
                "    };"
              ],
              solution: [
                "record Shape;",
                "record Circle(double R) : Shape;",
                "record Square(double S) : Shape;",
                "static double Area(Shape s) =>",
                "    s switch {",
                "        Circle(var r) => Math.PI * r * r,",
                "        Square(var s) => s * s,",
                "        _ => 0",
                "    };"
              ],
              feedback: {
                success: "خوب! شما در الگوی متداول‌سازی سی‌شارپ ۱۰ استاد شده‌اید! 🎯",
                error: "ساختار الگوی متداول‌سازی خود را بررسی کنید. قدرت الگوی رکورد را یاد بگیرید! 🤔"
              }
            },
            mediocre: {
              title: "متداول‌سازی LINQ",
              description: "با یک عبارت LINQ، تبدیل پیچیده‌ای از داده‌ها را حل کنید",
              task: "گروه‌بندی و تبدیل جمع‌آوری‌های متداول با LINQ",
              codeBlocks: [
                "var result = items",
                "    .SelectMany(x => x.Tags",
                "        .Select(t => (x.Id, Tag: t)))",
                "    .GroupBy(x => x.Tag)",
                "    .Select(g => new {",
                "        Tag = g.Key,",
                "        Count = g.Count(),",
                "        Ids = g.Select(x => x.Id)",
                "    })",
                "    .OrderByDescending(x => x.Count);"
              ],
              solution: [
                "var result = items",
                "    .SelectMany(x => x.Tags",
                "        .Select(t => (x.Id, Tag: t)))",
                "    .GroupBy(x => x.Tag)",
                "    .Select(g => new {",
                "        Tag = g.Key,",
                "        Count = g.Count(),",
                "        Ids = g.Select(x => x.Id)",
                "    })",
                "    .OrderByDescending(x => x.Count);"
              ],
              feedback: {
                success: "خوب! شما در تبدیل پیچیده‌ای از داده‌ها با LINQ استاد شده‌اید! 🌟",
                error: "ساختار زنجیره LINQ خود را بررسی کنید. به فلتنگ، گروه‌بندی و پروژکشن فکر کنید! 🔍"
              }
            },
            complex: {
              title: "مدیریت ناهمگام",
              description: "با استفاده از کانال‌ها، یک پیپ‌لاین ناهمگام بسازید",
              task: "ایجاد یک پیپ‌لاین ناهمگام با فشار بازگشت",
              codeBlocks: [
                "using System.Threading.Channels;",
                "var channel = Channel",
                "    .CreateBounded<T>(10);",
                "async Task Produce() =>",
                "    await Parallel.ForEachAsync(",
                "        source,",
                "        async (item, ct) =>",
                "            await channel.Writer",
                "                .WriteAsync(item)",
                "    );",
                "async Task<List<R>> Consume() =>",
                "    await channel.Reader",
                "        .ReadAllAsync()",
                "        .Select(Transform)",
                "        .ToListAsync();"
              ],
              solution: [
                "using System.Threading.Channels;",
                "var channel = Channel",
                "    .CreateBounded<T>(10);",
                "async Task Produce() =>",
                "    await Parallel.ForEachAsync(",
                "        source,",
                "        async (item, ct) =>",
                "            await channel.Writer",
                "                .WriteAsync(item)",
                "    );",
                "async Task<List<R>> Consume() =>",
                "    await channel.Reader",
                "        .ReadAllAsync()",
                "        .Select(Transform)",
                "        .ToListAsync();"
              ],
              feedback: {
                success: "خوب! شما در کانال‌ها و پردازش سینک‌های ناهمگام استاد شده‌اید! 🚀",
                error: "ساختار کانال‌ها و پردازش سینک‌های ناهمگام را بررسی کنید! 🔧"
              }
            }
          }
        },
        ui: {
          dropHere: "قطعات کد رو اینجا بگیر",
          runCode: "کامپایل و اجرا",
          resetCode: "بازنشانی",
          loading: "کامپایل صورت می‌گیرد..."
        }
      }
    },
    jobs: {
      raycom: {
        title: "توسعه‌دهنده فول‌استک دات‌نت",
        company: "ریکام",
        location: "تهران، ایران",
        period: "خرداد ۱۴۰۲ - آبان ۱۴۰۲ (۵ ماه)",
        responsibilities: [
          "هدایت توسعه سیستم مدیریت پروژه سازمانی در حوزه املاک با استفاده از فریم‌ورک ABP",
          "عیب‌یابی و بهینه‌سازی کد‌های قدیمی در پروژه‌های مختلف شرکت",
          "تخصص در توسعه نرم‌افزارهای پیچیده و مدیریت/دیباگ کدهای قدیمی"
        ]
      },
      tizupinstitute: {
        title: "مدرس برنامه‌نویسی دات‌نت",
        company: "موسسه تیزآپ",
        location: "تهران، ایران",
        period: "آذر ۱۴۰۰ - آبان ۱۴۰۲ (۱ سال و ۱۱ ماه)",
        responsibilities: [
          "مدرس برنامه‌نویسی سی‌شارپ، دوره‌های جامع از مقدماتی تا پیشرفته",
          "تدریس مبانی برنامه‌نویسی، معماری نرم‌افزار و الگوهای طراحی",
          "آموزش توسعه وب (HTML, CSS, JS) و پایگاه داده، شامل تکنیک‌های بهینه‌سازی کوئری"
        ]
      },
      managementsystems: {
        title: "توسعه‌دهنده دات‌نت",
        company: "سیستم‌های مدیریت",
        location: "تهران، ایران",
        period: "اردیبهشت ۱۴۰۱ - اسفند ۱۴۰۱ (۱۰ ماه)",
        responsibilities: [
          "متخصص نرم‌افزار Microsoft Dynamics 365، مسئول توسعه و سفارشی‌سازی نسخه On-Premise",
          "توسعه ماژول‌های سفارشی، ایجاد داشبوردها و گزارش‌های تحلیلی",
          "یکپارچه‌سازی با سایر سیستم‌های سازمانی"
        ]
      },
      qoulio: {
        title: "طراح رابط کاربری وب‌سایت",
        company: "کولیو",
        location: "ترکیه",
        period: "مهر ۱۴۰۰ - فروردین ۱۴۰۱ (۶ ماه)",
        responsibilities: [
          "طراحی زیرساخت و توسعه بک‌اند"
        ]
      },
      fidartechnologyteam: {
        title: "توسعه‌دهنده موبایل و بک‌اند",
        company: "تیم فناوری فیدار",
        location: "تهران، ایران",
        period: "مهر ۱۳۹۹ - شهریور ۱۴۰۰ (۱۱ ماه)",
        responsibilities: [
          "توسعه اپلیکیشن IoT برای ارتباط با ماژول ESP",
          "توسعه اپلیکیشن ردیابی کودکان اوتیسم",
          "توسعه اپلیکیشن ارتباط با دستگاه Nanolife",
          "پیاده‌سازی تمام اپلیکیشن‌ها با مدیریت state مناسب با استفاده از الگوی bloc",
          "طراحی REST API با ASP.NET Core برای ارتباط با پایگاه داده و دریافت داده‌های آماری"
        ]
      },
      ramankimia: {
        title: "توسعه‌دهنده فول‌استک",
        company: "رامان کیمیا",
        location: "تهران، ایران",
        period: "تیر ۱۳۹۹ - مرداد ۱۳۹۹ (۱ ماه)",
        responsibilities: [
          "طراحی وب‌سایت شرکت به صورت قرارداد پروژه‌ای"
        ]
      }
    },
    social: {
      github: "گیت‌هاب",
      linkedin: "لینکدین",
      email: "ایمیل"
    },
    ui: {
      scrollToExplore: "برای مشاهده اسکرول کنید",
      teachingNote: "تجربه تدریس جدا از تجربه کاری حرفه‌ای است",
      loading: "در حال کامپایل JIT",
      switchLanguage: "English"
    }
  }
}; 
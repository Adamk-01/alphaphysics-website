/**
 * Article content.
 *
 * Guidelines for new posts:
 * - `title` is what appears in the <title> tag and on cards. Keep it under ~45 characters
 *   so that " | ALPHAPHYSICS" does not push it past Google's truncation point.
 * - `h1` is the on-page heading and can be longer and more descriptive.
 * - `p` is paragraph text; separate paragraphs with a blank line. Do not paste HTML.
 * - Never state a date, fee or cut-off as fact unless it comes from an official
 *   announcement, and link readers to the official source when you do.
 */

export type Section = { h: string; p: string };

export type Post = {
  slug: string;
  title: string;
  h1: string;
  excerpt: string;
  /** ISO date of first publication. */
  date: string;
  /** ISO date of the last substantive edit. Shown on the page. */
  updated: string;
  tag: "JAMB" | "Admission" | "O'Level" | "Planning";
  readingMinutes: number;
  /** Related service page slug, for the in-article call to action. */
  service?: string;
  sections: Section[];
};

export const posts: Post[] = [
  {
    slug: "how-to-gain-admission-in-nigeria",
    title: "How to Gain Admission in Nigeria",
    h1: "How to Gain Admission in Nigeria: The Honest Guide",
    excerpt:
      "The three things that actually decide admission in Nigeria, in order of importance, and what does not matter as much as people think.",
    date: "2026-09-28",
    updated: "2026-10-23",
    tag: "Admission",
    readingMinutes: 8,
    service: "admission-processing",
    sections: [
      {
        h: "Start with the uncomfortable truth",
        p: `Nobody can sell you admission. Not a consultant, not an agent, not somebody who claims to know a person in the admissions office. Admission in Nigeria is decided by institutions through JAMB's Central Admissions Processing System (CAPS), and every offer is visible on your own CAPS profile. Anyone who asks you to pay for a "slot" is either describing something that already happens automatically when you qualify, or taking money for nothing.

That is not a reason to do nothing. It is a reason to spend your effort on the three things that genuinely move your chances.`,
      },
      {
        h: "Lever 1: your UTME score",
        p: `The UTME score is the first filter. Institutions set a minimum, and departments often set a higher one for competitive courses. A higher score widens the number of courses and schools that are realistically open to you.

The score is decided long before results come out, which is frustrating but also useful: it is the one part of this process you fully control. Past questions, the JAMB syllabus and consistent practice are still the most reliable route to a good score. There is no shortcut that survives contact with the exam.`,
      },
      {
        h: "Lever 2: subject combination",
        p: `This is where strong candidates lose offers every year. If you registered for the wrong four subjects, a high score will not rescue you. Medicine and Surgery expects English, Biology, Chemistry and Physics. Law expects English, Literature in English and two Arts or Social Science subjects. Engineering expects English, Mathematics, Physics and Chemistry.

Before registration closes, open the JAMB brochure for your chosen course and read the combination line by line. If you have already registered with the wrong subjects, a change of course or subject correction may still be possible depending on the stage of the cycle — ask before assuming it is too late, and ask before assuming it is possible.`,
      },
      {
        h: "Lever 3: O'Level results on CAPS",
        p: `You can have a 300 score and a perfect subject combination and still not be offered admission, because your O'Level results were never uploaded to CAPS. The admission system needs graded results attached to your profile in order to consider you.

The usual pattern is a candidate with an awaiting WAEC or NECO result who forgets to upload after the result is released. Upload is a short task, but it depends on having the right result details and a working JAMB profile. Do it as soon as your result is out, then log back in and confirm you can see it. Do not rely on a screenshot somebody sent you.`,
      },
      {
        h: "What the school's own screening adds",
        p: `Many institutions run a Post-UTME screening exercise: sometimes a CBT test, sometimes a physical exam, and increasingly a straightforward online screening of your UTME and O'Level results. Missing the screening window disqualifies you at that school regardless of your score, and the windows are short and announced on the institution's own website and social pages.

Follow the institution you actually applied to, not a general admission blog. Requirements, dates and fees differ from school to school, and they change from year to year.`,
      },
      {
        h: "What consultancies can and cannot do",
        p: `A legitimate consultancy can help you read requirements correctly, prepare and submit applications on time, fix profile mismatches, upload results to CAPS, print the documents you need, and tell you honestly when a course is out of reach.

What no consultancy can do is decide an admission, influence a merit list, or guarantee an outcome. If a service promises a guaranteed offer, or quotes a price for admission itself rather than for a service, treat it as a warning sign rather than an opportunity.`,
      },
      {
        h: "If you are not admitted this cycle",
        p: `Not being admitted is not the end of the road. Candidates commonly change institution or course to somewhere their score is competitive, apply through a polytechnic or college of education, take a Direct Entry route after a diploma or JUPEB/IJMB programme, or sit the UTME again with better preparation.

What matters is that you are making that decision with real numbers in front of you rather than rumour. Check the indicative cut-off for your course, compare it with your score, confirm your subject combination, and then decide.`,
      },
    ],
  },
  {
    slug: "how-university-admission-works-in-nigeria",
    title: "How University Admission Works in Nigeria",
    h1: "How University Admission Works in Nigeria",
    excerpt:
      "A plain-English walk through the pipeline; UTME, screening, CAPS, merit lists and what happens after an offer.",
    date: "2026-09-28",
    updated: "2026-10-23",
    tag: "Admission",
    readingMinutes: 7,
    service: "admission-processing",
    sections: [
      {
        h: "The pipeline, in order",
        p: `Admission in Nigeria generally follows the same sequence: register for JAMB and sit the UTME, choose an institution and course, meet the O'Level requirements for that course, take part in the institution's screening if it runs one, and then wait for admission through CAPS.

Each stage has its own deadline, and a missed deadline usually cannot be recovered. That is why the process rewards people who know the calendar rather than people who react to announcements.`,
      },
      {
        h: "Step 1: UTME registration and the exam",
        p: `JAMB conducts the Unified Tertiary Matriculation Examination, a computer-based test scored out of 400 across four subjects. You register with a profile code, pay the registration fee at an approved channel, and complete biometric capture at an accredited centre.

During registration you choose your institution and course. That choice is not final; it can usually be changed later, sometimes for a fee, depending on the stage of the cycle.`,
      },
      {
        h: "Step 2: O'Level requirements",
        p: `Most degree programmes ask for at least five credit passes including English Language and, for many courses, Mathematics, obtained in not more than two sittings. Competitive courses raise the bar: some expect specific grades in specific subjects, and a few expect a single sitting.

Your O'Level result is not just a document you present at clearance. It is part of the data the institution and CAPS use when considering you. If it is not uploaded, it effectively does not exist as far as the system is concerned.`,
      },
      {
        h: "Step 3: Post-UTME screening",
        p: `Most universities run a screening exercise after the UTME results are released. It may be a computer-based test, a written examination, or an online screening where you upload documents and the institution scores your combination of UTME and O'Level results.

Screening windows are short. The institution announces them on its own website, and applicants who rely on second-hand information frequently miss them. Register early, keep your documents scanned and ready, and check the school's portal directly.`,
      },
      {
        h: "Step 4: CAPS and the admission offer",
        p: `CAPS, the Central Admissions Processing System, is where offers are actually made. If an institution offers you admission, it appears on your CAPS profile and you are expected to accept or reject it there. An offer you do not accept may lapse.

Because CAPS is central, anything that stops your profile being complete stops the offer: an unuploaded O'Level result, a name mismatch, a wrong date of birth, an unverified programme choice. Fix those before the admission season, not during it.`,
      },
      {
        h: "Step 5: Merit, catchment and quotas",
        p: `Institutions do not simply admit the highest scores across the country. They balance merit against catchment area, educationally less developed states and other policy considerations set by their own senate and by national policy. This is why two candidates with the same score can get different outcomes at the same school.

You cannot control this. What you can control is choosing a course and institution where your score is genuinely competitive, rather than one where you would be at the very bottom of the pool.`,
      },
      {
        h: "After an offer",
        p: `Accepting an offer on CAPS is not the end. You will usually need to pay acceptance and school fees within a window, then attend physical or online clearance with original documents: your O'Level result, birth certificate, state of origin or local government certificate, UTME result, admission letter and passport photographs.

Keep originals and at least two photocopies of everything, in one folder. Clearance is where small document problems, like a misspelt name on a birth certificate, become urgent.`,
      },
    ],
  },
  {
    slug: "understanding-jamb-subject-combinations",
    title: "JAMB Subject Combinations Explained",
    h1: "Understanding JAMB Subject Combinations",
    excerpt:
      "Why the four subjects you register for can rule you out of a course regardless of your score, and how to check yours properly.",
    date: "2026-09-28",
    updated: "2026-10-23",
    tag: "JAMB",
    readingMinutes: 6,
    service: "jamb-services",
    sections: [
      {
        h: "Choose the course first, then the subjects",
        p: `The common mistake is the reverse: candidates pick subjects they are comfortable with, then look for a course that accepts them. That works occasionally and fails often, because the subject combination is a hard requirement, not a preference.

Decide the course, then check the subjects that course expects, then register for exactly those. If you are torn between two courses, choose subjects that satisfy both.`,
      },
      {
        h: "The four-subject structure",
        p: `UTME is four subjects: English Language is compulsory for everyone, and you add three others relevant to your course. The total is scored out of 400, so each subject carries 100 marks. There is no fifth subject and no optional extra.

That structure is why the choice matters so much. You have three slots, and each one narrows or widens what you can study.`,
      },
      {
        h: "Common combinations by field",
        p: `Science and medical courses generally expect English, Biology, Chemistry and Physics for Medicine, Pharmacy, Nursing and related programmes, or English, Mathematics, Physics and Chemistry for Engineering, Computer Science and the physical sciences.

Social and management sciences usually expect English, Mathematics, Economics plus one other subject for Accounting, Business Administration and Economics. Arts and humanities programmes typically expect English, Literature in English and two Arts or Social Science subjects for Law, Mass Communication and Languages.

These are the common patterns, not the full list. Institutions differ, and the brochure is what counts.`,
      },
      {
        h: "Scenarios that quietly disqualify people",
        p: `A candidate registers English, Mathematics, Economics and Government for Accountancy and is surprised at screening. A candidate aiming at Law registers without Literature in English. A candidate for Nursing registers Biology and Chemistry but no Physics, or registers Agricultural Science in place of Biology.

In each case the UTME score may be excellent, and it will not matter. This is the single most expensive avoidable error in the process.`,
      },
      {
        h: "How to verify your combination properly",
        p: `Open the JAMB brochure for the current cycle, find the course, and read the requirement line for the institution you are applying to. Requirements can differ between institutions, and they can change between cycles.

If you are already registered, check what you actually selected on your profile rather than what you remember selecting. If it is wrong, ask about a change of course or subject correction before the window closes, and confirm whether it is still possible for your cycle.`,
      },
      {
        h: "If your combination is already wrong",
        p: `Do not wait for the admission list to find out. Options usually include changing to a course that your current combination satisfies, or correcting the registration where the cycle still allows it.

Which option is better depends on your score, the course you actually want and how far into the cycle you are. That is exactly the kind of question worth asking early, while there is still time to act on the answer.`,
      },
    ],
  },
  {
    slug: "understanding-olevel-requirements-for-university-admission",
    title: "O'Level Requirements for Admission",
    h1: "Understanding O'Level Requirements for University Admission",
    excerpt:
      "Five credits, two sittings, English and Mathematics: what institutions actually check, and the mistakes that cost offers.",
    date: "2026-09-28",
    updated: "2026-10-23",
    tag: "O'Level",
    readingMinutes: 6,
    service: "olevel-exam-services",
    sections: [
      {
        h: "The baseline: five credits",
        p: `Most degree programmes require at least five credit passes, including English Language, obtained in not more than two sittings. Many courses also require Mathematics, and science and medical courses usually require specific science subjects at credit level.

Those five credits are not a formality. They are a threshold the institution checks before your UTME score is even weighed.`,
      },
      {
        h: "One sitting or two",
        p: `Two sittings is the normal allowance at most institutions. Some competitive courses, and some institutions, require all five credits in a single sitting, and a few will accept a combination only if the subjects are split in particular ways.

If you have results from two different exams, WAEC and NECO for example, check that your target institution accepts a combination before you build your plan around it.`,
      },
      {
        h: "Awaiting result",
        p: `Registering with an awaiting result is common and usually allowed, but it creates a deadline you must not miss: the result has to be uploaded to CAPS once it is released.

Every cycle, candidates who sat the exam and passed cleanly still miss out because they uploaded late or uploaded the wrong document and never confirmed it. Treat the upload as part of the exam, not as an afterthought.`,
      },
      {
        h: "The subject matching trap",
        p: `Having five credits is not enough if the subjects do not match the course. Nursing wants Biology, Chemistry and Physics. Engineering wants Mathematics, Physics and Chemistry. Accountancy wants Mathematics and Economics.

A candidate with five strong credits in the wrong subjects is in a worse position than they expect. Check the course requirement line in the brochure, then check your result against it subject by subject.`,
      },
      {
        h: "Documents that must agree with each other",
        p: `Your name and date of birth should be consistent across your O'Level result, birth certificate, NIN record and JAMB profile. Small differences, an omitted middle name, a different spelling, a date typed wrong years ago, cause real problems at clearance.

If something does not agree, correcting it is far easier before the admission rush than during it.`,
      },
      {
        h: "What to do if you are short of credits",
        p: `Options include resitting the subjects you need in the next WAEC or NECO window, using a different exam body where the institution accepts it, or choosing a course and institution whose requirements you already meet.

If you need to resit, plan for it early. It affects which cycle you can realistically enter, and pretending otherwise usually costs a year.`,
      },
    ],
  },
  {
    slug: "what-is-jamb-caps-and-why-your-olevel-upload-matters",
    title: "JAMB CAPS and O'Level Upload Explained",
    h1: "JAMB CAPS: What It Is and Why Your O'Level Upload Matters",
    excerpt:
      "CAPS is where admission actually happens. Here is what it shows, what breaks, and how to confirm your profile is complete.",
    date: "2026-10-23",
    updated: "2026-10-23",
    tag: "JAMB",
    readingMinutes: 5,
    service: "jamb-services",
    sections: [
      {
        h: "What CAPS is",
        p: `CAPS stands for the Central Admissions Processing System. It is JAMB's platform for managing admission: institutions propose candidates, offers appear on the candidate's profile, and the candidate accepts or rejects them there.

If you have ever wondered how an admission "shows", that is how. It is not a text message and it is not a name on a printed list at the school gate.`,
      },
      {
        h: "Why the O'Level upload is the weak link",
        p: `CAPS attaches your O'Level grades to your profile so institutions can assess you against course requirements. If those grades are missing, your profile is incomplete, and an incomplete profile is not considered.

The upload is a short task that depends on correct result details. It is also the step most often postponed until it is too late.`,
      },
      {
        h: "Signs your profile is not complete",
        p: `Log in and look at your own profile rather than trusting a summary from someone else. Warning signs include no O'Level section at all, grades that do not match your result, a course or institution you did not choose, and personal details that do not match your NIN.

If any of those are wrong, fix them before the admission window rather than during it.`,
      },
      {
        h: "The name and date-of-birth mismatch",
        p: `A mismatch between your JAMB profile, your NIN record and your O'Level certificate is one of the most common reasons a profile stalls. Changing a name or date of birth on the NIMC record is a separate process with its own timeline.

Start that correction as early as possible. It cannot be fixed by explaining the situation to an admissions officer at clearance.`,
      },
      {
        h: "Accepting an offer",
        p: `When an offer appears on CAPS, accept it there. An offer left unaccepted can lapse while you are waiting for a phone call that is not coming.

After accepting, follow the institution's own instructions on acceptance fees and clearance documents. The CAPS acceptance and the school's clearance are two different steps and both are required.`,
      },
    ],
  },
  {
    slug: "post-utme-screening-explained",
    title: "Post-UTME Screening: What to Expect",
    h1: "Post-UTME Screening: What to Expect and How to Prepare",
    excerpt:
      "CBT test, written exam or online document screening: how institutions decide, and the deadlines that catch people out.",
    date: "2026-10-23",
    updated: "2026-10-23",
    tag: "Admission",
    readingMinutes: 5,
    service: "admission-processing",
    sections: [
      {
        h: "Three formats, one purpose",
        p: `Post-UTME screening takes different shapes at different institutions. Some run a computer-based test. Some run a written examination on campus. Many now run an online screening where you upload your O'Level and UTME details and the institution scores them against the course requirements.

The purpose is the same: to rank applicants for a limited number of places. The format matters because it tells you what to prepare, and the school's own announcement is the only reliable source for that.`,
      },
      {
        h: "Registering for screening",
        p: `Screening registration usually requires your JAMB registration number, a recent passport photograph, your O'Level details where available, and payment of the institution's screening fee through its approved channel.

Screening windows are short, sometimes a week or two. Follow the school's official website and verified social accounts directly. Second-hand announcements are the reason people arrive after the deadline.`,
      },
      {
        h: "What the screening score is made of",
        p: `Where there is no exam, institutions commonly combine UTME and O'Level results into a composite score. Where there is an exam, the screening result is weighted with the UTME score.

This is why a weak O'Level profile cannot be fixed by screening performance alone in most schools. Both parts are doing work.`,
      },
      {
        h: "Documents to have scanned before you start",
        p: `Prepare digital copies in advance: UTME result slip, O'Level result or statement of result, birth certificate or declaration of age, state of origin or local government certificate, and a passport photograph that meets the stated dimensions.

Formatting requirements, file size limits and naming rules catch people out at the upload step. Doing this an hour before the deadline is how applications fail.`,
      },
      {
        h: "After screening",
        p: `Screening is not admission. After it closes, the institution compiles its list and offers appear on CAPS. Watch your CAPS profile and the school's portal, and keep your phone reachable in case the school contacts you.

If nothing appears by the time other candidates are receiving offers, ask the school's admissions office directly rather than relying on rumour in a group chat.`,
      },
    ],
  },
  {
    slug: "jamb-change-of-course-and-institution-guide",
    title: "Change of Course or Institution in JAMB",
    h1: "Change of Course and Institution: When It Helps and When It Does Not",
    excerpt:
      "The correction that rescues an application, the cases where it wastes money, and how to check before you pay.",
    date: "2026-10-23",
    updated: "2026-10-23",
    tag: "JAMB",
    readingMinutes: 5,
    service: "jamb-services",
    sections: [
      {
        h: "What the change actually does",
        p: `A change of course or institution updates the choice attached to your JAMB profile so that a different school or programme considers you. It does not change your UTME score, and it does not change your O'Level results.

That distinction explains most of the disappointment around this service. Moving to a course your subject combination does not satisfy simply relocates the problem.`,
      },
      {
        h: "When it is the right move",
        p: `It helps when your score is genuinely competitive for the new course, your subject combination satisfies the new requirements, and the new institution is still accepting applicants for that programme.

It also helps when you picked a course under pressure or on somebody else's advice and now understand the requirements properly.`,
      },
      {
        h: "When it is a waste of money",
        p: `Changing into another oversubscribed course, changing without checking the subject combination, and changing after the institution's admission list has closed are the three common ways people pay for a correction that cannot help them.

A short conversation before the transaction is cheaper than a correction that leaves you in the same position.`,
      },
      {
        h: "Checking first: the three questions",
        p: `Ask whether your four UTME subjects satisfy the new course, whether your score is above the indicative cut-off for that course at that school, and whether the change window is still open for your cycle.

If the answer to any of those is no, the change will not produce an admission. That is worth knowing before you spend anything.`,
      },
      {
        h: "Timing matters more than people expect",
        p: `Corrections compete with admission processing for portal availability and institutional deadlines. A correction made early in the cycle has far more room to matter than the same correction made while lists are being compiled.

If you already know the choice was wrong, do not wait for the result you are dreading.`,
      },
    ],
  },
  {
    slug: "2027-jamb-what-prospective-candidates-should-know",
    title: "2027 JAMB: What Candidates Should Know",
    h1: "2027 JAMB: What Prospective Candidates Should Know",
    excerpt: "A simple starting point for anyone planning to sit the 2027 UTME, and the four things to settle before registration opens.",
    date: "2026-09-28",
    updated: "2026-10-23",
    tag: "JAMB",
    readingMinutes: 6,
    service: "jamb-services",
    sections: [
      {
        h: "Start before the crowd does",
        p: `Every year the pattern repeats: registration opens, the accredited centres fill up, the portal slows down, and candidates who started planning in the last week make expensive decisions under pressure.

Starting early is not about studying harder in September. It is about settling the four things that decide whether your registration is straightforward: your course, your subject combination, your O'Level position and your NIN details.`,
      },
      {
        h: "What JAMB and the UTME actually are",
        p: `The Joint Admissions and Matriculation Board conducts the Unified Tertiary Matriculation Examination, the computer-based entrance test used by universities, polytechnics and colleges of education in Nigeria. It is scored out of 400 across four subjects, with English Language compulsory.

JAMB also runs the Central Admissions Processing System, CAPS, through which institutions offer admission. So JAMB appears twice in your journey: once as the exam body and once as the platform where your admission is confirmed.`,
      },
      {
        h: "The four things to settle first",
        p: `First, the course you want, because the course determines your subjects. Second, your subject combination, checked against the current brochure for your chosen course and institution. Third, your O'Level position, including whether you have five credits and whether you are sitting with an awaiting result. Fourth, your NIN details, because a name or date-of-birth mismatch between your NIN record and your registration will stop you at the profile code stage.

None of these requires money. All of them require attention before registration opens.`,
      },
      {
        h: "Rely on official announcements, not forwards",
        p: `Dates, fees and policies change every cycle, and the volume of confidently wrong information in group chats is remarkable. Confirm them on JAMB's official website and verified channels before you act on them.

Our own articles deliberately avoid publishing specific dates and fees for that reason. When something is announced, we share the official announcement rather than a paraphrase of it.`,
      },
      {
        h: "What preparing early looks like in practice",
        p: `Read the syllabus for your four subjects. Get past questions and work through them by topic rather than in one panicked block. Practise on a computer, because the CBT interface is part of the challenge. Keep your documents, once you have them, in one folder.

If you do those four things between now and registration, you will be ahead of most candidates before the exam even matters.`,
      },
    ],
  },
  {
    slug: "how-to-prepare-for-the-2027-utme",
    title: "How to Prepare for the 2027 UTME",
    h1: "How to Prepare for the 2027 UTME",
    excerpt: "A practical preparation routine that survives a school timetable, plus the CBT habits that cost people marks.",
    date: "2026-09-28",
    updated: "2026-10-23",
    tag: "JAMB",
    readingMinutes: 7,
    service: "one-on-one-consultation",
    sections: [
      {
        h: "Know exactly what you are being tested on",
        p: `The JAMB syllabus is the specification for the exam. It lists the topics per subject and the depth expected. Candidates who study from a textbook alone often spend weeks on material that is not examined and skip material that is.

Download the syllabus for your four subjects and use it as a checklist. Tick topics off as you genuinely understand them, not as you finish reading about them.`,
      },
      {
        h: "Build a timetable you will actually keep",
        p: `A realistic timetable beats an ambitious one. Two focused hours on a school night, if they actually happen, beat six hours that collapse in the first week.

Give each subject a fixed slot in the week, put the hardest subject where your energy is highest, and protect one day for review rather than new material. Review is where the retention happens.`,
      },
      {
        h: "Use past questions properly",
        p: `Past questions are not a test to be saved for the end. They are a diagnostic. Work through them topic by topic as you study, mark what you get wrong, and go back to the topic rather than memorising the answer.

Save at least two full papers for timed practice under exam conditions, so you learn your own pacing rather than discovering it on the day.`,
      },
      {
        h: "Practise on a computer",
        p: `The UTME is computer-based. Reading on paper for months and then meeting a CBT interface for the first time is a genuine disadvantage: navigation, on-screen calculator use and scrolling long passages all cost time.

Any CBT practice software that mimics the format is worth the hour. Do at least three full sessions on a screen before the exam.`,
      },
      {
        h: "The subjects you should not neglect",
        p: `English Language carries the same 100 marks as each other subject and is compulsory, yet it is the one candidates prepare for least. Comprehension speed and use of English questions reward practice.

If your course requires Mathematics and you have been avoiding it, start now. It is the subject most likely to pull an otherwise strong total down.`,
      },
      {
        h: "Two weeks before the exam",
        p: `Stop taking on new topics. Revise your error list, do timed papers, sleep properly and confirm your exam centre and date from your own JAMB profile rather than from a message.

On the day, arrive early with your registration slip and the identification the centre asks for. Fatigue and lateness fail more candidates than difficult questions do.`,
      },
    ],
  },
  {
    slug: "2027-aspirants-admission-preparation-checklist",
    title: "2027 Aspirants: Admission Checklist",
    h1: "2027 Aspirants: Your Admission Preparation Checklist",
    excerpt: "The documents, decisions and deadlines to sort out now, in the order they actually become urgent.",
    date: "2026-09-28",
    updated: "2026-10-23",
    tag: "Planning",
    readingMinutes: 5,
    service: "documents-certificates",
    sections: [
      {
        h: "Documents: build the folder now",
        p: `Get a physical folder and a digital one, and start collecting: birth certificate or declaration of age, state of origin or local government certificate, O'Level results or statements of result, passport photographs, and any school testimonial you already hold.

Scanned copies should be clear, correctly oriented and within the file sizes the portals ask for. Doing this once, calmly, saves you from doing it at midnight before a deadline.`,
      },
      {
        h: "Decisions: course, institution, backup",
        p: `Write down your first-choice course and institution, then write down one realistic alternative whose requirements you already meet. Most candidates have a first choice and nothing else, which turns a disappointing result into a lost year.

Check the subject combination and indicative cut-off for both before you register.`,
      },
      {
        h: "Your identity details must agree",
        p: `The name and date of birth on your NIN, birth certificate, O'Level result and JAMB profile should match. Where they do not, corrections take time and are much easier before the admission season than during it.

Check this early. It is the least glamorous item on the list and the one that most often derails an otherwise fine application.`,
      },
      {
        h: "Money: know the real costs",
        p: `Registration fees, screening fees, acceptance fees and school fees are separate, and each one is announced by a different body. Budget for them separately rather than assuming one payment covers everything.

Confirm every fee on the official portal or the institution's own website. A fee quoted only in a chat message is not a fee you should pay.`,
      },
      {
        h: "Timeline: the four dates that matter",
        p: `JAMB registration window, UTME exam date, your institution's screening window, and the CAPS offer period. Put all four in your phone calendar with reminders a week ahead.

Everything else in this process is flexible. Those four are not.`,
      },
    ],
  },
  {
    slug: "what-every-2027-aspirant-should-do-before-admission-season",
    title: "Before Admission Season: 2027 Checklist",
    h1: "What Every 2027 Aspirant Should Do Before Admission Season",
    excerpt: "Six things worth doing in the quiet months, when the cost of getting them wrong is low.",
    date: "2026-09-28",
    updated: "2026-10-23",
    tag: "Planning",
    readingMinutes: 5,
    service: "one-on-one-consultation",
    sections: [
      {
        h: "Use the quiet months deliberately",
        p: `Between cycles, admission information slows down and attention moves elsewhere. That quiet period is the cheapest time to fix the things that are expensive to fix later: document mismatches, a wrong course choice, weak preparation.

Candidates who use it arrive at registration with nothing left to resolve.`,
      },
      {
        h: "Research courses against your actual results",
        p: `Take your current O'Level results and look up the requirements for three courses you are considering. You may find that one is already out of reach and another is comfortably open to you.

That is far better information to have now than after a rejection.`,
      },
      {
        h: "Fix your identity documents",
        p: `Compare your name and date of birth across your NIN slip, birth certificate and any O'Level result you hold. Where they differ, start the correction process.

NIN records are corrected by NIMC itself, at its offices and enrolment centres — the correction is not something a consultant can do for you, and NIMC corrections are not instant. Beginning early is the whole strategy.`,
      },
      {
        h: "Decide how you will prepare, not just that you will",
        p: `"I will study hard" is not a plan. A plan names the subjects, the days and the materials. If you are resitting a subject, register for the right exam window now.

If your school timetable leaves you no room, a structured weekend routine is better than an ambitious plan you abandon in three weeks.`,
      },
      {
        h: "Ask your questions while the answer is still useful",
        p: `The questions worth asking are specific: does this course accept my combination, is my score competitive for this institution, does my result need a correction before I register.

Ask them while there is time to act. A conversation in September is worth more than the same conversation in March.`,
      },
    ],
  },
  {
    slug: "admission-cut-off-marks-explained",
    title: "Cut-Off Marks: What They Really Mean",
    h1: "Admission Cut-Off Marks: What They Really Mean",
    excerpt: "Why the number nobody can announce in advance is treated as if it were fixed, and how to use it sensibly.",
    date: "2026-10-23",
    updated: "2026-10-23",
    tag: "Admission",
    readingMinutes: 5,
    service: "admission-processing",
    sections: [
      {
        h: "A cut-off is a result, not a starting rule",
        p: `People talk about cut-off marks as if institutions decide them in advance and then admit everyone above the line. In practice the number usually emerges from the admission exercise: how many places exist, how many candidates applied, and how well those candidates scored.

That is why last year's figure is a guide to this year's, and never a guarantee of it.`,
      },
      {
        h: "The two numbers people confuse",
        p: `Institutions publish a general minimum, which is a floor for the school across most programmes. Departments then set their own, usually higher, requirement for competitive courses such as Medicine, Law, Pharmacy and Nursing.

A candidate who clears the general minimum but sits well below the departmental figure should not read the general number as good news. Our cut-off checker shows both so the difference is visible.`,
      },
      {
        h: "Why identical scores get different answers",
        p: `Two candidates with the same UTME score can receive different outcomes at the same institution because admission also weighs O'Level grades, subject combination, catchment area, educationally less developed state considerations and the number of applicants for that specific programme.

This is not unfairness that a consultant can fix. It is why choosing a course where your profile is genuinely competitive matters more than chasing the most popular programme.`,
      },
      {
        h: "How to use an indicative cut-off",
        p: `Treat it as a sanity check. If your score is far above it, the course is plausibly open to you and your attention should move to your subject combination and your CAPS upload. If your score is far below, plan an alternative now rather than after the lists are published.

If you are close to the line, the deciding factors will be your O'Level grades and your paperwork. That is where effort still pays.`,
      },
      {
        h: "Where to confirm the real number",
        p: `The current cut-off is published by the institution itself, and JAMB publishes the national minimum for the cycle. Check both, and check the specific department for competitive courses.

Any figure from a blog, a group chat or a consultancy that cannot point you to an official source should be treated as a rumour, including ours: we label our numbers indicative for exactly that reason.`,
      },
    ],
  },
];

import getLatestResults from "@/lib/getLatestResults";
import mergedResults from "@/lib/mergedResults";
import Image from "next/image";

export const metadata = {
  title: "View Result | NUBNGPI",
};

export default async function Home() {
  const storedSubjects = {
    21011: "Engineering Drawing",
    25711: "Bangla-I",
    25712: "English-I",
    25911: "Mathematics-I",
    25912: "Physics-I",
    28511: "Computer Office Application",
    26711: "Basic Electricity",

    25721: "Bangla-II",
    25722: "English-II",
    25812: "Physical Education & Life Skills Development",
    25913: "Chemistry",
    25921: "Mathematics-II",
    28521: "Python Programming",
    28522: "Computer Graphics Design-I",
    26811: "Basic Electronics",

    25811: "Social Science",
    25922: "Physics-II",
    25931: "Mathematics-III",
    28531: "Application Development Using Python",
    28532: "Computer Graphics Design-II",
    28533: "IT Support Services",
    26831: "Digital Electronics-I",

    25831: "Business Communication",
    28541: "Java Programming",
    28542: "Data Structure & Algorithm",
    28543: "Computer Peripherals & Interfacing",
    28544: "Web Design & Development-I",
    26841: "Digital Electronics-II",
    29041: "Environmental Studies",

    25841: "Accounting",
    28551: "Application Development Using Java",
    28552: "Web Design & Development-II",
    28553: "Computer Architecture & Microprocessor",
    28554: "Data Communication",
    28555: "Operating System",
    28556: "Project Work-I",

    25851: "Principles of Marketing",
    25852: "Industrial Management",
    28561: "Database Management System",
    28562: "Computer Networking",
    28563: "Sensor & IoT System",
    28564: "Microcontroller Based System Design & Development",
    28565: "Surveillance Security System",
    28566: "Web Development Project",

    25853: "Innovation & Entrepreneurship",
    28571: "Digital Marketing Technique",
    28572: "Network Administration & Services",
    28573: "Cyber Security & Ethics",
    28574: "Apps Development Project",
    28575: "Multimedia & Animation",
    28576: "Project Work-II",
  };

  const latestResults = await getLatestResults();
  const results = await mergedResults();
  // console.log(latestResults);
  // console.log();

  const getTop3 = () => {
    return (
      [...latestResults]
        // 1. Filter out students who don't have a GPA yet
        .filter(
          (res) =>
            res.latestGPA !== null &&
            res.latestGPA !== undefined &&
            res.latestGPA !== "ref",
        )
        // 2. Sort High to Low
        .sort((a, b) => b.latestGPA - a.latestGPA)
        // 3. Take the top 3 (if fewer than 3 exist, it will just take what's available)
        .slice(0, 3)
    );
  };

  const top3 = getTop3();
  // console.log(top3);
  // console.log(latestResults);

  return (
    <div className="max-w-7xl mx-auto">
      {/* header/marquee title */}
      <section className="text-xl md:text-4xl font-bold text-center space-y-5 mb-20">
        <marquee behavior="" direction="">
          <h1>Nasir Uddin Biswas Non Govt. Polytechnic Institute</h1>
        </marquee>
        <h2>27145</h2>
      </section>

      {/* toppers section */}
      <section>
        <h1 className="text-4xl font-bold text-center mb-10">Toppers</h1>
        <div className="flex justify-center items-center gap-4">
          {top3.map((student) => (
            <div
              className="border rounded-xl p-4 mb-10 text-center space-y-4 bg-white/10 backdrop-blur-md border-white/10"
              key={student._id}
            >
              <Image
                height={20}
                width={20}
                alt="student profile photo"
                src={`/nasir-logo.png`}
                className="mx-auto object-cover rounded-full h-20 w-20"
              />
              <p className="font-bold">{student.studentName}</p>
              <p>Roll: {student.roll}</p>
              <p>Registration: {student.registration}</p>
              <p>GPA {student.latestGPA}</p>
            </div>
          ))}
        </div>
      </section>

      {/* map latest results section */}
      <section>
        <h1 className="text-4xl font-bold">
          Latest{" "}
          <span>
            {latestResults[0].semester}
            <sup>th</sup>{" "}
          </span>
          <span className="text-green-500">({latestResults.length})</span>{" "}
        </h1>
        <span className="text-sm">
          Published - {latestResults[0].publishedDate}
        </span>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-20 mt-10">
          {latestResults.map((result) => (
            <div key={result._id} className="border p-4 rounded-xl">
              <Image
                height={20}
                width={20}
                alt="student profile photo"
                src={`/nasir-logo.png`}
                className="object-cover rounded-full h-12 w-12"
              />
              <p>{result.studentName}</p>
              <p>Roll - {result.roll}</p>
              <p>GPA - {`${result.latestGPA === "ref"? "REFFERED" : result.latestGPA}`}</p>
              <p>Status - {result.status}</p>

              {/* display subject name by code */}

              <p className="mt-4">
                Refrred Subjects -{" "}
                <span className="text-red-300">
                  ({result.referredSubjects.length})
                </span>{" "}
              </p>
              {/* {result.referredSubjects.map((subject, index) => {
                // 1. Extract only the digits (e.g., "26841") using Regex
                const subjectCode = subject.match(/\d+/)?.[0];

                // 2. Lookup the name in your stored state/object
                const subjectName =
                  storedSubjects[subjectCode] || "Unknown Subject";

                return (
                  <div key={index} className="flex gap-2 text-sm">
                    <span className="font-bold">{subject}</span>
                    <span>{subjectName}</span>
                  </div>
                );
              })} */}
            </div>
          ))}
        </div>
      </section>

      {/* <section className="mt-40">
        <h1 className="text-4xl font-bold">
          Latest{" "}
          <span>
            {latestResults[0].semester}
            <sup>th</sup>{" "}
          </span>
          <span className="text-green-500">({latestResults.length})</span>{" "}
        </h1>
        <span className="text-sm">
          Published - {latestResults[0].publishedDate}
        </span>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-20 gap-4">
          {latestResults.map((result) => (
            <div key={result._id}>
              <Image
                height={20}
                width={20}
                alt="student profile photo"
                src={`/nasir-logo.png`}
                className="object-cover rounded-full h-12 w-12"
              />

              <p>{result.roll}</p>
              <p>{result.studentName}</p>
              <p>{result.latestGpa}</p>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}

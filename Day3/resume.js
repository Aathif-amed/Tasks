let resume = {
  //nested ojects
  personal_details: {
    name: "Aathif",
    age: 21,
    qualification: "B.E",
    email: "aathifamed@gmail.com",
    phoneNo: 9876543210,
  },
  technical_skills: {
    programming_languages_known: "Java, JavaScript",
    web_technologies: "HTML, CSS",
  },
  education: {
    B_E: {
      specialization: "Computer Science and Engineering",
      Aggregate: 80.7,
    },
    HSC: {
      specialization: "CS",
      Aggregate: 87.25,
    },
    SSLC: {
      specialization: "General",
      Aggregate: 92.8,
    },
  },
};
//to print B.E details in Education .
console.log(resume.education.B_E);

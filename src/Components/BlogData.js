import disease from "../images/virus.jfif"
import agric from "../images/agric.jfif"
import sport from "../images/sport.jfif"
import terror from "../images/terror.jpeg"
import education from "../images/cvid.jfif"
import economics from "../images/economy.jfif"




const blogs = [
  {
    id:1,
    title: "Revamping Nigeria’s Agricultural Sector",
    description: "Explore the challenges and potential solutions in Nigeria's agricultural sector, including the impact of food inflation, insecurity in food-producing states, and the need for mechanized farming.",
    imageUrl: agric,
    link: "/blog/agriculture",
    purpose: "Agriculture",
  },
  {
    id:2,
    title: "Nigeria’s Economic Outlook Amid Rising Inflation",
    description: "Analyze the current economic situation in Nigeria, with a focus on inflation rates, the impact on the average Nigerian, and potential government interventions.",
    imageUrl: economics,
    link: "/blog/economics",
    purpose: "Economics",
  },
  {
    id:3,
    title: "The State of Nigerian Football: Challenges and Opportunities",
    description: "Offer an overview of the current state of football in Nigeria, including recent successes, ongoing challenges, and the future of the sport in the country.",
    imageUrl:sport,
    link: "/blog/sports",
    purpose: "Sports",
  },
  {
    id:4,
    title: "Addressing Security Challenges in Nigeria",
    description: "Discuss the ongoing security issues in Nigeria, particularly in relation to terrorism and insurgency in the northern regions.",
    imageUrl:terror,
    link: "/blog/terrorism",
    purpose: "Terrorism",
  },
  {
    id:5,
    title: "The Future of Education in Nigeria Post-COVID-19",
    description: "Explore the changes and challenges in Nigeria's education sector following the COVID-19 pandemic, including remote learning and educational reforms.",
    imageUrl: education,
    link: "/blog/education",
    purpose: "Education",
  },
  {
    id:6,
    title: "Nigeria’s Fight Against Infectious Diseases",
    description: "Focus on Nigeria's efforts to combat infectious diseases, including recent outbreaks and the measures being taken to prevent future occurrences.",
    imageUrl: disease,
    link: "/blog/health",
    purpose: "Health",
  },
];

export default blogs
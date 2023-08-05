import React from 'react';
const TopicCard = ({ category }) => {
    return (
      <div className="border rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-bold mb-2">{category.category}</h2>
        <ul className="list-disc pl-6">
          {category.subcategories.map((subcategory, index) => (
            <li key={index} className="mb-2">
              {subcategory}
            </li>
          ))}
        </ul>
      </div>
    );
  };

const ExploreTopics = () => {
  // Sample data containing all the categories and their subcategories
  const data = [
    {
      category: 'Life',
      subcategories: ['Family', 'Adoption', 'Children', 'Elder Care', 'Fatherhood', 'Motherhood'],
    },
    {
      category: 'Health',
      subcategories: ['Aging', 'Coronavirus', 'Covid-19', 'Death And Dying', 'Disease'],
    },
    {
      category: 'Relationships',
      subcategories: ['Dating', 'Divorce', 'Friendship', 'Love', 'Marriage'],
    },
    {
      category: 'Self Improvement',
      subcategories: ['Mental Health', 'Anxiety', 'Counseling', 'Grief', 'Life Lessons', 'Self-awareness'],
    },
    {
      category: 'Productivity',
      subcategories: ['Career Advice', 'Coaching', 'Goal Setting', 'Morning Routines', 'Pomodoro Technique'],
    },
    {
      category: 'Mindfulness',
      subcategories: ['Guided Meditation', 'Journaling', 'Meditation', 'Transcendental Meditation', 'Yoga'],
    },
    {
      category: 'Work',
      subcategories: ['Business', 'Entrepreneurship', 'Freelancing', 'Small Business', 'Startups', 'Venture Capital'],
    },
    {
      category: 'Marketing',
      subcategories: ['Advertising', 'Branding', 'Content Marketing', 'Content Strategy', 'Digital Marketing'],
    },
    {
      category: 'Leadership',
      subcategories: ['Employee Engagement', 'Leadership Coaching', 'Leadership Development', 'Management', 'Meetings'],
    },
    {
      category: 'Technology',
      subcategories: ['Artificial Intelligence', 'ChatGPT', 'Conversational AI', 'Deep Learning', 'Large Language Models', 'Machine Learning'],
    },
    {
      category: 'Blockchain',
      subcategories: ['Bitcoin', 'Cryptocurrency', 'Decentralized Finance', 'Ethereum', 'Nft'],
    },
    {
      category: 'Data Science',
      subcategories: ['Analytics', 'Data Engineering', 'Data Visualization', 'Database Design', 'Sql'],
    },
    {
      category: 'Software Development',
      subcategories: ['Programming', 'Android Development', 'Coding', 'Flutter', 'Frontend Engineering', 'iOS Development'],
    },
    {
      category: 'Dev Ops',
      subcategories: ['AWS', 'Databricks', 'Docker', 'Kubernetes', 'Terraform'],
    },
    {
      category: 'Media',
      subcategories: ['Writing', '30 Day Challenge', 'Book Reviews', 'Books', 'Creative Nonfiction', 'Diary'],
    },
    {
      category: 'Art',
      subcategories: ['Comics', 'Contemporary Art', 'Drawing', 'Fine Art', 'Generative Art'],
    },
    {
      category: 'Gaming',
      subcategories: ['Game Design', 'Game Development', 'Indie Game', 'Metaverse', 'Nintendo'],
    },
    {
      category: 'Society',
      subcategories: ['Economics', 'Basic Income', 'Debt', 'Economy', 'Inflation', 'Stock Market'],
    },
    {
      category: 'Education',
      subcategories: ['Charter Schools', 'Education Reform', 'Higher Education', 'PhD', 'Public Schools'],
    },
    {
      category: 'Equality',
      subcategories: ['Disability', 'Discrimination', 'Diversity In Tech', 'Feminism', 'Inclusion'],
    },
    {
      category: 'Culture',
      subcategories: ['Philosophy', 'Atheism', 'Epistemology', 'Ethics', 'Existentialism', 'Metaphysics'],
    },
    {
      category: 'Religion',
      subcategories: ['Buddhism', 'Christianity', 'Hinduism', 'Islam', 'Judaism'],
    },
    {
      category: 'Spirituality',
      subcategories: ['Astrology', 'Energy Healing', 'Horoscopes', 'Mysticism', 'Reiki'],
    },
    {
      category: 'World',
      subcategories: ['Cities', 'Abu Dhabi', 'Amsterdam', 'Athens', 'Bangkok', 'Barcelona'],
    },
    {
      category: 'Nature',
      subcategories: ['Birding', 'Camping', 'Climate Change', 'Conservation', 'Hiking'],
    },
    {
      category: 'Travel',
      subcategories: ['Tourism', 'Travel Tips', 'Travel Writing', 'Vacation', 'Vanlife'],
    },
  ];
  

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Explore Topics</h1>
    <div className="w-1/2 mx-auto mb-4">
      <input
        type="text"
        className="w-full border border-gray-400 p-2 rounded-lg"
        placeholder="Search Topics..."
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((category, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-xl font-bold mb-2">{category.category}</h2>
          <ul className="pl-6">
            {category.subcategories.map((subcategory, subIndex) => (
              <li key={subIndex} className="mb-2 hover:underline">
                {subcategory}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ExploreTopics;

import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import SubsectionBasic from '../components/subsectionBasic'
import SubsectionImportant from '../components/subsectionImportant'
import EmailCapture from '../components/emailCapture'
import Footer from '../components/footer'

const navToDonatePage = () => {
  // TODO: nav to donate page
}

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <div className="body">
      <SubsectionBasic 
        titleText="100% of your money brings school supplies to teachers and students in need."
        descriptionText="You can help aleviate economic pressure on public school teachers across
          the country. Every penny will help bring school supplies to schools in need."
        buttonText="Give monthly"
        image='../static/images/apple-blur-book-stack.jpg'
        destination="donate"
      />
      <EmailCapture />

      <SubsectionImportant 
        titleText="Ninety-four percent of public school teachers say they spent their own money on notebooks, pens and other supplies in the 2014-15 school year without reimbursement."
        descriptionText="We're on a mission to change that. Here's how."
        buttonText="Learn more"
      />
    </div>

    <Footer />

    <style jsx>{`
      .body {
        color: #333;
      }
    `}</style>
  </div>
)

export default Home

import React from 'react'
import './App.css'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import PasswordRecovery from './Components/PasswordRecovery'
import Profile from './Components/Profile'
import TutorialSection from './Components/TutorialSection'
import ChallengeSection from './Components/ChallengeSection'
import CommunitySection from './Components/CommunitySection'
import AdminPanel from './Components/AdminPanel'
import Gamification from './Components/Gamification'
import Recommendations from './Components/Recommendations'
import Hackathons from './Components/Hackathons'
import LanguageSelector from './Components/LanguageSelector'
import ResponsiveComponent from './Components/ResponsiveComponent'
import AccessibilityComponent from './Components/AccessibilityComponent'

const App = () => {
  return (
    <div>
      <SignUp/>
      <Login/>
      <PasswordRecovery/>
      <Profile/>
      <TutorialSection/>
      <ChallengeSection/>
      <CommunitySection/>
      <AdminPanel/>
      <Gamification/>
      <Recommendations/>
      <Hackathons/>
      <LanguageSelector/>
      <ResponsiveComponent/>
      <AccessibilityComponent/>
    </div>
  )
}

export default App
import { About } from './components/About'
import { CaseStudy } from './components/CaseStudy'
import { CTAFooter } from './components/CTAFooter'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Process } from './components/Process'
import { Services } from './components/Services'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CaseStudy />
        <Process />
        <About />
      </main>
      <CTAFooter />
    </>
  )
}

export default App

import './App.css'
import ProgressBar from './ProgressBar'

function App() {
  const bars= [2,50,70,80,90];
  return (
    <>
      <h1>Progressbar</h1>
      {bars.map(val=> <ProgressBar key={val} progress={val}/>)}
    </>
  )
}

export default App
